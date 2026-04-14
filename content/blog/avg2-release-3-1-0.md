+++
author = "itree informatik"
title = "AVG2 Release 3.1.0 – was sich ändert"
date = "2026-04-13"
description = "Release 3.1.0 bringt zahlreiche Verbesserungen – hier eine kleine Auswahl der plakativsten: aufgeräumte Einstellungen, präzisere Protokolle, flexiblere UID/BUR-Erfassung sowie zwei Komfort-Verbesserungen, die im Alltag Klicks sparen."
image = "images/avg2.png"
tags = [
    "avg2",
    "release",
    "update",
]
categories = [
    "Produkt",
]
+++

AVG2 3.1.0 läuft seit gestern produktiv. Hier die sichtbarsten Neuerungen im Überblick.
<!--more-->

## 📋 Einstellungsseite – weg von Tabellen, hin zu Kontext

Die Einstellungsseite war über die Jahre gewachsen: eine Liste von Konfigurationseinträgen, jeder in einer eigenen Tabellenzeile, jeder mit einem separaten Dialog zum Bearbeiten. Funktional, aber sperrig.

Mit 3.1.0 haben wir die Seite **grundlegend überarbeitet**. Einstellungen werden jetzt direkt an Ort und Stelle bearbeitet – ohne Umweg über Bearbeitungs-Dialoge und ohne Tabellen-Geschiebe. Wer eine Einstellung ändern will, sieht sofort ihren Zweck und ihren aktuellen Wert und kann ihn direkt anpassen.

Kleine Änderung auf dem Papier, grosser Unterschied im täglichen Umgang.

## 🔍 Protokollierung – weniger Rauschen, mehr Signal

Im Hintergrund protokolliert AVG2, was in der Applikation passiert – nicht zur Kontrolle, sondern zur Nachvollziehbarkeit und Fehleranalyse. Bisher landete in diesen Logs auch **automatischer Verkehr von Bots und Crawlern**, der den Blick auf echte Nutzeraktivität verstellt hat.

Das ist jetzt Geschichte: Bot-Anfragen werden herausgefiltert, Einträge sind aussagekräftiger und auf das reduziert, was tatsächlich Nutzer getan haben. Für den Alltag ändert sich nichts – aber wenn wir Fehler analysieren oder auf Support-Anfragen reagieren, kommen wir schneller zur Sache.

## 🏢 UID- und BUR-Felder werden konfigurierbar

Nicht jeder Kanton geht mit Unternehmens- und Betriebsnummern gleich um. Die einen erfassen UID und BUR zentral, die anderen überlassen das den Leistungserbringern, wieder andere verzichten ganz darauf.

Ab 3.1.0 lässt sich **pro Kanton einstellen, ob diese Felder erfasst werden – und wer sie erfassen darf**. Eine kleine, aber vielfach gewünschte Flexibilisierung, die dafür sorgt, dass AVG2 nicht mehr Aufwand verursacht als nötig.

## ✅ Tabellen-Filter mit Mehrfachauswahl

Die Spalten-Filter in Tabellen waren bisher Dropdowns mit einem einzigen Wert pro Spalte. Neu **ersetzen Checkbox-Filter die Dropdowns** – mehrere Werte lassen sich gleichzeitig filtern. Und: Im Filtermenü erscheinen nur noch Werte, die tatsächlich in den Daten vorkommen, keine leeren Optionen mehr.

Klingt klein, ist im Alltag aber einer der Punkte, die man nach einer Woche nicht mehr missen will.

## 👤 Rollenwechsel merkt sich, wo Sie gerade sind

Wer in AVG2 zwischen Rollen wechselt – etwa vom kantonalen Bearbeiter zur Rolle eines bestimmten Leistungserbringers – musste den gewünschten Betrieb bisher jedes Mal neu auswählen. Ab jetzt ist er **automatisch vorausgewählt**, wenn Sie sich beim Rollenwechsel bereits auf einem Betrieb befinden.

Eine dieser Änderungen, die man nach drei Tagen nicht mehr wahrnimmt, weil sie einfach passt.

## 📊 Cockpit zeigt immer den aktuellen Betriebsnamen

Betriebsnamen ändern sich über die Jahre – Fusionen, Umfirmierungen, neue Trägerschaften. AVG2 speichert den Namen jahresbezogen, was fachlich korrekt ist, im Cockpit aber zu Verwirrung führen konnte, wenn ein Betrieb unter altem Namen auftauchte.

Neu zeigt das Cockpit **immer den aktuellen, offiziellen Betriebsnamen**. Weicht der Name in einem bestimmten Jahr davon ab, markiert ein kleines Info-Symbol die Stelle – ein Hover zeigt den damaligen Namen. So haben Sie beide Informationen: den aktuellen Stand für die Übersicht, die historische Korrektheit auf Zuruf.

---

## Was Sie sonst noch wissen sollten

Das ist nur ein Ausschnitt. Die **vollständige Liste aller Änderungen** – inklusive kleinerer Fixes und interner Verbesserungen – finden Sie wie gewohnt in den Release Notes direkt in der Applikation.

> **Kurz gesagt:** 3.1.0 macht AVG2 an vielen kleinen Stellen einfacher – nicht spektakulär, aber spürbar.
