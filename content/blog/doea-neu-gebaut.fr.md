+++
author = "itree informatik"
title = "DoeA – reconstruite après plus de dix ans"
date = "2026-09-23"
description = "Pendant plus de dix ans, l'OFCL a géré ses publications SIMAP avec une application Windows. Nous avons désormais reconstruit DoeA sous forme d'application web – sans empaquetage, facile à mettre à jour et en open source conformément à la LMETA."
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
    "Produit",
]
+++

Avec DoeA, l'Office fédéral des constructions et de la logistique (OFCL) gère ses publications sur SIMAP, la plateforme des marchés publics en Suisse. L'ancienne application a été utilisée pendant plus de dix ans. Nous avons maintenant entièrement reconstruit DoeA – sous forme d'application web.
<!--more-->

## Plus de dix ans d'utilisation

DoeA signifie « Dienst öffentliche Ausschreibungen » (service des appels d'offres publics). L'application accompagne un appel d'offres tout au long de son cycle de vie : saisie avec lots et offres, adjudications, interruptions et révocations, planification des étapes de la procédure ainsi qu'évaluations au format PDF et Excel.

Nous avons développé la première version en 2014, elle a été testée début 2015. Il s'agissait d'une application Windows classique, construite avec Windows Forms sur le .NET Framework et installée sur chaque poste de travail. Elle est utilisée depuis – la dernière modification du code date de 2020.

---

## Un logiciel n'est jamais terminé

Plus de dix ans, c'est long pour une application métier. Mais durant cette période, les attentes envers les logiciels ont aussi changé. Aujourd'hui, une application n'est jamais terminée. Frameworks, bibliothèques et systèmes d'exploitation reçoivent en permanence des mises à jour de sécurité, les nouvelles vulnérabilités sont documentées publiquement. Pour rester sûre, une application doit être **mise à jour régulièrement** – pas tous les quelques ans, mais en continu.

---

## L'empaquetage : un effort considérable pour quatre utilisateurs

C'est précisément là qu'une application de bureau atteint ses limites dans l'administration fédérale. Avant qu'une nouvelle version puisse être distribuée sur les postes de travail, elle doit être empaquetée par l'Office fédéral de l'informatique et de la télécommunication (OFIT). Chaque mise à jour signifie : un nouveau paquet.

**Quatre personnes en tout** travaillent avec DoeA. Lancer un empaquetage pour elles à chaque fois représente un effort considérable. Et quand chaque mise à jour entraîne cet effort, les mises à jour restent forcément rares – l'inverse de ce qu'exige la sécurité aujourd'hui.

---

## DoeA est désormais une application web

La nouvelle DoeA fonctionne dans le navigateur. Plus rien n'est installé sur les postes de travail – il n'y a donc plus besoin d'**empaquetage auprès de l'OFIT**. Nous installons une mise à jour de manière centralisée sur le serveur ; dès l'accès suivant, tout le monde travaille avec la nouvelle version.

Sur le plan technique, l'application repose sur une nouvelle base :

- **.NET 10 et Blazor Server** au lieu de Windows Forms sur le .NET Framework
- **PostgreSQL** comme base de données open source au lieu de SQL Server – les données existantes sont reprises par une migration unique
- **Authentification via l'eIAM de la Confédération** – l'accès est activé dans DoeA même
- **Interface trilingue** en allemand, français et italien
- **Exploitation en conteneur**, construit et livré via notre pipeline CI/CD

Pour savoir quand une mise à jour est nécessaire, la pipeline génère à chaque release une nomenclature de tous les composants utilisés (SBOM) et la charge dans Dependency-Track. Si une vulnérabilité est connue pour l'un de ces composants, elle y devient visible.

---

## Open source selon la LMETA

Depuis le 1er janvier 2024, la loi fédérale sur l'utilisation des moyens électroniques pour l'exécution des tâches des autorités (LMETA) est en vigueur. Son article 9 oblige les autorités fédérales à publier le code source des logiciels qu'elles développent ou font développer – pour autant que les droits de tiers ou des raisons de sécurité ne s'y opposent pas.

La nouvelle DoeA répond à ces exigences. Elle est publiée sous la licence open source **AGPL-3.0-or-later** ; le titulaire des droits d'auteur est la Confédération suisse, représentée par l'OFCL. La publication comprend :

- des instructions pour l'installation et l'exploitation
- une liste de tous les composants tiers avec leurs licences
- des directives pour les contributions externes
- des métadonnées structurées (`publiccode.yml`) pour le catalogue OSS de la Confédération

L'interlocuteur pour les questions métier est le Centre de compétence des marchés publics de la Confédération (CCMP) de l'OFCL. Nous restons responsables du développement et de la maintenance et sommes l'interlocuteur technique pour les signalements de sécurité, les erreurs et les questions sur le code.

---

## Bientôt public

La publication est imminente. Dès que le code source sera accessible au public, nous ajouterons ici le lien vers le dépôt.

> **En bref :** Après plus de dix ans, DoeA fonctionne dans le navigateur plutôt que sur le poste de travail – sans empaquetage, facile à mettre à jour et bientôt accessible au public en open source.
