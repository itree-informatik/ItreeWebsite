+++
author = "itree informatik"
title = "AVG2 Release 3.1.0 – ce qui change"
date = "2026-04-13"
description = "La release 3.1.0 apporte de nombreuses améliorations – en voici une petite sélection parmi les plus marquantes : paramètres réorganisés, journalisation plus précise, saisie IDE/REE plus flexible et deux améliorations de confort qui font gagner des clics au quotidien."
image = "images/avg2.png"
tags = [
    "avg2",
    "release",
    "mise-a-jour",
]
categories = [
    "Produit",
]
+++

AVG2 3.1.0 tourne en production depuis hier. Voici les nouveautés les plus visibles en un coup d'œil.
<!--more-->

## 📋 Page des paramètres – moins de tableaux, plus de contexte

La page des paramètres s'était étoffée au fil des années : une liste d'entrées de configuration, chacune sur sa ligne de tableau, chacune avec son propre dialogue d'édition. Fonctionnel, mais lourd.

Avec 3.1.0, nous avons **entièrement repensé la page**. Les paramètres se modifient désormais directement sur place – sans détour par une boîte de dialogue, sans jonglage avec des tableaux. Qui veut modifier un paramètre voit immédiatement sa raison d'être et sa valeur actuelle et peut l'adapter directement.

Un petit changement sur le papier, une grande différence dans l'usage quotidien.

## 🔍 Journalisation – moins de bruit, plus de signal

En arrière-plan, AVG2 enregistre ce qui se passe dans l'application – non pour surveiller, mais pour permettre la traçabilité et l'analyse des erreurs. Jusqu'ici, ces journaux contenaient aussi du **trafic automatique issu de bots et de crawlers**, qui brouillait la vue sur l'activité réelle des utilisateurs.

C'est désormais de l'histoire ancienne : les requêtes de bots sont filtrées, les entrées sont plus explicites et réduites à ce que les utilisateurs ont réellement fait. Au quotidien, rien ne change pour vous – mais lorsque nous analysons des erreurs ou traitons des demandes de support, nous arrivons plus vite au cœur du problème.

## 🏢 Les champs IDE et REE deviennent configurables

Tous les cantons ne traitent pas les numéros d'entreprise et d'établissement de la même façon. Certains saisissent l'IDE et le REE de manière centralisée, d'autres laissent cette tâche aux prestataires, d'autres encore y renoncent complètement.

À partir de 3.1.0, il est possible **de définir par canton si ces champs sont saisis – et par qui**. Une petite flexibilisation, souvent demandée, qui fait qu'AVG2 ne génère plus de travail inutile.

## ✅ Filtres de tableau avec sélection multiple

Les filtres de colonnes dans les tableaux étaient jusqu'ici des listes déroulantes avec une seule valeur par colonne. Désormais, des **filtres à cases à cocher remplacent les listes déroulantes** – plusieurs valeurs peuvent être filtrées simultanément. Et : dans le menu de filtrage, seules les valeurs réellement présentes dans les données apparaissent, plus d'options vides.

Cela paraît anodin, mais c'est l'une de ces améliorations dont on ne veut plus se passer après une semaine.

## 👤 Le changement de rôle retient où vous êtes

Qui changeait de rôle dans AVG2 – par exemple du rôle cantonal à celui d'un prestataire précis – devait jusqu'ici re-sélectionner l'établissement souhaité à chaque fois. Désormais, il est **présélectionné automatiquement** si vous vous trouviez déjà sur un établissement au moment du changement.

Une de ces améliorations qu'on ne remarque plus au bout de trois jours, parce qu'elle tombe simplement juste.

## 📊 Le cockpit affiche toujours le nom actuel de l'établissement

Les noms d'établissements évoluent au fil des années – fusions, changements de raison sociale, nouveaux exploitants. AVG2 enregistre le nom par année, ce qui est correct sur le fond, mais pouvait prêter à confusion dans le cockpit lorsqu'un établissement y apparaissait sous un ancien nom.

Désormais, le cockpit affiche **toujours le nom officiel actuel de l'établissement**. Si le nom diffère pour une année donnée, une petite icône d'information le signale – un survol montre le nom de l'époque. Vous disposez ainsi des deux informations : l'état actuel pour la vue d'ensemble, l'exactitude historique à la demande.

---

## Ce qu'il reste à savoir

Ce n'est qu'un extrait. La **liste complète de toutes les modifications** – y compris les corrections mineures et les améliorations internes – se trouve comme d'habitude dans les notes de version directement dans l'application.

> **En bref :** 3.1.0 simplifie AVG2 à de nombreux petits endroits – rien de spectaculaire, mais quelque chose de tangible.
