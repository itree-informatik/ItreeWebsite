+++
author = "itree informatik"
title = "Von Azure DevOps zu GitHub"
date = "2026-03-22"
description = "Warum wir unsere gesamte Entwicklungsplattform auf GitHub konsolidiert haben – und was das für unsere Kunden bedeutet."
image = "images/github.png"
tags = [
    "github",
    "azure-devops",
    "migration",
    "strategie",
]
categories = [
    "Unternehmen",
]
+++

Wir haben unsere gesamte Entwicklungsinfrastruktur auf GitHub konsolidiert. In diesem Beitrag erklären wir, warum wir diesen Schritt gemacht haben und welche Vorteile sich daraus ergeben.
<!--more-->

## Die Ausgangslage

Über die Jahre sind bei uns – wie in vielen Unternehmen – verschiedene Werkzeuge gewachsen. Der Quellcode lag in **Azure DevOps**, die Projektplanung und das Issue-Management lief über **Taiga**, und für interne Abläufe hatten wir ein **eigenes Intranet** mit einem selbst gebauten Issue-Board. Drei Plattformen, drei Logins, drei Orte, an denen Informationen lagen.

Das hat funktioniert – aber es war **fragmentiert**. Fehlermeldungen von Kunden landeten im Intranet, Aufgaben in Taiga, der zugehörige Code in Azure DevOps. Wer den Gesamtüberblick wollte, musste zwischen drei Systemen springen. Und wenn eine Ansprechperson ausfiel, war oft nicht klar, wo welcher Stand dokumentiert war.

Als Taiga dann ankündigte, **umgebaut und kostenpflichtig** zu werden, war das der Anstoss, die Situation grundsätzlich zu überdenken. Nicht als Reaktion auf ein einzelnes Tool – sondern als Chance, **radikal aufzuräumen**.

---

## Die Entscheidung: Alles auf GitHub

Statt Taiga durch das nächste Tool zu ersetzen, haben wir die Frage anders gestellt: **Was, wenn wir nur noch eine Plattform brauchen?**

GitHub kann heute weit mehr als Code hosten. Mit **GitHub Actions** für CI/CD, **GitHub Projects** für Projektplanung und **GitHub Issues** für Fehlermanagement deckt es alles ab, was wir bisher auf drei Systeme verteilt hatten. Die Entscheidung war klar:

- **Azure DevOps** abgelöst – Code und Pipelines migriert auf GitHub
- **Taiga** abgeschaltet – Projektplanung läuft über GitHub Projects
- **Intranet radikal ausgedünnt** – das eigene Issue-Board entfernt, Fehlermeldungen laufen über GitHub Issues

**Eine Plattform für alles.**

---

## Warum GitHub?

### KI-Integration, die es sonst nirgends gibt

Der entscheidende Unterschied: **GitHub bietet eine KI-Integration, die bei Azure DevOps schlicht nicht existiert.** GitHub Copilot ist heute tief in die gesamte Plattform eingebettet – von **Code-Vervollständigung** über **Pull Request Reviews** und **automatisierte Zusammenfassungen** bis hin zu **Copilot Chat** direkt im Repository. Auch **Claude**, unser bevorzugtes KI-Modell, lässt sich nahtlos in GitHub-Workflows einbinden.

Wer KI ernsthaft in den Entwicklungsprozess integrieren will, kommt an GitHub nicht vorbei. Azure DevOps bietet hier **keine vergleichbare Lösung**.

### Projektplanung über Repository-Grenzen hinweg

Mit **GitHub Projects** können wir Aufgaben, Issues und Meilensteine **über mehrere Repositories hinweg** in einer einzigen Übersicht planen und verfolgen. Das ist für uns als Firma mit mehreren parallel laufenden Projekten entscheidend. Wir sehen auf einen Blick, was wo steht – ohne in verschiedenen Backlogs zwischen Projekten hin- und herzuspringen.

### State of the Art

GitHub ist die **weltweit grösste Entwicklungsplattform** – und das nicht ohne Grund. Die Innovationsgeschwindigkeit ist beeindruckend: GitHub Actions, Codespaces, Advanced Security, Dependabot, GitHub Projects v2 – in den letzten Jahren hat GitHub sein Angebot massiv ausgebaut. Gleichzeitig hat sich bei Azure DevOps die Weiterentwicklung **spürbar verlangsamt**.

Wir wollen mit Werkzeugen arbeiten, die **aktiv weiterentwickelt** werden und die Standards von morgen setzen.

### Transparentes Fehlermanagement

Das war einer der wichtigsten Treiber: **Fehlermeldungen müssen klar erfassbar, nachvollziehbar und personenungebunden sein.** Im alten Setup waren Issues an interne Abläufe und Ansprechpersonen gekoppelt. Wenn jemand im Urlaub oder krank war, ging Kontext verloren.

Auf GitHub ist jedes Issue **transparent dokumentiert** – mit Verlauf, Zuweisungen und Status. Kunden können Fehler und Wünsche direkt erfassen, den Fortschritt jederzeit einsehen und nachvollziehen, was passiert. **Keine Abhängigkeit von einzelnen Personen, keine Black Box.**

### Sichtbarkeit als Visitenkarte

GitHub ist nicht nur ein Entwicklungstool, sondern auch eine **Visitenkarte**. Unsere öffentlichen Repositories, unsere Aktivität und unsere Arbeitsweise sind für Kunden und Partner sichtbar. Das schafft Vertrauen. Azure DevOps und unser Intranet waren in dieser Hinsicht geschlossene Welten.

---

## Unsere Strategie: Radikal vereinfachen

Die Migration war kein rein technischer Entscheid – sie ist Teil einer bewussten **Plattformstrategie**:

- **Eine Plattform für alles** – Code, Pipelines, Planung, Security, Dokumentation und Fehlermanagement an einem Ort
- **Intranet ausdünnen** – nur noch das Nötigste intern, alles andere auf GitHub
- **Maximale KI-Nutzung** – GitHub Copilot, Claude und weitere Tools dort einsetzen, wo sie am meisten bringen
- **Globale Projektübersicht** – alle Projekte und Repositories in einer einheitlichen Planung
- **Transparenz für Kunden** – direkter Zugang zu Issues, personenungebunden und jederzeit nachvollziehbar
- **Zukunftssicherheit** – auf die Plattform setzen, die den Standard in der Softwareentwicklung definiert

---

## Was bedeutet das für unsere Kunden?

Für Sie als Kunde ändert sich vor allem eines: **Die Zusammenarbeit wird direkter und transparenter.** Sie können Fehler und Wünsche direkt als GitHub Issues erfassen, den Status Ihrer Anfragen jederzeit einsehen und bei Bedarf direkt mit unserem Entwicklungsteam kommunizieren – unabhängig davon, wer gerade im Büro ist.

Falls Sie noch nicht mit GitHub gearbeitet haben – kein Problem. In unserem Beitrag [Markdown Grundlagen](/blog/markdown-syntax/) zeigen wir Ihnen alles, was Sie brauchen, um Issues zu erfassen und zu formatieren.

Besuchen Sie uns auf [GitHub](https://github.com/itree-informatik) – dort sehen Sie, wie wir arbeiten, und können bei Ihrem Projekt direkt mit uns zusammenarbeiten.

> **Kurz gesagt:** Weniger Werkzeuge, mehr Übersicht, transparentes Fehlermanagement – das ist unser Versprechen mit dem Wechsel zu GitHub.
