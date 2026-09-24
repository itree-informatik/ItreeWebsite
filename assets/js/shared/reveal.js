// Inhalte beim ersten Hereinscrollen einblenden: Startseite ab dem Kundenkarussell sowie Abschnitte mit data-reveal-children (AVG2, Services).
// Was beim Betreten schon (auch nur teilweise) im Bild ist, wird sofort animiert; bis hier alles vorbereitet ist, verbirgt die Klasse reveal-pending (Inline-Script in baseof.html) die Bereiche.
// Ohne JavaScript oder bei «Bewegung reduzieren» bleibt alles sofort sichtbar.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!reduceMotion && 'IntersectionObserver' in window) {
  // Beim Scrollen auslösen, sobald die Oberkante 15 % über dem unteren Bildrand liegt
  const triggerLine = 0.85
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: `0px 0px -${Math.round((1 - triggerLine) * 100)}% 0px` },
  )

  const reveal = (block) => {
    // Raster (Bild/Text-Zeilen, Karten) Spalte für Spalte animieren, alles andere als Ganzes
    const targets = block.classList.contains('grid') ? [...block.children] : [block]
    const boxes = targets.map((target) => target.getBoundingClientRect())
    const sameRow = targets.length > 1 && boxes.every((box) => Math.round(box.top) === Math.round(boxes[0].top))
    const leftmost = Math.min(...boxes.map((box) => box.left))

    targets.forEach((target, index) => {
      // Zwei Spalten nebeneinander fliegen von ihrer Seite herein, sonst von unten
      let direction = 'up'
      if (sameRow && targets.length === 2) direction = boxes[index].left === leftmost ? 'left' : 'right'

      target.classList.add('reveal')
      target.dataset.reveal = direction
      if (sameRow && direction === 'up') target.style.transitionDelay = `${index * 150}ms`

      // Beim Betreten sichtbar: einen Frame im Startzustand zeichnen, dann einblenden
      const inView = boxes[index].top < window.innerHeight && boxes[index].bottom > 0
      if (inView) requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('is-revealed')))
      else observer.observe(target)
    })
  }

  for (const section of document.querySelectorAll('#brands ~ section')) {
    section.classList.add('reveal-section')
    section.querySelectorAll(':scope > .container > *').forEach(reveal)
  }

  document.querySelectorAll('[data-reveal-children] > *').forEach(reveal)
}

document.documentElement.classList.remove('reveal-pending')
