+++
author = "itree informatik"
title = "Markdown Grundlagen"
date = "2026-03-23"
description = "Ein einfacher Leitfaden für Markdown – die Textformatierung, die Sie für GitHub Issues brauchen. Keine Vorkenntnisse nötig."
image = "images/markdown.png"
tags = [
    "markdown",
    "github",
    "anleitung",
]
categories = [
    "Anleitungen",
]
+++

Sie möchten ein Issue auf GitHub erfassen und der Text sieht langweilig aus? Mit Markdown können Sie Ihre Texte ganz einfach formatieren – ohne komplizierte Werkzeuge. Dieser Leitfaden zeigt Ihnen alles, was Sie dafür brauchen.
<!--more-->

## Was ist Markdown?

Markdown ist eine einfache Art, Texte zu formatieren. Statt wie in Word auf Buttons zu klicken, schreiben Sie bestimmte Zeichen direkt in den Text – und GitHub macht daraus automatisch eine schön formatierte Darstellung.

**Warum ist das praktisch?**

- Sie brauchen **kein spezielles Programm** – es funktioniert direkt im Browser
- Die Formatierung ist **schnell gelernt** – wenige Zeichen reichen aus
- Es wird **überall auf GitHub** verwendet – in Issues, Kommentaren und Beschreibungen
- Auch ohne Formatierung bleibt der Text **gut lesbar**

---

## Zusammenfassung

| Formatierung | Schreibweise | Ergebnis |
|---|---|---|
| Fett | `**text**` | **text** |
| Kursiv | `*text*` | *text* |
| Überschrift | `## Titel` | Überschrift |
| Liste | `- Punkt` | Aufzählung |
| Checkliste | `- [ ] Aufgabe` | Checkbox |
| Link | `[Text](URL)` | Klickbarer Link |
| Code | `` `code` `` | `code` |
| Zitat | `> Text` | Zitat |
| Tabelle | `\| A \| B \|` | Tabelle |
| Erwähnung | `@name` | Benachrichtigung |

> **Das Wichtigste:** Sie müssen sich nicht alles merken. Fangen Sie einfach mit **fett**, *kursiv* und Aufzählungen an – das reicht für die meisten Issues völlig aus. Den Rest können Sie jederzeit hier nachschlagen.

---

## Text hervorheben

Die häufigste Formatierung: Wörter **fett** oder *kursiv* machen.

| Was Sie schreiben | Was daraus wird |
|---|---|
| `**wichtiger Text**` | **wichtiger Text** |
| `*betonter Text*` | *betonter Text* |
| `***fett und kursiv***` | ***fett und kursiv*** |
| `~~durchgestrichen~~` | ~~durchgestrichen~~ |

### Beispiel

So könnte ein Absatz in einem Issue aussehen:

```
Die Funktion **Export** funktioniert nicht mehr seit dem letzten Update.
Der Fehler tritt *nur* bei PDF-Exporten auf, Excel funktioniert noch.
```

Wird zu:

Die Funktion **Export** funktioniert nicht mehr seit dem letzten Update.
Der Fehler tritt *nur* bei PDF-Exporten auf, Excel funktioniert noch.

---

## Überschriften

Mit dem Zeichen `#` erstellen Sie Überschriften. Je mehr `#`, desto kleiner die Überschrift.

```
# Grosse Überschrift
## Mittlere Überschrift
### Kleine Überschrift
```

In Issues brauchen Sie meistens nur `##` und `###`, da der Titel des Issues bereits die Hauptüberschrift ist.

---

## Aufzählungen

### Einfache Liste (ohne Reihenfolge)

```
- Erster Punkt
- Zweiter Punkt
- Dritter Punkt
```

Wird zu:

- Erster Punkt
- Zweiter Punkt
- Dritter Punkt

### Nummerierte Liste

```
1. Schritt eins
2. Schritt zwei
3. Schritt drei
```

Wird zu:

1. Schritt eins
2. Schritt zwei
3. Schritt drei

### Checkliste (besonders nützlich für Issues)

Checklisten sind in GitHub Issues besonders praktisch – die Häkchen können sogar direkt angeklickt werden:

```
- [x] Fehler reproduziert
- [x] Screenshot erstellt
- [ ] An Entwickler gemeldet
- [ ] Behoben
```

Wird zu:

- [x] Fehler reproduziert
- [x] Screenshot erstellt
- [ ] An Entwickler gemeldet
- [ ] Behoben

---

## Links und Bilder

### Einen Link einfügen

```
Mehr Infos finden Sie auf [unserer Website](https://itree.ch).
```

Wird zu:

Mehr Infos finden Sie auf [unserer Website](https://itree.ch).

### Ein Bild einfügen

In GitHub Issues können Sie Bilder am einfachsten **per Drag & Drop** direkt in das Textfeld ziehen. GitHub erstellt dann automatisch den passenden Markdown-Code. Alternativ geht es auch manuell:

```
![Beschreibung des Bildes](https://beispiel.ch/bild.png)
```

> **Tipp:** Screenshots sind bei Fehlermeldungen Gold wert. Ziehen Sie das Bild einfach in das Issue-Textfeld – fertig.

---

## Zitate

Wenn Sie auf eine Nachricht oder einen Text Bezug nehmen möchten:

```
> Das wurde bereits im letzten Meeting besprochen.
```

Wird zu:

> Das wurde bereits im letzten Meeting besprochen.

---

## Code oder Fehlermeldungen einfügen

Wenn Sie eine Fehlermeldung oder einen technischen Begriff teilen möchten, können Sie ihn als `Code` formatieren:

### Einzelne Begriffe

```
Der Fehler tritt in der Funktion `BerichtExportieren` auf.
```

Wird zu:

Der Fehler tritt in der Funktion `BerichtExportieren` auf.

### Ganze Fehlermeldungen

Verwenden Sie drei Backticks (`` ``` ``) für mehrzeilige Texte:

````
```
Fehler 500: Verbindung zur Datenbank konnte nicht hergestellt werden.
Zeitpunkt: 2026-03-21 14:32:05
Modul: ExportService
```
````

Wird zu:

```
Fehler 500: Verbindung zur Datenbank konnte nicht hergestellt werden.
Zeitpunkt: 2026-03-21 14:32:05
Modul: ExportService
```

> **Tipp:** Fehlermeldungen immer als Code formatieren – das macht sie deutlich lesbarer.

---

## Tabellen

Tabellen sind hilfreich, wenn Sie strukturierte Informationen teilen möchten:

```
| Browser | Funktioniert? |
|---------|---------------|
| Chrome  | Ja            |
| Firefox | Ja            |
| Safari  | Nein          |
| Edge    | Nicht getestet|
```

Wird zu:

| Browser | Funktioniert? |
|---------|---------------|
| Chrome  | Ja            |
| Firefox | Ja            |
| Safari  | Nein          |
| Edge    | Nicht getestet|

---

## Trennlinien

Eine horizontale Linie zur visuellen Trennung erstellen Sie mit drei Bindestrichen:

```
---
```

---

## Personen erwähnen

In GitHub können Sie Personen direkt in einem Issue erwähnen. Die Person erhält dann eine Benachrichtigung:

```
@benutzername Könnten Sie sich das anschauen?
```
