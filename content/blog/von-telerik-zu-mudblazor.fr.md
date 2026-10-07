+++
author = "itree informatik"
title = "De Telerik à MudBlazor"
date = "2026-10-07"
description = "En cherchant une solution open source pour DoeA, nous avons découvert MudBlazor. Après DoeA et notre intranet, nous passons désormais entièrement de Telerik UI for Blazor à MudBlazor."
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
    "Entreprise",
]
+++

Jusqu'à présent, nous avons construit les interfaces de nos applications Blazor avec Telerik UI for Blazor. Nous passons désormais entièrement à MudBlazor – une bibliothèque de composants open source que nous avons découverte dans le cadre de DoeA.
<!--more-->

## Le point de départ : DoeA et la LMETA

Pour l'Office fédéral des constructions et de la logistique (OFCL), nous avons [reconstruit](/fr/blog/doea-neu-gebaut/) DoeA sous forme d'application web. Nous avions prévu de réaliser l'interface – comme pour nos autres applications Blazor – avec Telerik UI for Blazor.

En cours de projet, on nous a ensuite informés que DoeA devait être conforme à la LMETA : son code source sera publié en open source. La publication est encore à venir.

Mais un code source publié n'a d'intérêt que si d'autres peuvent aussi le compiler, l'exploiter et le faire évoluer. Notre objectif était donc d'utiliser aussi peu de produits sous licence que possible. Nous n'y sommes pas parvenus entièrement, mais en grande partie.

Cela concernait aussi l'interface. Telerik UI for Blazor est une bibliothèque commerciale qui se licencie par développeur. Chaque build nécessite une clé de licence valide – y compris dans les pipelines CI/CD. Sans elle, le build émet des avertissements et un filigrane apparaît dans l'interface. Quiconque voudrait compiler DoeA lui-même après sa publication devrait donc d'abord acheter une licence Telerik.

Nous avons donc recherché de manière ciblée une bibliothèque de composants sous licence open source – et nous avons découvert **MudBlazor**.

---

## MudBlazor en bref

MudBlazor est une bibliothèque de composants pour Blazor qui s'inspire du Material Design de Google. Le projet est publié sous **licence MIT** et peut donc être utilisé, modifié et redistribué librement – y compris dans des projets commerciaux.

MudBlazor s'appuie sur une large communauté. État en octobre 2026 :

- sur GitHub **depuis 2020**, actuellement en version 9
- environ **10 600 étoiles** et **plus de 500 contributeurs** sur GitHub
- près de **39 millions de téléchargements** sur nuget.org
- prise en charge de **.NET 8, 9 et 10**

La bibliothèque couvre ce dont une application métier a besoin : champs de saisie avec validation, listes déroulantes avec recherche, sélection de date et d'heure, boîtes de dialogue, notifications, onglets, navigation, graphiques et une grille de données avec tri, filtres et regroupement. Un thème permet de définir de manière centralisée les couleurs, les polices et les espacements ; un mode sombre est intégré. Les textes des composants peuvent être traduits – une condition indispensable pour une application trilingue comme DoeA.

Deux caractéristiques nous ont particulièrement convaincus :

- **C# plutôt que JavaScript :** les composants sont écrits en C#, JavaScript n'est utilisé que là où il n'y a pas d'autre solution.
- **Peu de dépendances :** le paquet ne requiert que des paquets de Microsoft. C'est important pour nous, car nous devons surveiller chaque dépendance et la mettre à jour en cas de vulnérabilité.

---

## DoeA avec MudBlazor

Pour DoeA, nous avons alors utilisé MudBlazor ; l'interface de l'application repose sur cette bibliothèque.

Comme MudBlazor est sous licence MIT, la bibliothèque est compatible avec la licence sous laquelle DoeA sera publiée (AGPL-3.0-or-later). Elle figurera dans la liste des composants tiers comme toute autre dépendance – avec son nom, sa version et sa licence. Pour l'interface, il ne faut ainsi ni licence ni clé de licence.

---

## Notre intranet : migré de Telerik vers MudBlazor

Notre propre intranet a suivi. Nous l'avions déjà réduit au strict nécessaire lors du [passage à GitHub](/fr/blog/von-azure-devops-zu-github/). Il était encore construit avec Telerik UI for Blazor – nous l'avons maintenant migré vers MudBlazor.

Nous avons ainsi utilisé MudBlazor non seulement dans un nouveau projet, mais aussi converti une application existante depuis Telerik.

---

## L'étape suivante : le passage complet

Nos expériences avec DoeA et l'intranet ont été si bonnes que nous passons désormais entièrement de Telerik UI for Blazor à MudBlazor.

### Une bibliothèque au lieu de deux

Exploiter deux bibliothèques d'interface en parallèle signifie : deux manières de construire des interfaces, deux séries de mises à jour et deux composants à surveiller pour les vulnérabilités. Avec une seule bibliothèque, nos applications ont un aspect homogène, et ce que nous apprenons dans un projet vaut aussi pour le suivant.

### Prêt pour l'open source

Pour DoeA, l'exigence de la LMETA n'est apparue qu'en cours de projet. Une application qui repose dès le départ sur MudBlazor est préparée à une telle exigence : la bibliothèque d'interface ne fait pas obstacle à une publication – qu'elle soit déjà prévue aujourd'hui ou non.

### Pas de clés de licence dans la pipeline

Nous compilons et publions nos applications via GitHub Actions. Avec MudBlazor, aucune clé de licence ne doit y être déposée et entretenue. Quiconque récupère un projet peut le compiler immédiatement.

### Développé ouvertement

Le code source de MudBlazor est accessible sur GitHub, les erreurs et les modifications prévues sont consultables publiquement. Lorsque nous rencontrons un problème, nous pouvons regarder dans le code comment un composant se comporte – et contribuer nous-mêmes des corrections.

Avec plus de 120 composants et un support commercial, Telerik propose une offre étendue. Pour les applications que nous développons, MudBlazor couvre toutefois tout ce dont nous avons besoin.

---

## ItreeMud : nos composants basés sur MudBlazor

Comme auparavant avec Telerik, nous n'utilisons pas MudBlazor séparément dans chaque application. Avec **ItreeMud**, nous construisons à nouveau notre propre couche de composants par-dessus. Elle met en œuvre les composants tels que nous les voulons dans nos applications – dans leur présentation comme dans leur comportement.

Ce dont plusieurs applications ont besoin, nous le développons une seule fois dans ItreeMud et non dans chaque projet. Notre génération automatique de formulaires en est un exemple : les masques de saisie sont créés automatiquement, au lieu d'être construits à la main, champ par champ, dans chaque application. Nous évitons ainsi les doublons – et faisons économiser de l'argent à nos clients.

---

## Qu'est-ce que cela signifie pour nos clients ?

Pour nos clients, ce changement signifie avant tout : moins de dépendance envers un seul fabricant. Après la migration, le code source de votre application peut être compilé et développé sans licence Telerik, et la bibliothèque d'interface ne fait plus obstacle à une publication en open source. Les fonctions communes comme la génération automatique de formulaires sont développées une seule fois dans ItreeMud – et non pour chaque application.

- MudBlazor : [mudblazor.com](https://mudblazor.com)
- Code source : [github.com/MudBlazor/MudBlazor](https://github.com/MudBlazor/MudBlazor)
- Paquet : [nuget.org/packages/MudBlazor](https://www.nuget.org/packages/MudBlazor)

> **En bref :** Nous cherchions une solution open source pour DoeA – nous avons trouvé la nouvelle base de toutes nos applications Blazor.
