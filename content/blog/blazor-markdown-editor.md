+++
author = "itree informatik"
title = "BlazorMarkdownEditor – unser erstes Open-Source-Projekt unter MIT"
date = "2026-09-24"
description = "Mit dem BlazorMarkdownEditor veröffentlichen wir unser erstes Projekt unter der MIT-Lizenz: eine schlanke Markdown-Komponente für Blazor ohne Fremdabhängigkeiten – mit einer Vorschau, die eingebettetes HTML als Text anzeigt statt es auszuführen."
image = "images/markdown.png"
tags = [
    "blazor",
    "markdown",
    "open-source",
    "mit",
    "sicherheit",
    "nuget",
    "claude",
]
categories = [
    "Produkt",
]
+++

Für formatierte Texte in unseren Blazor-Anwendungen haben wir einen eigenen Markdown-Editor geschrieben. Jetzt stellen wir ihn allen zur Verfügung – als Quellcode auf GitHub und als Paket auf nuget.org.
<!--more-->

## Was der BlazorMarkdownEditor macht

Der Editor funktioniert ähnlich wie das Eingabefeld bei GitHub Issues: Im Reiter **Write** erfasst man den Text in Markdown, im Reiter **Preview** sieht man das formatierte Ergebnis. Eine Symbolleiste fügt die Formatierung per Klick ein. Wer Markdown nicht kennt, muss die Syntax also nicht auswendig wissen.

- **Symbolleiste** für Überschriften, fett, kursiv, Zitat, Code, Aufzählungen, nummerierte Listen, Links und Tabellen
- **Lesemodus** – mit `Readonly` zeigt die Komponente nur den formatierten Text, ohne Reiter und Symbolleiste
- **Syntaxhervorhebung** für Codeblöcke mit Sprachangabe
- **Formularbindung** über `@bind-Value`, inklusive Validierung in einem `EditForm`
- **Übersetzbar** – alle Texte sind standardmässig Englisch und lassen sich über einen Parameter ersetzen

Gespeichert wird immer der Markdown-Text. Soll er an anderer Stelle formatiert angezeigt werden, wandelt `MarkdownConverter.ToHtml()` ihn in HTML um.

Das Paket ist auf nuget.org verfügbar. Script und Stylesheet werden automatisch mitgeliefert, im Projekt muss nichts zusätzlich eingebunden werden:

```bash
dotnet add package BlazorMarkdownEditor
```

```html
<MarkdownEditor @bind-Value="_text" Placeholder="Kommentar erfassen" />
```

Wer mit Markdown noch nicht vertraut ist: In unserem Beitrag [Markdown Grundlagen](/blog/markdown-syntax/) erklären wir die wichtigsten Zeichen.

---

## Warum Markdown sicherer ist als HTML

Für formatierte Texte bieten Webanwendungen häufig einen HTML-Editor an: Man formatiert wie in Word, im Hintergrund entsteht HTML. Um den Text später anzuzeigen, wird dieses HTML unverändert in die Seite eingefügt – in Blazor mit `MarkupString`, das die automatische Kodierung bewusst umgeht. Der Browser interpretiert dann alles, was im Text steht.

Genau dort liegt das Risiko. HTML kann mehr als formatieren: Ein `<script>`-Element, ein Bild mit `onerror`-Attribut oder ein Link auf `javascript:` führen Code aus. Gelangt so etwas in einen gespeicherten Text, läuft der Code im Browser jeder Person, die den Text öffnet – und kann dort in ihrem Namen handeln. Diese Angriffsart heisst **Cross-Site Scripting (XSS)**.

Der Editor selbst schützt davor nicht. Er erzeugt zwar nur harmloses HTML, gespeichert wird aber, was beim Server ankommt – und das lässt sich auch am Editor vorbei direkt senden. Wer HTML aus einem Editor anzeigt, muss es deshalb vor der Anzeige filtern. Das ist möglich, aber anspruchsvoll: HTML ist umfangreich, Browser sind fehlertolerant, und ein Filter muss jede Umgehung kennen.

Markdown dreht das Prinzip um. Der gespeicherte Text enthält kein HTML, sondern einfache Zeichen wie `#` oder `**`. HTML entsteht erst bei der Anzeige – und zwar nur aus den Bausteinen, die der Konverter selbst kennt. Unser Konverter geht dabei so vor:

- **Erst kodieren, dann formatieren:** Bevor Markdown interpretiert wird, wird der gesamte Text HTML-kodiert. Ein `<script>` im Text erscheint in der Vorschau als sichtbarer Text – angezeigt, nicht ausgeführt.
- **Feste Bausteine:** Die Ausgabe enthält nur Elemente, die der Konverter selbst erzeugt: Überschriften, Absätze, fett und kursiv, Listen, Zitate, Code, Tabellen, Links und Trennlinien.
- **Nur sichere Links:** Erlaubt sind `http`, `https`, `mailto`, relative Pfade und Sprungmarken. Ein Link auf `javascript:` oder `data:` bleibt reiner Text. Ist der Doppelpunkt mehrfach URL-kodiert (`%3A`, `%253A` …), wird er vor der Prüfung vollständig dekodiert.

Diese Fälle sind mit automatisierten Tests abgedeckt.

Ein Nebeneffekt: Markdown bleibt auch ohne Darstellung lesbar – etwa direkt in der Datenbank oder beim Vergleich zweier Versionen.

---

## Im Einsatz in unseren Fachanwendungen

In unseren Fachanwendungen pflegen berechtigte Personen das Impressum und die rechtlichen Hinweise wie Haftungsausschluss und Datenschutzerklärung selbst. Bisher geschah das mit einem HTML-Editor, gespeichert und angezeigt wurde HTML.

Diese Seiten haben wir auf den BlazorMarkdownEditor umgestellt und die bestehenden Texte einmalig nach Markdown überführt. Im Lesemodus zeigt die Komponente den formatierten Text. Wer die Berechtigung hat, wechselt in den Bearbeitungsmodus – mit Symbolleiste und Vorschau.

Die Komponente ist in unser gemeinsames Framework eingebunden. Damit steht sie allen Anwendungen zur Verfügung, die darauf aufbauen.

---

## Warum selbst geschrieben?

Markdown-Editoren und -Bibliotheken für .NET gibt es einige. Wir haben uns trotzdem für eine eigene Komponente entschieden.

### Keine Abhängigkeiten

Die einzige Abhängigkeit des Pakets ist Blazor selbst. Keine UI-Bibliothek wie Telerik, MudBlazor oder Bootstrap, keine externe Markdown-Bibliothek. Damit lässt sich die Komponente in jeder Blazor-Anwendung einsetzen, unabhängig davon, welche UI-Bibliothek dort verwendet wird.

Das ist uns wichtig, weil jede Abhängigkeit eine Komponente ist, die wir überwachen und bei Schwachstellen aktualisieren müssen. Dazu kommt: Der Markdown-Standard CommonMark erlaubt eingebettetes HTML. Wer eine vollständige Markdown-Bibliothek einsetzt, muss das bewusst abschalten – sonst ist das HTML-Problem durch die Hintertür zurück. Unser Konverter unterstützt von vornherein nur die Teilmenge, die wir brauchen.

Einzige Ausnahme: Für die Syntaxhervorhebung liegt dem Paket eine Kopie von highlight.js bei (BSD-3-Clause-Lizenz). Sie wird erst geladen, wenn tatsächlich ein Codeblock angezeigt wird.

### Schlank

Der Konverter umfasst rund 360 Zeilen C#, die ganze Komponente samt Stylesheet und JavaScript rund 1000 Zeilen. JavaScript braucht es nur für die Symbolleiste – um Formatierung an der Cursorposition einzufügen – und für die Syntaxhervorhebung.

Dafür unterstützt der Editor bewusst nicht alles, was Markdown kann: Bilder oder verschachtelte Listen zum Beispiel fehlen.

### Im Pairing mit Claude

Geschrieben haben wir den Editor im Pairing mit Claude, dem KI-Modell von Anthropic. Wir haben die Anforderungen vorgegeben und jede Änderung geprüft, Claude hat Code und Tests mitgeschrieben. Die entsprechenden Commits sind im Repository gekennzeichnet.

Das verändert die klassische Abwägung zwischen „selbst bauen“ und „fertig übernehmen“. Eine kleine, klar umrissene Komponente selbst zu schreiben, ist im Pairing mit KI deutlich weniger Aufwand als früher. Der Aufwand für eine Abhängigkeit – überwachen, aktualisieren, Lizenzen prüfen – bleibt dagegen gleich.

---

## Open Source unter MIT

Die MIT-Lizenz erlaubt es, den Code frei zu verwenden, zu verändern und weiterzugeben – auch in kommerziellen Projekten, solange der Lizenzhinweis erhalten bleibt.

Neue Versionen veröffentlicht unsere GitHub-Actions-Pipeline auf nuget.org, jeweils erst nach einer manuellen Freigabe. Dafür ist kein langlebiger API-Schlüssel hinterlegt: Die Pipeline weist sich über Trusted Publishing (OIDC) bei nuget.org aus.

- Quellcode: [github.com/itree-informatik/BlazorMarkdownEditor](https://github.com/itree-informatik/BlazorMarkdownEditor)
- Paket: [nuget.org/packages/BlazorMarkdownEditor](https://www.nuget.org/packages/BlazorMarkdownEditor)

Fehlermeldungen und Vorschläge sind als GitHub Issue willkommen.

> **Kurz gesagt:** Ein Markdown-Editor für Blazor, der nur Blazor voraussetzt, eingebettetes HTML als Text anzeigt und unter MIT-Lizenz frei verwendet werden kann.
