+++
author = "itree informatik"
title = "BlazorMarkdownEditor – notre premier projet open source sous licence MIT"
date = "2026-09-24"
description = "Avec BlazorMarkdownEditor, nous publions notre premier projet sous licence MIT : un composant Markdown léger pour Blazor, sans dépendances tierces – avec un aperçu qui affiche le HTML intégré comme du texte au lieu de l'exécuter."
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
    "Produit",
]
+++

Pour les textes mis en forme dans nos applications Blazor, nous avons écrit notre propre éditeur Markdown. Nous le mettons désormais à la disposition de tous – sous forme de code source sur GitHub et de paquet sur nuget.org.
<!--more-->

## Ce que fait BlazorMarkdownEditor

L'éditeur fonctionne de manière similaire au champ de saisie des GitHub Issues : dans l'onglet **Write**, on saisit le texte en Markdown, dans l'onglet **Preview**, on voit le résultat mis en forme. Une barre d'outils insère la mise en forme en un clic. Il n'est donc pas nécessaire de connaître la syntaxe Markdown par cœur.

- **Barre d'outils** pour les titres, le gras, l'italique, les citations, le code, les listes à puces, les listes numérotées, les liens et les tableaux
- **Mode lecture** – avec `Readonly`, le composant affiche uniquement le texte mis en forme, sans onglets ni barre d'outils
- **Coloration syntaxique** pour les blocs de code avec indication du langage
- **Liaison aux formulaires** via `@bind-Value`, y compris la validation dans un `EditForm`
- **Traduisible** – tous les textes sont en anglais par défaut et peuvent être remplacés via un paramètre

C'est toujours le texte Markdown qui est enregistré. Pour l'afficher mis en forme à un autre endroit, `MarkdownConverter.ToHtml()` le convertit en HTML.

Le paquet est disponible sur nuget.org. Le script et la feuille de style sont livrés automatiquement, rien d'autre n'est à intégrer dans le projet :

```bash
dotnet add package BlazorMarkdownEditor
```

```html
<MarkdownEditor @bind-Value="_text" Placeholder="Saisir un commentaire" />
```

Vous n'êtes pas encore familier avec Markdown ? Dans notre article [Les bases du Markdown](/fr/blog/markdown-syntax/), nous expliquons les principaux caractères.

---

## Pourquoi Markdown est plus sûr que HTML

Pour les textes mis en forme, les applications web proposent souvent un éditeur HTML : on met en forme comme dans Word, et du HTML est généré en arrière-plan. Pour afficher le texte plus tard, ce HTML est inséré tel quel dans la page – dans Blazor avec `MarkupString`, qui contourne volontairement l'encodage automatique. Le navigateur interprète alors tout ce qui figure dans le texte.

C'est précisément là que réside le risque. Le HTML ne sert pas qu'à la mise en forme : un élément `<script>`, une image avec un attribut `onerror` ou un lien vers `javascript:` exécutent du code. Si un tel élément se retrouve dans un texte enregistré, le code s'exécute dans le navigateur de chaque personne qui ouvre le texte – et peut y agir en son nom. Ce type d'attaque s'appelle **Cross-Site Scripting (XSS)**.

L'éditeur lui-même n'en protège pas. Il ne génère certes que du HTML inoffensif, mais c'est ce qui arrive au serveur qui est enregistré – et cela peut aussi être envoyé directement, en contournant l'éditeur. Quiconque affiche du HTML provenant d'un éditeur doit donc le filtrer avant l'affichage. C'est possible, mais exigeant : le HTML est vaste, les navigateurs sont tolérants aux erreurs, et un filtre doit connaître chaque contournement.

Markdown inverse le principe. Le texte enregistré ne contient pas de HTML, mais de simples caractères comme `#` ou `**`. Le HTML n'est généré qu'à l'affichage – et uniquement à partir des éléments que le convertisseur connaît lui-même. Notre convertisseur procède ainsi :

- **D'abord encoder, puis mettre en forme :** avant que le Markdown ne soit interprété, l'ensemble du texte est encodé en HTML. Un `<script>` dans le texte apparaît dans l'aperçu comme du texte visible – affiché, pas exécuté.
- **Éléments fixes :** le résultat ne contient que des éléments que le convertisseur génère lui-même : titres, paragraphes, gras et italique, listes, citations, code, tableaux, liens et lignes de séparation.
- **Uniquement des liens sûrs :** sont autorisés `http`, `https`, `mailto`, les chemins relatifs et les ancres. Un lien vers `javascript:` ou `data:` reste du texte brut. Si les deux-points sont encodés plusieurs fois dans l'URL (`%3A`, `%253A` …), ils sont entièrement décodés avant la vérification.

Ces cas sont couverts par des tests automatisés.

Un effet secondaire : le Markdown reste lisible même sans rendu – par exemple directement dans la base de données ou lors de la comparaison de deux versions.

---

## Utilisé dans nos applications métier

Dans nos applications métier, les personnes autorisées gèrent elles-mêmes les mentions légales ainsi que les informations juridiques comme la clause de non-responsabilité et la déclaration de protection des données. Jusqu'ici, cela se faisait avec un éditeur HTML ; c'est du HTML qui était enregistré et affiché.

Nous avons converti ces pages au BlazorMarkdownEditor et transféré une fois pour toutes les textes existants en Markdown. En mode lecture, le composant affiche le texte mis en forme. Les personnes autorisées passent en mode édition – avec barre d'outils et aperçu.

Le composant est intégré à notre framework commun. Il est ainsi à la disposition de toutes les applications qui reposent sur celui-ci.

---

## Pourquoi l'avoir écrit nous-mêmes ?

Il existe plusieurs éditeurs et bibliothèques Markdown pour .NET. Nous avons pourtant opté pour notre propre composant.

### Aucune dépendance

La seule dépendance du paquet est Blazor lui-même. Pas de bibliothèque d'interface comme Telerik, MudBlazor ou Bootstrap, pas de bibliothèque Markdown externe. Le composant peut ainsi être utilisé dans n'importe quelle application Blazor, quelle que soit la bibliothèque d'interface qui y est employée.

C'est important pour nous, car chaque dépendance est un composant que nous devons surveiller et mettre à jour en cas de vulnérabilité. De plus, le standard Markdown CommonMark autorise le HTML intégré. Quiconque utilise une bibliothèque Markdown complète doit le désactiver délibérément – sinon le problème du HTML revient par la petite porte. Notre convertisseur ne prend en charge d'emblée que le sous-ensemble dont nous avons besoin.

Seule exception : pour la coloration syntaxique, une copie de highlight.js est incluse dans le paquet (licence BSD-3-Clause). Elle n'est chargée que lorsqu'un bloc de code est effectivement affiché.

### Léger

Le convertisseur compte environ 360 lignes de C#, l'ensemble du composant, feuille de style et JavaScript compris, environ 1000 lignes. Le JavaScript n'est nécessaire que pour la barre d'outils – afin d'insérer la mise en forme à la position du curseur – et pour la coloration syntaxique.

En contrepartie, l'éditeur ne prend volontairement pas en charge tout ce que Markdown permet : les images ou les listes imbriquées, par exemple, ne sont pas disponibles.

### En binôme avec Claude

Nous avons écrit l'éditeur en binôme avec Claude, le modèle d'IA d'Anthropic. Nous avons défini les exigences et vérifié chaque modification, Claude a participé à l'écriture du code et des tests. Les commits concernés sont signalés dans le dépôt.

Cela modifie l'arbitrage classique entre « développer soi-même » et « reprendre une solution existante ». Écrire soi-même un petit composant clairement délimité demande nettement moins d'effort qu'auparavant lorsqu'on travaille en binôme avec l'IA. L'effort lié à une dépendance – surveiller, mettre à jour, vérifier les licences – reste en revanche le même.

---

## Open source sous licence MIT

La licence MIT permet d'utiliser, de modifier et de redistribuer librement le code – y compris dans des projets commerciaux, à condition de conserver la mention de licence.

Notre pipeline GitHub Actions publie les nouvelles versions sur nuget.org, chaque fois seulement après une validation manuelle. Aucune clé API de longue durée n'est enregistrée à cet effet : la pipeline s'authentifie auprès de nuget.org via Trusted Publishing (OIDC).

- Code source : [github.com/itree-informatik/BlazorMarkdownEditor](https://github.com/itree-informatik/BlazorMarkdownEditor)
- Paquet : [nuget.org/packages/BlazorMarkdownEditor](https://www.nuget.org/packages/BlazorMarkdownEditor)

Les signalements d'erreurs et les suggestions sont les bienvenus sous forme de GitHub Issue.

> **En bref :** un éditeur Markdown pour Blazor qui ne nécessite que Blazor, affiche le HTML intégré comme du texte et peut être utilisé librement sous licence MIT.
