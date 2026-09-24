+++
author = "itree informatik"
title = "DoeA – nach über zehn Jahren neu gebaut"
date = "2026-09-23"
description = "Über zehn Jahre lang hat das BBL seine SIMAP-Publikationen mit einer Windows-Anwendung verwaltet. Jetzt haben wir DoeA als Webapplikation neu gebaut – ohne Paketierung, einfach aktualisierbar und als Open Source nach EMBAG."
image = "images/customer/bund.png"
tags = [
    "doea",
    "bbl",
    "bund",
    "embag",
    "open-source",
    "webapplikation",
]
categories = [
    "Produkt",
]
+++

Mit DoeA verwaltet das Bundesamt für Bauten und Logistik (BBL) seine Publikationen auf SIMAP, der Plattform für das öffentliche Beschaffungswesen in der Schweiz. Die bisherige Anwendung war über zehn Jahre im Einsatz. Jetzt haben wir DoeA von Grund auf neu gebaut – als Webapplikation.
<!--more-->

## Über zehn Jahre im Einsatz

DoeA steht für „Dienst öffentliche Ausschreibungen“. Die Anwendung begleitet eine Ausschreibung durch ihren ganzen Lebenszyklus: Erfassung mit Losen und Offerten, Zuschläge, Abbrüche und Widerrufe, Terminplanung der Verfahrensschritte sowie Auswertungen als PDF und Excel.

Die erste Version haben wir 2014 entwickelt, Anfang 2015 wurde sie getestet. Es war eine klassische Windows-Anwendung, gebaut mit Windows Forms auf dem .NET Framework und auf jedem Arbeitsplatz installiert. Seither ist sie im Einsatz – die letzte Änderung am Code stammt aus dem Jahr 2020.

---

## Software ist nie fertig

Über zehn Jahre sind für eine Fachanwendung eine lange Zeit. In dieser Zeit hat sich aber auch verändert, was man von Software erwartet. Heute gilt: Eine Anwendung ist nie fertig. Frameworks, Bibliotheken und Betriebssysteme erhalten laufend Sicherheitsupdates, neu entdeckte Schwachstellen werden öffentlich dokumentiert. Wer sicher bleiben will, muss seine Anwendung **regelmässig aktualisieren** – nicht alle paar Jahre, sondern laufend.

---

## Paketierung: ein Kraftakt für vier Benutzer

Genau hier stösst eine Desktop-Anwendung in der Bundesverwaltung an ihre Grenzen. Bevor eine neue Version auf die Arbeitsplätze verteilt werden kann, muss sie beim Bundesamt für Informatik und Telekommunikation (BIT) paketiert werden. Jedes Update heisst: ein neues Paket.

Mit DoeA arbeiten **ganze vier Personen**. Für sie jedes Mal eine Paketierung anzustossen, ist ein grosser Kraftakt. Und wenn jedes Update diesen Aufwand auslöst, bleibt es naturgemäss bei wenigen Updates – das Gegenteil dessen, was Sicherheit heute verlangt.

---

## DoeA ist jetzt eine Webapplikation

Die neue DoeA läuft im Browser. Auf den Arbeitsplätzen wird nichts mehr installiert – damit braucht es auch **keine Paketierung beim BIT** mehr. Ein Update spielen wir zentral auf dem Server ein, beim nächsten Aufruf arbeiten alle mit der neuen Version.

Technisch steht die Anwendung auf einer neuen Basis:

- **.NET 10 und Blazor Server** statt Windows Forms auf dem .NET Framework
- **PostgreSQL** als Open-Source-Datenbank statt SQL Server – die bestehenden Daten werden mit einer einmaligen Migration übernommen
- **Anmeldung über das eIAM des Bundes** – wer Zugriff erhält, wird in DoeA selbst freigeschaltet
- **Dreisprachige Oberfläche** in Deutsch, Französisch und Italienisch
- **Betrieb als Container**, gebaut und ausgeliefert über unsere CI/CD-Pipeline

Damit wir wissen, wann ein Update nötig ist, erzeugt die Pipeline bei jedem Release eine Stückliste aller verwendeten Komponenten (SBOM) und lädt sie in Dependency-Track hoch. Wird für eine dieser Komponenten eine Schwachstelle bekannt, ist das dort sichtbar.

---

## Open Source nach EMBAG

Seit dem 1. Januar 2024 gilt das Bundesgesetz über den Einsatz elektronischer Mittel zur Erfüllung von Behördenaufgaben (EMBAG). Artikel 9 verpflichtet die Bundesbehörden, den Quellcode von Software offenzulegen, die sie entwickeln oder entwickeln lassen – sofern keine Rechte Dritter oder Sicherheitsgründe dagegen sprechen.

Die neue DoeA entspricht diesen Vorgaben. Sie wird unter der Open-Source-Lizenz **AGPL-3.0-or-later** veröffentlicht, Urheberin ist die Schweizerische Eidgenossenschaft, vertreten durch das BBL. Zur Veröffentlichung gehören:

- eine Anleitung für Installation und Betrieb
- ein Verzeichnis aller Drittkomponenten mit ihren Lizenzen
- Richtlinien für Beiträge von aussen
- strukturierte Metadaten (`publiccode.yml`) für den OSS-Katalog des Bundes

Fachliche Anlaufstelle ist das Kompetenzzentrum Beschaffungswesen Bund (KBB) des BBL. Wir bleiben für Entwicklung und Wartung zuständig und sind die technische Ansprechstelle für Sicherheitsmeldungen, Fehler und Fragen zum Code.

---

## Bald öffentlich

Die Publikation steht kurz bevor. Sobald der Quellcode öffentlich zugänglich ist, verlinken wir das Repository an dieser Stelle.

> **Kurz gesagt:** Nach über zehn Jahren läuft DoeA im Browser statt auf dem Desktop – ohne Paketierung, einfach aktualisierbar und bald als Open Source öffentlich zugänglich.
