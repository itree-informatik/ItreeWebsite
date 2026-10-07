+++
author = "itree informatik"
title = "Von Telerik zu MudBlazor"
date = "2026-10-07"
description = "Auf der Suche nach einer Open-Source-Lösung für DoeA sind wir auf MudBlazor gestossen. Nach DoeA und unserem Intranet steigen wir jetzt komplett von Telerik UI for Blazor auf MudBlazor um."
image = "images/mudblazor.png"
tags = [
    "blazor",
    "mudblazor",
    "itreemud",
    "telerik",
    "open-source",
    "embag",
    "doea",
    "migration",
]
categories = [
    "Unternehmen",
]
+++

Die Oberflächen unserer Blazor-Anwendungen haben wir bisher mit Telerik UI for Blazor gebaut. Jetzt steigen wir komplett auf MudBlazor um – eine Open-Source-Komponentenbibliothek, auf die wir im Rahmen von [DoeA (Dienst öffentliche Ausschreibungen)](/blog/doea-neu-gebaut/) gestossen sind.
<!--more-->

## Die Ausgangslage: DoeA und das EMBAG

Für das Bundesamt für Bauten und Logistik (BBL) haben wir DoeA als Webapplikation [neu gebaut](/blog/doea-neu-gebaut/). Geplant hatten wir die Oberfläche – wie bei unseren anderen Blazor-Anwendungen – mit Telerik UI for Blazor.

Im Verlauf des Projekts wurde uns dann mitgeteilt, dass DoeA dem EMBAG entsprechen muss: Der Quellcode wird als Open Source veröffentlicht. Die Veröffentlichung steht noch bevor.

Offengelegter Quellcode bringt aber nur etwas, wenn andere ihn auch bauen, betreiben und weiterentwickeln können. Unser Ziel war deshalb, so wenige lizenzierte Produkte wie möglich einzusetzen. Ganz ist uns das nicht gelungen, zu einem grossen Teil aber schon.

Das betraf auch die Oberfläche. Telerik UI for Blazor ist kommerziell und wird pro Entwickler lizenziert. Für jeden Build braucht es einen gültigen Lizenzschlüssel – auch in CI/CD-Pipelines. Fehlt er, gibt es Warnungen beim Build und ein Wasserzeichen in der Oberfläche. Wer DoeA nach der Veröffentlichung selbst bauen will, müsste also zuerst eine Telerik-Lizenz kaufen.

Wir haben deshalb gezielt nach einer Komponentenbibliothek unter einer Open-Source-Lizenz gesucht – und sind auf **MudBlazor** gestossen.

---

## MudBlazor im Überblick

MudBlazor ist eine Komponentenbibliothek für Blazor, die sich an Googles Material Design orientiert. Das Projekt steht unter der **MIT-Lizenz** und kann damit frei verwendet, verändert und weitergegeben werden – auch in kommerziellen Projekten.

Hinter MudBlazor steht eine grosse Community. Stand Oktober 2026:

- **seit 2020** auf GitHub, aktuell in Version 9
- rund **10'600 Sterne** und **über 500 Mitwirkende** auf GitHub
- fast **39 Millionen Downloads** auf nuget.org
- Unterstützung für **.NET 8, 9 und 10**

Die Bibliothek deckt ab, was eine Fachanwendung braucht: Eingabefelder mit Validierung, Auswahllisten mit Suche, Datums- und Zeitauswahl, Dialoge, Benachrichtigungen, Tabs, Navigation, Diagramme und ein Datengrid mit Sortierung, Filtern und Gruppierung. Über ein Theme lassen sich Farben, Schriften und Abstände zentral festlegen, ein Dunkelmodus ist eingebaut. Die Texte der Komponenten lassen sich übersetzen – für eine dreisprachige Anwendung wie DoeA eine Voraussetzung.

Zwei Eigenschaften haben uns besonders überzeugt:

- **C# statt JavaScript:** Die Komponenten sind in C# geschrieben, JavaScript kommt nur dort zum Einsatz, wo es nicht anders geht.
- **Wenige Abhängigkeiten:** Das Paket setzt ausschliesslich Pakete von Microsoft voraus. Das ist uns wichtig, weil wir jede Abhängigkeit überwachen und bei Schwachstellen aktualisieren müssen.

---

## DoeA mit MudBlazor

Für DoeA haben wir daraufhin MudBlazor eingesetzt, die Oberfläche der Anwendung basiert darauf.

Weil MudBlazor unter MIT steht, passt die Bibliothek zur Lizenz, unter der DoeA veröffentlicht wird (AGPL-3.0-or-later). Im Verzeichnis der Drittkomponenten wird sie wie jede andere Abhängigkeit aufgeführt – mit Name, Version und Lizenz. Für die Oberfläche braucht es damit weder eine Lizenz noch einen Lizenzschlüssel.

---

## Unser Intranet: von Telerik auf MudBlazor migriert

Als Nächstes war unser eigenes Intranet an der Reihe. Wir hatten es im Zuge des [Wechsels zu GitHub](/blog/von-azure-devops-zu-github/) bereits auf das Nötigste reduziert. Gebaut war es noch mit Telerik UI for Blazor – jetzt haben wir es auf MudBlazor migriert.

Damit haben wir MudBlazor nicht nur in einem neuen Projekt eingesetzt, sondern auch eine bestehende Anwendung von Telerik umgestellt.

---

## Der nächste Schritt: der komplette Umstieg

Die Erfahrungen mit DoeA und dem Intranet waren so gut, dass wir jetzt komplett von Telerik UI for Blazor auf MudBlazor umsteigen.

### Eine Bibliothek statt zwei

Zwei UI-Bibliotheken parallel zu betreiben heisst: zwei Arten, Oberflächen zu bauen, zwei Sätze von Updates und zwei Komponenten, die wir auf Schwachstellen überwachen. Mit einer einzigen Bibliothek sehen unsere Anwendungen einheitlich aus, und was wir in einem Projekt lernen, gilt auch im nächsten.

### Bereit für Open Source

Bei DoeA kam die Vorgabe des EMBAG erst im Verlauf des Projekts. Baut eine Anwendung von Anfang an auf MudBlazor auf, ist sie auf eine solche Vorgabe vorbereitet: Die UI-Bibliothek steht einer Veröffentlichung nicht im Weg – unabhängig davon, ob sie heute schon geplant ist.

### Keine Lizenzschlüssel in der Pipeline

Unsere Anwendungen bauen und veröffentlichen wir über GitHub Actions. Mit MudBlazor muss dort kein Lizenzschlüssel hinterlegt und gepflegt werden. Wer ein Projekt auscheckt, kann es sofort bauen.

### Offen entwickelt

Der Quellcode von MudBlazor liegt offen auf GitHub, Fehler und geplante Änderungen sind öffentlich einsehbar. Wenn wir einem Problem begegnen, können wir im Code nachsehen, wie sich eine Komponente verhält – und Korrekturen selbst beitragen.

Telerik bietet mit über 120 Komponenten und kommerziellem Support ein umfangreiches Paket. Für die Anwendungen, die wir entwickeln, deckt MudBlazor aber alles ab, was wir brauchen.

---

## ItreeMud: unsere Komponenten auf Basis von MudBlazor

Wie zuvor bei Telerik setzen wir auch MudBlazor nicht in jeder Anwendung einzeln ein. Mit **ItreeMud** bauen wir wieder eine eigene Komponentenschicht darüber. Sie setzt die Komponenten so um, wie wir sie in unseren Anwendungen haben wollen – in der Darstellung und im Verhalten.

Was mehrere Anwendungen brauchen, entwickeln wir in ItreeMud einmal und nicht in jedem Projekt neu. Ein Beispiel ist unsere automatische Formulargenerierung: Eingabemasken entstehen automatisch, statt in jeder Anwendung Feld für Feld von Hand gebaut zu werden. So vermeiden wir Doppelspurigkeiten – und sparen damit das Geld unserer Kunden.

---

## Was bedeutet das für unsere Kunden?

Für unsere Kunden heisst der Umstieg vor allem: weniger Abhängigkeit von einem einzelnen Hersteller. Nach der Umstellung lässt sich der Quellcode Ihrer Anwendung ohne Telerik-Lizenz bauen und weiterentwickeln, und einer Veröffentlichung als Open Source steht die UI-Bibliothek nicht mehr im Weg. Gemeinsame Funktionen wie die automatische Formulargenerierung entwickeln wir einmal in ItreeMud – und nicht für jede Anwendung neu.

- MudBlazor: [mudblazor.com](https://mudblazor.com)
- Quellcode: [github.com/MudBlazor/MudBlazor](https://github.com/MudBlazor/MudBlazor)
- Paket: [nuget.org/packages/MudBlazor](https://www.nuget.org/packages/MudBlazor)

> **Kurz gesagt:** Gesucht haben wir eine Open-Source-Lösung für DoeA – gefunden haben wir die neue Basis für alle unsere Blazor-Anwendungen.
