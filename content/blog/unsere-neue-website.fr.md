+++
author = "itree informatik"
title = "Notre nouveau site web"
date = "2026-03-21"
description = "Comment nous avons construit notre site avec Hugo, Tailwind CSS et Azure Static Web Apps – et pourquoi nous renonçons à un CMS classique."
tags = [
    "hugo",
    "website",
    "tailwind",
    "azure",
]
categories = [
    "Entreprise",
]
+++

Notre site web repose sur un tout nouveau socle technologique. Dans cet article, nous vous montrons quelles technologies nous utilisons, pourquoi nous avons choisi cette stack et comment se déroule le chemin du commit au site en ligne.
<!--more-->

## La stack technologique

### Hugo – le générateur de sites statiques

Le cœur de notre site est **Hugo**, l'un des générateurs de sites statiques les plus rapides du marché. Hugo prend nos contenus – rédigés en Markdown et YAML – et génère un site web entièrement statique. Pas de base de données, pas de PHP, pas de backend CMS.

Comme thème, nous utilisons **hugo-up-business**, que nous avons adapté à nos besoins. Le système de modules de Hugo nous permet d'intégrer le thème comme dépendance et de surcharger individuellement certains layouts sans modifier l'original.

### Tailwind CSS 4.0 – du style moderne

Pour le design, nous utilisons **Tailwind CSS 4.0** – un framework CSS utility-first qui nous permet de concevoir les mises en page directement dans le HTML, sans avoir à maintenir de fichiers CSS séparés. Le résultat : **un code épuré, un design cohérent** et des adaptations rapides.

### Bilinguisme

L'ensemble du site est conçu de manière **bilingue** – allemand et français. Le multilinguisme intégré de Hugo rend cela élégant : chaque page existe dans les deux langues, les menus et textes d'interface sont traduits via des fichiers i18n, et le changement de langue fonctionne de manière fluide.

### Pas de tracking, pas de cookies

Nous renonçons volontairement à **Google Analytics, aux cookies et à tout tracking**. La protection des données nous tient à cœur – et un site marketing n'a pas besoin de suivre ses utilisateurs. La carte sur la page de contact fonctionne via **OpenStreetMap**, également sans tracking supplémentaire.

---

## Pourquoi Hugo et pas WordPress ?

La question revient souvent : pourquoi pas WordPress, pas Joomla, pas de CMS classique ? La réponse est simple :

### Rapidité

Hugo génère l'ensemble de notre site en **moins d'une seconde**. Le résultat : de purs fichiers HTML livrés directement au navigateur sans traitement côté serveur. Pas d'attente pour des requêtes de base de données, pas de plugins lents. La page se charge **pratiquement instantanément**.

### Sécurité

Pas de backend CMS signifie : **pas de surface d'attaque**. Pas de page de connexion piratable. Pas de base de données compromettable par injection SQL. Pas de plugins obsolètes avec des failles de sécurité connues. Un site statique est fondamentalement **inattaquable** – il n'y a tout simplement pas de code côté serveur exploitable.

Quiconque a déjà dû nettoyer un site WordPress piraté sait combien cela vaut.

### Zéro maintenance

WordPress doit être régulièrement mis à jour – core, plugins, thèmes, version PHP. Rater une mise à jour, c'est risquer des failles de sécurité. Avec Hugo, il n'y a **rien à maintenir**. Les fichiers HTML générés fonctionnent, tout simplement. Pas de patches, pas de chaos de plugins, pas de problèmes de compatibilité.

### Versionnement

L'ensemble de notre site – contenus, layouts, configuration – se trouve dans un **dépôt Git**. Chaque modification est traçable, chaque état restaurable. Nous pouvons préparer des changements dans une branche, les faire relire, puis seulement les publier. Essayez donc cela avec une base de données WordPress.

### Coûts

L'hébergement d'un site statique sur Azure Static Web Apps est **quasiment gratuit**. Pas de serveur tournant 24h/24. Pas de serveur de base de données. Pas de licence CMS. Juste quelques mégaoctets de HTML, CSS et images sur un CDN.

---

## Le processus de déploiement

Notre déploiement est **entièrement automatisé** – du commit au site en ligne, tout se fait sans intervention manuelle :

**1. Pousser le code** – Nous committons nos modifications et les poussons sur la branche `master` sur GitHub.

**2. GitHub Action se déclenche** – Un push sur `master` déclenche automatiquement notre pipeline CI/CD. Les pull requests reçoivent également un déploiement de prévisualisation automatique.

**3. Hugo construit le site** – La GitHub Action installe la dernière version de Hugo Extended et construit l'ensemble du site avec `hugo --minify`. Tous les fichiers HTML, CSS et JavaScript sont compressés.

**4. Déploiement sur Azure Static Web Apps** – Les fichiers générés du dossier `public` sont automatiquement déployés sur **Azure Static Web Apps**. Azure distribue les fichiers via un **CDN** (Content Delivery Network) mondial pour des temps de chargement rapides partout dans le monde.

**5. Le site est en ligne** – En quelques minutes après le push, la nouvelle version est en ligne. Pas d'upload FTP, pas de configurations manuelles de serveur.

```
Modifier le code → Git Push → GitHub Action → Hugo Build → Azure Static Web Apps → En ligne
```

Ce que nous recommandons à nos clients dans le domaine de l'[automatisation](/fr/services/#automatisierung), nous le vivons nous-mêmes : **Du commit à la livraison, tout est automatique.**

---

## Conclusion

Notre site web est un bon exemple du fait que **moins est souvent plus**. Pas de CMS gonflé, pas de base de données, pas de tracking – mais un site rapide, sûr et sans maintenance, que nous gérons avec les mêmes outils que ceux avec lesquels nous développons des logiciels.

| | Hugo (statique) | WordPress (CMS) |
|---|---|---|
| **Temps de chargement** | Millisecondes | Secondes |
| **Sécurité** | Pas de surface d'attaque | Mises à jour régulières nécessaires |
| **Maintenance** | Aucune | Plugins, core, PHP |
| **Coûts d'hébergement** | Quasi gratuit | Serveur + DB nécessaires |
| **Versionnement** | Git | Manuel / Plugins |
| **Déploiement** | Automatique | Manuel / Plugins |

## Construit avec l'IA – et c'est tant mieux

Ce site web a été développé avec le soutien de **Claude** (Anthropic). Non pas parce que nous n'en serions pas capables nous-mêmes – mais parce que l'IA est un **outil** que nous utilisons consciemment pour atteindre nos objectifs plus rapidement. Contenus, traductions, layouts, configurations – beaucoup de choses sont nées du dialogue avec une IA que nous avons activement pilotée et vérifiée.

Il existe une idée selon laquelle « vraiment » programmer signifie taper chaque ligne soi-même. Nous voyons les choses différemment : **L'IA n'est pas un substitut à la compétence – c'est un multiplicateur.** Un développeur expérimenté qui utilise l'IA ne travaille pas de manière moins qualifiée, mais plus efficacement. Les décisions, l'architecture, le jugement – tout cela vient toujours de l'humain.

**Cela ne devient fatal que lorsque l'IA est utilisée sans supervision.** Quand plus personne ne comprend ce que fait le code généré, quand les résultats sont repris sans vérification, quand le savoir derrière le travail disparaît. C'est exactement pourquoi nous utilisons l'IA **toujours sous supervision** : comme accélérateur, pas comme pilote automatique.

D'ailleurs : le code source complet de ce site est accessible publiquement sur [GitHub](https://github.com/itree-informatik/ItreeWebsite). Jetez-y un œil – c'est comme ça que nous travaillons.

> **Notre credo :** Nous ne recommandons que ce que nous utilisons nous-mêmes. Ce site en est la preuve.
