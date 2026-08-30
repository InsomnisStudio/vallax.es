---
title: Comment creer votre premiere alerte
description: Apprenez a configurer une alerte utile sans la compliquer inutilement.
sidebar:
  order: 2
---

Creer une alerte dans Vallax est simple, mais certains champs meritent d'etre bien compris pour que les notifications soient vraiment utiles.

Vous n'avez pas besoin de tout compliquer des le debut. L'important est de comprendre a quoi sert chaque champ et de n'utiliser que ce dont vous avez besoin.

## Mots-cles

C'est le champ le plus important.

Les mots-cles indiquent a Vallax le type d'annonce que vous voulez trouver. Vous pouvez creer plusieurs options differentes dans une meme alerte.

### Comment fonctionnent les options

Chaque option est verifiee separement. Si une seule option correspond, l'annonce est consideree comme valide.

Dans chaque option, les mots sont ecrits dans le meme champ et separes par des virgules.

Par exemple :

- Option 1 : `Nintendo, Switch`
- Option 2 : `PlayStation 4`
- Option 3 : `PS4`

Dans une option comme `Nintendo, Switch`, vous dites simplement a Vallax : je veux des annonces ou ces deux mots correspondent.

Si une annonce correspond a l'une de ces options, elle passe ce filtre.

### Important sur la facon dont le texte est verifie

- Les mots-cles **ne tiennent pas compte des majuscules et minuscules**.
- La correspondance **n'est pas stricte mot complet par mot complet**.

Par exemple, si vous cherchez `tractor`, un texte comme `extractor` peut aussi etre considere comme valide.

Si vous avez besoin d'un comportement plus strict, c'est la que les **regex** peuvent etre utiles.

### Ou ils sont verifiees

Les mots-cles ne sont pas controles exactement de la meme facon sur toutes les plateformes :

- Sur **Wallapop**, **Milanuncios** et **Todocoleccion**, ils sont verifies dans le **titre** et la **description**.
- Sur **Vinted**, nous n'avons pas acces a la description, donc ils sont verifies dans le **titre** et la **marque**.

## Localisation

Ce champ vous permet de choisir une zone et une distance maximale.

Par exemple, vous pouvez demander des annonces a Alicante dans un rayon de 50 km.

Cela est utile si vous voulez acheter pres de chez vous, voir l'objet en personne ou eviter de longs deplacements.

### Important : Vinted

Sur **Vinted**, ce filtre ne fonctionne pas de la meme maniere, car cette plateforme ne fournit pas une localisation assez precise pour travailler correctement avec la distance.

Si vous choisissez une distance precise, l'attente normale est de trouver des annonces proches. C'est pourquoi cette option a peu de valeur sur Vinted.

## Categorie

La categorie peut aider a affiner la recherche, meme si ce n'est pas toujours le champ le plus important.

Le point cle ici est le suivant : **les categories Vinted ne sont pas supportees pour le moment**. C'est pourquoi vous ne les verrez pas dans le formulaire pour cette plateforme.

Ce n'est pas une erreur. Cette option n'est tout simplement pas disponible pour Vinted actuellement.

## Mots a exclure

Ce champ fait l'inverse des mots-cles.

Il permet de demander a Vallax d'ignorer les annonces contenant certains mots qui ne vous interessent pas.

Un cas classique serait de chercher une console mais d'exclure les annonces contenant `manette`, `cassee`, `lire` ou `boite seule`.

C'est une maniere tres efficace de reduire le bruit sans modifier le reste de l'alerte.

## Suivre des utilisateurs et ignorer des utilisateurs

Ces champs permettent de filtrer les annonces selon le vendeur.

- Si vous ajoutez des utilisateurs dans **suivre des utilisateurs**, l'alerte se concentre sur eux.
- Si vous ajoutez des utilisateurs dans **ignorer des utilisateurs**, leurs annonces sont exclues.

C'est utile si vous connaissez deja des vendeurs interessants ou, au contraire, si vous voulez eviter certains comptes.

## Regex

Une **regex** permet de rechercher des motifs de texte plus precis.

Ce n'est pas necessaire pour une alerte classique, mais cela peut etre utile lorsque les mots-cles ne suffisent plus.

Par exemple, cela peut servir a detecter des variantes de modeles, des formats d'ecriture ou des motifs de texte particuliers.

Si vous voulez tester des regex, **regex101** est un bon outil. Si vous faites des essais la-bas, utilisez le moteur **Rust**.

## Champ IA

Ce champ sert a donner une instruction supplementaire a l'intelligence artificielle de Vallax.

L'IA **n'est pas appliquee a toutes les annonces**. D'abord, les filtres normaux de l'alerte s'executent. Ensuite seulement, l'IA examine les annonces qui ont deja passe ces filtres.

C'est important, car l'IA ne remplace pas les filtres de base. Elle agit comme une couche supplementaire.

### Tokens IA

Les **tokens IA** sont les credits utilises par Vallax pour ses outils d'intelligence artificielle. Actuellement, ils sont utilises par le filtre IA des alertes : vous decrivez dans un prompt ce que vous recherchez et l'IA verifie plus precisement si chaque annonce correspond.

Avec Premium, vous recevez **25 000 tokens IA chaque mois**, mais Premium n'est pas obligatoire pour utiliser l'IA. Vous pouvez aussi acheter des tokens dans la boutique et les utiliser sans abonnement Premium.

Un solde minimum de tokens est necessaire pour activer une alerte avec IA. Si votre solde est insuffisant, **vous ne pourrez pas activer cette alerte IA** avant de recevoir ou d'acheter davantage de tokens. Les alertes sans IA n'utilisent pas ces tokens.

### Ce qu'elle analyse

L'IA peut analyser :

- Les photos que vous choisissez, jusqu'a un maximum de **10**.
- Le **titre**.
- La **description**, lorsque la plateforme la fournit.
- Le **prix**.
- Sur **Vinted**, egalement la **marque**.

Selon la plateforme, Vallax a acces a des champs differents. Plus vous demandez a l'IA d'analyser de photos, plus elle consomme de tokens. Selectionnez donc uniquement les images susceptibles d'apporter des informations utiles.

### A quoi cela sert

L'IA est utile lorsque vous voulez confirmer un detail qui n'est pas toujours evident avec les mots-cles seuls.

Exemple : votre alerte peut detecter `PS4`, mais cela ne garantit pas que l'annonce concerne vraiment une console. Cela peut etre une manette, une boite vide ou un accessoire.

Dans ce cas, vous pouvez ajouter une instruction comme celle-ci :

`Je veux une console PlayStation 4 complete, pas une manette ni un accessoire.`

Ainsi, l'IA utilise le texte et les images pour verifier si l'annonce correspond vraiment a ce que vous cherchez.

### Utiliser le prix avec son contexte

L'IA peut aussi examiner le prix et le mettre en relation avec le contenu de l'annonce. Vous pouvez ainsi definir des conditions qu'un seul prix minimum ou maximum ne permet pas d'exprimer.

Par exemple :

`Accepte les annonces jusqu'a 40 € si elles incluent des jeux ; sans jeux, accepte seulement jusqu'a 20 €.`

L'IA peut verifier si des jeux apparaissent dans le texte ou les photos et appliquer la limite de prix correspondante.

## Recommandation pour commencer

Si c'est votre premiere alerte, la meilleure approche est la suivante :

1. Definissez correctement vos **mots-cles**.
2. Utilisez les **mots a exclure** pour eliminer le bruit.
3. Ajoutez une **localisation** si vous voulez des annonces proches.
4. Utilisez l'**IA** pour relier le texte, les photos et le prix ou appliquer des conditions que les filtres de base ne peuvent pas exprimer.

Avec cela, vous pouvez deja creer des alertes tres precises sans les rendre inutilement complexes.
