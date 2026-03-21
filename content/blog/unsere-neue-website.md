+++
author = "itree informatik"
title = "Unsere neue Website"
date = "2026-03-21"
description = "Wie wir unsere Website mit Hugo, Tailwind CSS und Azure Static Web Apps gebaut haben – und warum wir auf ein klassisches CMS verzichten."
tags = [
    "hugo",
    "website",
    "tailwind",
    "azure",
]
categories = [
    "Unternehmen",
]
+++

Unsere Website hat ein komplett neues Fundament bekommen. In diesem Beitrag zeigen wir, welche Technologien wir einsetzen, warum wir uns für diesen Stack entschieden haben und wie der Weg vom Code-Commit zur fertigen Seite aussieht.
<!--more-->

## Der Technologie-Stack

### Hugo – der Static Site Generator

Das Herzstück unserer Website ist **Hugo**, einer der schnellsten Static Site Generators auf dem Markt. Hugo nimmt unsere Inhalte – geschrieben in Markdown und YAML – und generiert daraus eine komplett statische Website. Keine Datenbank, kein PHP, kein CMS-Backend.

Als Theme setzen wir auf **hugo-up-business**, das wir an unsere Bedürfnisse angepasst haben. Hugo's Modulsystem erlaubt es uns, das Theme als Dependency einzubinden und gezielt einzelne Layouts zu überschreiben, ohne das Original zu verändern.

### Tailwind CSS 4.0 – modernes Styling

Für das Design nutzen wir **Tailwind CSS 4.0** – ein Utility-First CSS-Framework, das uns erlaubt, Layouts direkt im HTML zu gestalten, ohne separate CSS-Dateien pflegen zu müssen. Das Ergebnis: **schlanker Code, konsistentes Design** und schnelle Anpassungen.

### Zweisprachigkeit

Die gesamte Website ist **zweisprachig** aufgebaut – Deutsch und Französisch. Hugo's eingebaute Mehrsprachigkeit macht das elegant: Jede Seite existiert in beiden Sprachen, Menüs und UI-Texte werden über i18n-Dateien übersetzt, und der Sprachwechsel funktioniert nahtlos.

### Kein Tracking, keine Cookies

Bewusst verzichten wir auf **Google Analytics, Cookies und jegliches Tracking**. Datenschutz ist uns wichtig – und eine Marketing-Website braucht keine Nutzerverfolgung. Die Karte auf der Kontaktseite läuft über **OpenStreetMap**, ebenfalls ohne zusätzliches Tracking.

---

## Warum Hugo und nicht WordPress?

Die Frage kommt oft: Warum kein WordPress, kein Joomla, kein klassisches CMS? Die Antwort ist einfach:

### Geschwindigkeit

Hugo generiert unsere gesamte Website in **unter einer Sekunde**. Das Ergebnis sind reine HTML-Dateien, die ohne serverseitige Verarbeitung direkt an den Browser ausgeliefert werden. Kein Warten auf Datenbankabfragen, keine langsamen Plugins. Die Seite lädt **praktisch sofort**.

### Sicherheit

Kein CMS-Backend bedeutet: **keine Angriffsfläche**. Keine Login-Seite, die gehackt werden kann. Keine Datenbank, die per SQL-Injection kompromittiert wird. Keine veralteten Plugins mit bekannten Sicherheitslücken. Eine statische Website ist im Grunde **nicht angreifbar** – es gibt schlicht keinen serverseitigen Code, der ausgenutzt werden könnte.

Wer schon einmal eine gehackte WordPress-Seite bereinigen musste, weiss, wie viel das wert ist.

### Wartungsfreiheit

WordPress muss regelmässig aktualisiert werden – Core, Plugins, Themes, PHP-Version. Verpasst man ein Update, riskiert man Sicherheitslücken. Bei Hugo gibt es **nichts zu warten**. Die generierten HTML-Dateien laufen einfach. Kein Patching, kein Plugin-Chaos, keine Kompatibilitätsprobleme.

### Versionierung

Unsere gesamte Website – Inhalte, Layouts, Konfiguration – liegt in einem **Git-Repository**. Jede Änderung ist nachvollziehbar, jeder Stand wiederherstellbar. Wir können Änderungen in einem Branch vorbereiten, reviewen und erst dann veröffentlichen. Versuchen Sie das mal mit einer WordPress-Datenbank.

### Kosten

Das Hosting einer statischen Website auf Azure Static Web Apps ist **nahezu kostenlos**. Kein Server, der 24/7 laufen muss. Kein Datenbankserver. Keine CMS-Lizenz. Nur ein paar Megabyte HTML, CSS und Bilder auf einem CDN.

---

## Der Deployment-Prozess

Unser Deployment ist **vollständig automatisiert** – vom Code-Commit bis zur live geschalteten Website passiert alles ohne manuellen Eingriff:

**1. Code pushen** – Wir committen unsere Änderungen und pushen sie auf den `master`-Branch auf GitHub.

**2. GitHub Action wird ausgelöst** – Ein Push auf `master` triggert automatisch unsere CI/CD-Pipeline. Auch Pull Requests erhalten ein automatisches Preview-Deployment.

**3. Hugo baut die Website** – Die GitHub Action installiert die neueste Hugo Extended Version und baut die gesamte Website mit `hugo --minify`. Alle HTML-, CSS- und JavaScript-Dateien werden dabei komprimiert.

**4. Deployment auf Azure Static Web Apps** – Die generierten Dateien aus dem `public`-Ordner werden automatisch auf **Azure Static Web Apps** deployed. Azure verteilt die Dateien über ein globales **CDN** (Content Delivery Network) für schnelle Ladezeiten weltweit.

**5. Website ist live** – Innerhalb von wenigen Minuten nach dem Push ist die neue Version online. Keine FTP-Uploads, keine manuellen Server-Konfigurationen.

```
Code ändern → Git Push → GitHub Action → Hugo Build → Azure Static Web Apps → Live
```

Das Gleiche, was wir unseren Kunden im Bereich [Automatisierung](/services/#automatisierung) empfehlen, leben wir selbst: **Vom Commit bis zur Auslieferung läuft alles automatisch.**

---

## Fazit

Unsere Website ist ein gutes Beispiel dafür, dass **weniger oft mehr ist**. Kein aufgeblähtes CMS, keine Datenbank, kein Tracking – dafür eine schnelle, sichere und wartungsfreie Seite, die wir mit denselben Werkzeugen pflegen, mit denen wir auch Software entwickeln.

| | Hugo (statisch) | WordPress (CMS) |
|---|---|---|
| **Ladezeit** | Millisekunden | Sekunden |
| **Sicherheit** | Keine Angriffsfläche | Regelmässige Updates nötig |
| **Wartung** | Keine | Plugins, Core, PHP |
| **Hosting-Kosten** | Fast kostenlos | Server + DB nötig |
| **Versionierung** | Git | Manuell / Plugins |
| **Deployment** | Automatisch | Manuell / Plugins |

## Mit KI gebaut – und das ist gut so

Diese Website wurde mit Unterstützung von **Claude** (Anthropic) entwickelt. Nicht, weil wir es nicht selbst könnten – sondern weil KI ein **Werkzeug** ist, das wir bewusst einsetzen, um schneller ans Ziel zu kommen. Inhalte, Übersetzungen, Layouts, Konfigurationen – vieles entstand im Dialog mit einer KI, die wir aktiv gesteuert und überprüft haben.

Es gibt eine Vorstellung, dass „echtes" Programmieren bedeutet, jede Zeile selbst zu tippen. Wir sehen das anders: **KI ist kein Ersatz für Kompetenz – sie ist ein Multiplikator.** Ein erfahrener Entwickler, der KI einsetzt, arbeitet nicht weniger qualifiziert, sondern effizienter. Die Entscheidungen, die Architektur, das Urteilsvermögen – das kommt weiterhin vom Menschen.

**Fatal wird es erst, wenn KI ohne Aufsicht zum Einsatz kommt.** Wenn niemand mehr versteht, was der generierte Code tut, wenn Ergebnisse ungeprüft übernommen werden, wenn das Wissen hinter der Arbeit verschwindet. Genau deshalb setzen wir KI **immer unter Aufsicht** ein: als Beschleuniger, nicht als Autopilot.

Übrigens: Der gesamte Quellcode dieser Website ist öffentlich auf [GitHub](https://github.com/itree-informatik/ItreeWebsite) einsehbar. Schauen Sie rein – so arbeiten wir.

> **Unser Credo:** Wir empfehlen nur, was wir selbst einsetzen. Diese Website ist der Beweis.
