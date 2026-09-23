+++
author = "itree informatik"
title = "AVG2 release d'été 3.2.0 – ce qui change"
date = "2026-07-06"
description = "Avec la release d'été 3.2.0, le canton de Saint-Gall fait son entrée dans AVG2. S'y ajoutent le nouveau type d'établissement, un journal de tous les e-mails envoyés et d'autres nouveautés – voici les principales en un coup d'œil."
image = "images/avg2.png"
tags = [
    "avg2",
    "release",
    "mise-a-jour",
    "saint-gall",
]
categories = [
    "Produit",
]
+++

La release d'été 3.2.0 apporte un nouveau canton, une classification plus claire des établissements et davantage de transparence dans l'envoi des e-mails. Voici les principales nouveautés en un coup d'œil.
<!--more-->

## 🏔️ Le canton de Saint-Gall est à bord

En avril, nous avons [annoncé](/fr/blog/kanton-st-gallen-neuer-avg2-kunde/) que le canton de Saint-Gall misait désormais sur AVG2. Avec la version 3.2.0, Saint-Gall est introduit – et avec lui toute une série d'évolutions que nous avons réalisées ensemble dans le cadre du projet.

### Importer plutôt que saisir deux fois

De nombreuses données existent déjà auprès du canton. Elles sont désormais intégrées directement dans AVG2 par téléversement de fichier (CSV ou Excel) :

- **Heures de prestations OPAS** des organisations d'aide et de soins à domicile
- **Résidents par niveau de soins** des établissements médico-sociaux
- **Données du plan des postes** – équivalents temps plein par fonction du personnel – des hôpitaux répertoriés

L'attribution à l'établissement se fait via le numéro REE, et chaque import est journalisé. Les valeurs importées sont en lecture seule pour les fournisseurs de prestations : ils contrôlent et valident au lieu de saisir eux-mêmes. Pour le plan des postes, ils peuvent toujours faire valoir des déductions.

### Un plan des postes plus finement structuré

- **Hiérarchie des fonctions et des diplômes :** les sous-positions apparaissent en retrait sous leur position parente. Une validation garantit que la somme des sous-positions ne dépasse pas la valeur de niveau supérieur.
- **Code de fonction du personnel selon la statistique des hôpitaux :** il peut être saisi sur les fonctions et les diplômes et s'affiche dans le plan des postes.
- **Deux déductions supplémentaires :** « Hors liste hospitalière » et « Sans contact patient » réduisent le nombre de postes déterminant.

### Décompte et versement compensatoire

- **Les interruptions de formation** sont saisies séparément et imputées au prorata, selon un pourcentage défini dans les données de base.
- **Versement compensatoire selon les semaines manquantes :** en plus du calcul existant, une variante multiplie les semaines de formation manquantes par un montant compensatoire par semaine et par domaine de soins.
- **Nouvelle logique de remise :** pour chaque versement compensatoire, il est possible de choisir entre taxe de remplacement, demande sans remise, demande de remise partielle et demande de remise totale – avec les variables correspondantes pour les modèles Word.

Comme d'habitude, les nouvelles fonctionnalités se pilotent via la configuration. Pour les cantons existants, rien ne change tant qu'elles ne sont pas activées.

## 🏢 Type d'établissement : établissement, home ou organisme responsable

Jusqu'ici, l'établissement ne disposait que d'un simple champ oui/non « Organisme responsable ». Cela ne suffisait plus à refléter la réalité du terrain.

AVG2 connaît désormais le **type d'établissement** avec trois valeurs : **établissement**, **home** et **organisme responsable**. Le type n'a pas besoin d'être tenu à jour – AVG2 le déduit automatiquement de la hiérarchie : ce qui est rattaché à un organisme responsable est un home ; ce qui regroupe des homes est un organisme responsable ; tout le reste est un établissement. Si la hiérarchie change, le type s'adapte de lui-même.

Le type d'établissement apparaît dans la liste des établissements, dans la recherche avancée et sur la page de détail de l'établissement. Les filtres, l'export Excel et les évaluations (données annuelles, liste des personnes) en tiennent également compte.

## 📧 Journal e-mail : chaque e-mail est journalisé

Désormais, AVG2 journalise chaque e-mail envoyé par l'application. Le journal est consultable sous **Paramètres › Journal**, dans le nouvel onglet **« Journal e-mail »**.

Pour chaque entrée, vous voyez :

- quel **modèle** a été utilisé,
- à quels **destinataires** l'e-mail était adressé,
- l'**objet**, la **date d'envoi** et qui a déclenché l'envoi,
- le **statut** : transmis au serveur de messagerie, envoi de test ou erreur – en cas d'erreur, avec le message du serveur de messagerie.

Un clic sur une ligne ouvre le message complet. Lors d'un envoi groupé, une entrée par lot d'envoi est créée avec tous les destinataires. La recherche permet de filtrer par texte et par période.

## ✉️ Gérer soi-même les modèles – et les tester avant

Du côté des modèles d'e-mail et Word, plusieurs choses ont évolué :

- **Les modèles d'e-mail** peuvent désormais être ajoutés et supprimés par vos soins. Les modèles dont AVG2 a besoin pour ses processus restent protégés et peuvent uniquement être modifiés.
- **Par configuration de processus,** un modèle d'e-mail propre peut être défini – par exemple des textes différents pour la Confédération et le canton à la même étape de processus.
- **E-mails de test avec variables :** lors de l'envoi test d'un modèle d'e-mail, les valeurs des variables peuvent être saisies dans un formulaire.
- **Tester les modèles Word :** choisir un établissement, vérifier les variables remplies, écraser certaines valeurs au besoin – et télécharger directement le document de test. Sans devoir parcourir le processus lui-même.

## 🧩 Un cockpit à votre goût

Les tuiles du cockpit peuvent désormais être **disposées et redimensionnées par utilisateur**. Le bouton cadenas active le mode édition : vous déplacez les tuiles par glisser-déposer et enregistrez la disposition. À la prochaine ouverture, tout est tel que vous l'avez configuré.

## 💰 Un bonus pour le dépassement des objectifs

Pour le canton de Soleure, un nouveau processus de **bonus sur les versements compensatoires** est disponible : une fois les versements compensatoires clôturés, les établissements qui ont dépassé leur objectif de semaines de formation reçoivent un bonus au prorata, financé par le fonds des versements compensatoires perçus. Qui forme plus que demandé en profite ainsi directement.

---

## Ce qu'il reste à savoir

Ce n'est qu'un extrait. La **liste complète de toutes les modifications** – dont une relecture complète de l'orthographe et de la grammaire des textes standard ainsi que diverses corrections – se trouve comme d'habitude dans les notes de version directement dans l'application.

> **En bref :** 3.2.0 accueille un nouveau canton et rend AVG2 un peu plus transparent pour tous – du type d'établissement jusqu'à l'envoi des e-mails.
