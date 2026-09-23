+++
author = "itree informatik"
title = "AVG2 Sommerrelease 3.2.0 – was sich ändert"
date = "2026-07-06"
description = "Mit dem Sommerrelease 3.2.0 wird der Kanton St. Gallen in AVG2 eingeführt. Dazu kommen der neue Betriebstyp, ein Protokoll aller versendeten E-Mails und weitere Neuerungen – hier die wichtigsten im Überblick."
image = "images/avg2.png"
tags = [
    "avg2",
    "release",
    "update",
    "st-gallen",
]
categories = [
    "Produkt",
]
+++

Das Sommerrelease 3.2.0 bringt einen neuen Kanton, eine klarere Einordnung der Betriebe und mehr Transparenz beim E-Mail-Versand. Hier die wichtigsten Neuerungen im Überblick.
<!--more-->

## 🏔️ Der Kanton St. Gallen ist an Bord

Im April haben wir [angekündigt](/blog/kanton-st-gallen-neuer-avg2-kunde/), dass der Kanton St. Gallen künftig auf AVG2 setzt. Mit 3.2.0 wird St. Gallen eingeführt – und mit ihm eine ganze Reihe von Erweiterungen, die wir im Projekt gemeinsam umgesetzt haben.

### Importieren statt doppelt erfassen

Viele Daten liegen beim Kanton bereits vor. Neu fliessen sie per Datei-Upload (CSV oder Excel) direkt in AVG2 ein:

- **KLV-Leistungsstunden** der Spitex-Organisationen
- **Bewohnerinnen und Bewohner pro Pflegestufe** der Pflegeheime
- **Stellenplan-Daten** – Vollzeitäquivalente pro Personalfunktion – der Listenspitäler

Die Zuordnung zum Betrieb erfolgt über die BUR-Nummer, jeder Import wird protokolliert. Importierte Werte sind für die Leistungserbringer schreibgeschützt: Sie kontrollieren und geben frei, statt selbst zu erfassen. Beim Stellenplan können sie weiterhin Abzüge geltend machen.

### Ein feiner strukturierter Stellenplan

- **Hierarchie für Funktionen und Abschlüsse:** Unterpositionen erscheinen eingerückt unter ihrer übergeordneten Position. Eine Validierung stellt sicher, dass die Summe der Unterpositionen den übergeordneten Wert nicht übersteigt.
- **Personalfunktion-Code gemäss Krankenhausstatistik:** Er lässt sich auf Funktionen und Abschlüssen hinterlegen und wird im Stellenplan angezeigt.
- **Zwei zusätzliche Abzüge:** „Nicht Spitalliste“ und „Kein Patientenkontakt“ reduzieren die massgebende Stellenzahl.

### Abrechnung und Ausgleichszahlung

- **Ausbildungsabbrüche** werden separat erfasst und gemäss einem in den Stammdaten festgelegten Prozentsatz anteilig angerechnet.
- **Ausgleichszahlung nach fehlenden Wochen:** Neben der bisherigen Berechnung steht eine Variante zur Verfügung, die fehlende Ausbildungswochen mit einem Ausgleichsbetrag pro Woche und Versorgungsbereich multipliziert.
- **Neue Erlasslogik:** Pro Ausgleichszahlung lässt sich zwischen Ersatzabgabe, Antrag kein Erlass, Antrag Teilerlass und Antrag vollständiger Erlass wählen – inklusive passender Platzhalter für die Wordvorlagen.

Wie gewohnt sind die neuen Funktionen über die Konfiguration steuerbar. Für die bestehenden Kantone ändert sich nichts, solange sie nicht aktiviert werden.

## 🏢 Betriebstyp: Betrieb, Heim oder Trägerschaft

Bisher gab es auf dem Betrieb ein einfaches Ja/Nein-Feld „Trägerschaft“. Das reichte für die fachliche Realität nicht mehr aus.

Neu kennt AVG2 den **Betriebstyp** mit drei Werten: **Betrieb**, **Heim** und **Trägerschaft**. Der Typ muss nicht gepflegt werden – AVG2 leitet ihn automatisch aus der Hierarchie ab: Wer einer Trägerschaft untergeordnet ist, ist ein Heim; wer Heime unter sich hat, ist eine Trägerschaft; alle anderen sind Betriebe. Ändert sich die Hierarchie, passt sich der Typ von selbst an.

Der Betriebstyp erscheint in der Betriebsliste, in der erweiterten Suche und auf der Detailseite des Betriebs. Auch die Filter, der Excel-Export und die Auswertungen (Jahresdaten, Personenliste) berücksichtigen ihn.

## 📧 E-Mail-Log: jede E-Mail wird protokolliert

Neu protokolliert AVG2 jede einzelne E-Mail, die die Applikation versendet. Das Protokoll ist unter **Einstellungen › Log** im neuen Tab **„E-Mail-Log“** einsehbar.

Pro Eintrag sehen Sie:

- welche **Vorlage** verwendet wurde,
- an welche **Empfänger** die E-Mail adressiert war,
- **Betreff**, **Versandzeitpunkt** und wer den Versand ausgelöst hat,
- den **Status**: an den Mailserver übergeben, Testversand oder Fehler – bei Fehlern inklusive Meldung des Mailservers.

Ein Klick auf eine Zeile öffnet die vollständige Nachricht. Beim Massenversand entsteht pro Versandpaket ein Eintrag mit allen Empfängern. Über die Suche lässt sich nach Text und Zeitraum filtern.

## ✉️ Vorlagen selbst verwalten – und vorher testen

Rund um E-Mail- und Wordvorlagen hat sich einiges getan:

- **E-Mail-Vorlagen** können neu selbst hinzugefügt und gelöscht werden. Vorlagen, die AVG2 für seine Abläufe benötigt, bleiben geschützt und lassen sich nur bearbeiten.
- **Pro Prozesskonfiguration** kann eine eigene E-Mail-Vorlage hinterlegt werden – etwa unterschiedliche Texte für Bund und Kanton im selben Prozessschritt.
- **Testmails mit Platzhaltern:** Beim Testversand einer E-Mail-Vorlage lassen sich die Platzhalter-Werte in einem Formular eingeben.
- **Wordvorlagen testen:** Betrieb auswählen, die abgefüllten Platzhalter prüfen, einzelne Werte bei Bedarf überschreiben – und das Testdokument direkt herunterladen. Ganz ohne den eigentlichen Prozess zu durchlaufen.

## 🧩 Das Cockpit nach eigenem Geschmack

Die Kacheln im Cockpit lassen sich neu **pro Benutzer anordnen und in der Grösse anpassen**. Über den Schloss-Knopf wechseln Sie in den Bearbeitungsmodus, verschieben die Kacheln per Drag & Drop und speichern das Layout. Beim nächsten Aufruf ist alles wieder so, wie Sie es eingerichtet haben.

## 💰 Bonus für Übererfüllung

Für den Kanton Solothurn gibt es einen neuen Prozess **„Ausgleichszahlung Bonus“**: Nach Abschluss der Ausgleichszahlungen erhalten Betriebe, die ihr Soll an Ausbildungswochen übererfüllt haben, anteilsmässig eine Bonuszahlung aus dem Fonds der geleisteten Ausgleichszahlungen. Wer mehr ausbildet als gefordert, profitiert so direkt.

---

## Was Sie sonst noch wissen sollten

Das ist nur ein Ausschnitt. Die **vollständige Liste aller Änderungen** – darunter eine umfassende Rechtschreib- und Grammatikprüfung der Standardtexte sowie diverse Fehlerbehebungen – finden Sie wie gewohnt in den Release Notes direkt in der Applikation.

> **Kurz gesagt:** 3.2.0 heisst einen neuen Kanton willkommen und macht AVG2 für alle ein Stück transparenter – vom Betriebstyp bis zum E-Mail-Versand.
