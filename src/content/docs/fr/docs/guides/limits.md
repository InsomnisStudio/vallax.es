---
title: Limites et pauses de sécurité
description: Comprenez pourquoi une recherche peut cesser temporairement de vous avertir.
sidebar:
  order: 6
---

Il y a un point important à bien comprendre : Vallax applique des limites de sécurité pour éviter que votre compte génère trop de notifications en très peu de temps.

Ce n'est pas un bug. C'est une protection pour éviter les comportements anormaux et garder le système stable. Ces limites sont **les mêmes pour tous les plans**.

## Limite globale de notifications

Votre compte a une limite globale de **240 notifications par minute**.

Cela signifie qu'entre toutes vos recherches, avec ou sans IA, vous ne pouvez pas dépasser ce rythme.

Si elles dépassent cette limite ensemble, Vallax **arrête temporairement toutes vos recherches**. Pendant ce temps :

- Même si vous les réactivez, **vous ne recevrez pas de notifications**.
- Vous devrez attendre **1 minute** pour qu'elles fonctionnent à nouveau normalement.

## Limite des recherches avec IA

Les recherches qui utilisent l'IA ont une limite globale plus stricte : **20 analyses par minute**.

Cela signifie qu'entre toutes vos recherches avec IA, vous ne pouvez pas dépasser ce plafond.

Si l'analyse IA se déclenche plus de 20 fois en une minute entre toutes, Vallax **désactive toutes vos recherches qui utilisent l'IA**. Dans ce cas :

- Même si vous les réactivez, **vous ne recevrez pas de notifications**.
- Vous devrez attendre **2 minutes** pour qu'elles fonctionnent à nouveau.

## En pause à cause de votre plan

C'est différent des pauses de sécurité. Si une recherche est marquée **En pause à cause de votre plan**, votre plan actuel ne la couvre pas : vous avez plus de recherches actives que permis, ou elle utilise des regex, des mots-clés ou des plateformes au-delà de la limite.

Vous pouvez la modifier pour qu'elle rentre dans le plan ou passer à un plan supérieur. Voir [Si vous changez pour un plan inférieur](/fr/docs/guides/plans#si-vous-changez-pour-un-plan-inférieur).

## Ce que cela signifie en pratique

Si une recherche se déclenche trop souvent, elle est généralement trop large. Par exemple :

- Des mots-clés très génériques.
- Peu de filtres.
- L'IA utilisée sur des recherches qui laissent encore passer trop d'annonces.

## Recommandation

Si une recherche s'arrête souvent, rendez-la plus précise :

- Affinez les **mots-clés**.
- Ajoutez des **mots à ignorer** et un **prix maximum** pour réduire le bruit.
- Utilisez **Voir les dernières correspondances** pour vérifier combien de notifications par jour elle génère avant de l'enregistrer.
- N'utilisez l'**IA** que quand c'est vraiment nécessaire.

Plus une recherche est affinée, plus les notifications sont utiles et moins vous risquez d'atteindre ces limites.
