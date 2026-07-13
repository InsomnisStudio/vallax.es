---
title: Limites et pauses de securite
description: Comprenez pourquoi une alerte peut temporairement cesser d'envoyer des notifications.
sidebar:
  order: 3
---

Il y a un point important a connaitre pour eviter les surprises : Vallax applique certaines limites de securite pour empecher une alerte de generer trop de notifications en trop peu de temps.

Ce n'est pas un bug. C'est une protection pour maintenir la stabilite du systeme.

## Limite des notifications normales

Une alerte standard a une limite de **240 notifications par minute**.

Si l'une de vos alertes depasse ce rythme, Vallax **arretera temporairement toutes vos alertes**.

Pendant ce temps :

- Meme si vous les reactivez, **vous ne recevrez pas de notifications**.
- Vous devrez attendre **1 minute** avant qu'elles refonctionnent normalement.

## Limite des alertes avec IA

Les alertes utilisant l'IA ont une limite plus stricte : **6 analyses par minute**.

Si l'analyse par IA se declenche plus de 6 fois dans une minute, Vallax **desactivera toutes vos alertes avec IA**.

Dans ce cas :

- Meme si vous les reactivez, **vous ne recevrez pas de notifications**.
- Vous devrez attendre **2 minutes** avant qu'elles refonctionnent.

## Ce que cela signifie en pratique

Si une alerte atteint souvent ces limites, cela signifie generalement qu'elle est trop large.

Par exemple :

- Des mots-cles trop generiques.
- Trop peu de filtres.
- De l'IA activee sur des alertes qui laissent encore passer trop d'annonces.

## Recommandation

Si une alerte se bloque souvent, le mieux est de la rendre plus precise :

- Affinez les **mots-cles**.
- Ajoutez des **mots a exclure** pour eliminer le bruit.
- Utilisez l'**IA** seulement quand c'est vraiment necessaire.

Plus une alerte est precise, plus les notifications seront utiles et moins vous risquez d'atteindre ces limites.
