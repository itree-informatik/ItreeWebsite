+++
author = "itree informatik"
title = "Les bases du Markdown"
date = "2026-03-23"
description = "Un guide simple pour Markdown – le formatage de texte dont vous avez besoin pour les GitHub Issues. Aucune connaissance préalable requise."
image = "images/markdown.png"
tags = [
    "markdown",
    "github",
    "guide",
]
categories = [
    "Guides",
]
+++

Vous souhaitez créer un issue sur GitHub et le texte a l'air ennuyeux ? Avec Markdown, vous pouvez formater vos textes très simplement – sans outils compliqués. Ce guide vous montre tout ce dont vous avez besoin.
<!--more-->

## Qu'est-ce que Markdown ?

Markdown est une manière simple de formater des textes. Au lieu de cliquer sur des boutons comme dans Word, vous écrivez certains caractères directement dans le texte – et GitHub en fait automatiquement une présentation joliment formatée.

**Pourquoi est-ce pratique ?**

- Vous n'avez besoin d'**aucun programme spécial** – cela fonctionne directement dans le navigateur
- Le formatage est **vite appris** – quelques caractères suffisent
- C'est utilisé **partout sur GitHub** – dans les issues, commentaires et descriptions
- Même sans formatage, le texte reste **bien lisible**

---

## Résumé

| Formatage | Syntaxe | Résultat |
|---|---|---|
| Gras | `**texte**` | **texte** |
| Italique | `*texte*` | *texte* |
| Titre | `## Titre` | Titre |
| Liste | `- Point` | Liste à puces |
| Checklist | `- [ ] Tâche` | Case à cocher |
| Lien | `[Texte](URL)` | Lien cliquable |
| Code | `` `code` `` | `code` |
| Citation | `> Texte` | Citation |
| Tableau | `\| A \| B \|` | Tableau |
| Mention | `@nom` | Notification |

> **L'essentiel :** Vous n'avez pas besoin de tout retenir. Commencez simplement avec **gras**, *italique* et les listes – cela suffit pour la plupart des issues. Vous pouvez toujours consulter le reste ici.

---

## Mettre en valeur le texte

Le formatage le plus courant : mettre des mots en **gras** ou en *italique*.

| Ce que vous écrivez | Ce que ça donne |
|---|---|
| `**texte important**` | **texte important** |
| `*texte accentué*` | *texte accentué* |
| `***gras et italique***` | ***gras et italique*** |
| `~~barré~~` | ~~barré~~ |

### Exemple

Voici à quoi pourrait ressembler un paragraphe dans un issue :

```
La fonction **Export** ne fonctionne plus depuis la dernière mise à jour.
L'erreur se produit *uniquement* pour les exports PDF, Excel fonctionne encore.
```

Devient :

La fonction **Export** ne fonctionne plus depuis la dernière mise à jour.
L'erreur se produit *uniquement* pour les exports PDF, Excel fonctionne encore.

---

## Titres

Avec le caractère `#`, vous créez des titres. Plus il y a de `#`, plus le titre est petit.

```
# Grand titre
## Titre moyen
### Petit titre
```

Dans les issues, vous n'avez généralement besoin que de `##` et `###`, car le titre de l'issue est déjà le titre principal.

---

## Listes

### Liste simple (sans ordre)

```
- Premier point
- Deuxième point
- Troisième point
```

Devient :

- Premier point
- Deuxième point
- Troisième point

### Liste numérotée

```
1. Première étape
2. Deuxième étape
3. Troisième étape
```

Devient :

1. Première étape
2. Deuxième étape
3. Troisième étape

### Checklist (particulièrement utile pour les issues)

Les checklists sont particulièrement pratiques dans les GitHub Issues – les cases peuvent même être cochées directement :

```
- [x] Erreur reproduite
- [x] Capture d'écran créée
- [ ] Signalé au développeur
- [ ] Corrigé
```

Devient :

- [x] Erreur reproduite
- [x] Capture d'écran créée
- [ ] Signalé au développeur
- [ ] Corrigé

---

## Liens et images

### Insérer un lien

```
Plus d'infos sur [notre site web](https://itree.ch).
```

Devient :

Plus d'infos sur [notre site web](https://itree.ch).

### Insérer une image

Dans les GitHub Issues, le plus simple est de **glisser-déposer** les images directement dans le champ de texte. GitHub crée alors automatiquement le code Markdown correspondant. Sinon, manuellement :

```
![Description de l'image](https://exemple.ch/image.png)
```

> **Astuce :** Les captures d'écran valent de l'or pour les signalements d'erreurs. Glissez simplement l'image dans le champ de texte de l'issue – c'est fait.

---

## Citations

Lorsque vous souhaitez faire référence à un message ou un texte :

```
> Cela a déjà été discuté lors de la dernière réunion.
```

Devient :

> Cela a déjà été discuté lors de la dernière réunion.

---

## Insérer du code ou des messages d'erreur

Si vous souhaitez partager un message d'erreur ou un terme technique, vous pouvez le formater comme `code` :

### Termes individuels

```
L'erreur se produit dans la fonction `ExporterRapport`.
```

Devient :

L'erreur se produit dans la fonction `ExporterRapport`.

### Messages d'erreur complets

Utilisez trois backticks (`` ``` ``) pour les textes sur plusieurs lignes :

````
```
Erreur 500 : La connexion à la base de données n'a pas pu être établie.
Horodatage : 2026-03-21 14:32:05
Module : ExportService
```
````

Devient :

```
Erreur 500 : La connexion à la base de données n'a pas pu être établie.
Horodatage : 2026-03-21 14:32:05
Module : ExportService
```

> **Astuce :** Toujours formater les messages d'erreur comme code – cela les rend beaucoup plus lisibles.

---

## Tableaux

Les tableaux sont utiles lorsque vous souhaitez partager des informations structurées :

```
| Navigateur | Fonctionne ? |
|------------|--------------|
| Chrome     | Oui          |
| Firefox    | Oui          |
| Safari     | Non          |
| Edge       | Non testé    |
```

Devient :

| Navigateur | Fonctionne ? |
|------------|--------------|
| Chrome     | Oui          |
| Firefox    | Oui          |
| Safari     | Non          |
| Edge       | Non testé    |

---

## Lignes de séparation

Une ligne horizontale pour une séparation visuelle se crée avec trois tirets :

```
---
```

---

## Mentionner des personnes

Sur GitHub, vous pouvez mentionner des personnes directement dans un issue. La personne reçoit alors une notification :

```
@nomdutilisateur Pourriez-vous jeter un œil ?
```
