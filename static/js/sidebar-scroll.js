function highlightActiveChapter() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.chapter-link');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('bg-primary', 'text-white');
    if (link.getAttribute('data-chapter') === current) {
      link.classList.add('bg-primary', 'text-white');
    }
  });
}

window.addEventListener('scroll', highlightActiveChapter);
document.addEventListener('DOMContentLoaded', highlightActiveChapter);