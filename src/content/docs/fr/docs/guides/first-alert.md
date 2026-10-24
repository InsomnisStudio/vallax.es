---
title: Comment créer votre première recherche
description: Apprenez à configurer une recherche utile sans vous compliquer la vie.
sidebar:
  order: 2
---

Créer une recherche dans Vallax est simple, mais certains champs méritent d'être bien compris pour que les notifications soient vraiment utiles.

Inutile de tout utiliser dès le début. L'important est de savoir à quoi sert chaque partie et de n'utiliser que le nécessaire. Le formulaire suit ce même ordre.

## Nom

Il sert uniquement à reconnaître la recherche dans votre liste. Il n'influence pas les résultats.

## Mots-clés (« Que cherchez-vous ? »)

C'est le champ le plus important. Il indique à Vallax quel type d'annonce vous voulez trouver.

Écrivez les mots comme dans un moteur de recherche. Chaque mot devient une étiquette et **l'annonce doit tous les contenir, dans n'importe quel ordre**.

Pour une expression exacte, mettez-la **entre guillemets** : `"play station 2"`.

### Options : des alternatives dans la même recherche

Vous pouvez ajouter plusieurs **options**. Chaque option est vérifiée séparément et il suffit qu'**une seule** soit remplie pour que l'annonce passe le filtre.

Par exemple :

- Option 1 : `nintendo switch` → l'annonce doit contenir *nintendo* **et** *switch*.
- Option 2 : `console nintendo`
- Option 3 : `"switch oled"`

Les options servent pour les synonymes et les différentes façons d'écrire la même chose (`PS4`, `PlayStation 4`…).

Plus vous mettez de mots dans une même option, moins d'annonces correspondront.

### Comment le texte est comparé

- Les mots-clés **ne tiennent pas compte des majuscules et minuscules**.
- La correspondance **n'est pas stricte au mot entier**. Si vous cherchez `tractor`, `extractor` peut aussi correspondre.

Pour quelque chose de plus strict, utilisez les guillemets ou, avec Pro, une **regex**.

### Limite de mots-clés

Le nombre total de mots-clés par recherche dépend de votre plan : **5 en Gratuit, 15 en Plus et 50 en Pro**.

## Plateformes et catégories

Choisissez où Vallax doit chercher : Wallapop, Vinted, Milanuncios et Todocoleccion. Avec le plan **Gratuit**, vous pouvez choisir **1 plateforme** par recherche ; avec **Plus** et **Pro**, toutes.

La **catégorie** est facultative. Chaque plateforme a sa propre arborescence. Utilisez-la seulement si la recherche vous ramène d'autres types de produits.

## Prix et localisation

Les deux sont facultatifs. Laissez-les vides pour ne rien écarter.

- **Prix :** indiquez un maximum ou une fourchette minimum–maximum.
- **Localisation :** choisissez une zone et un rayon maximum, par exemple Alicante à 50 km. Utile pour acheter près de chez vous, voir l'article en personne ou éviter les longs trajets.

Un prix maximum ou un rayon très serrés signifient moins de notifications.

### Important : Vinted

Sur **Vinted**, la localisation ne s'applique pas, car la plateforme ne fournit pas une position assez précise pour travailler avec des distances. Vous recevrez des annonces hors de votre zone même si vous la configurez.

## Plus de filtres

### Sans ces mots

C'est l'inverse des mots-clés : les annonces contenant certains mots sont écartées.

Cas typique : chercher une console sans les annonces qui mentionnent `manette`, `cassé`, `pour pièces` ou `boîte vide`. C'est un excellent moyen de réduire le bruit sans toucher au reste de la recherche.

### Vendeurs

- **Seulement ces vendeurs :** la recherche se concentre sur ces utilisateurs.
- **Jamais ces vendeurs :** leurs annonces sont écartées.

Pratique si vous connaissez déjà des vendeurs intéressants ou, au contraire, si vous voulez éviter certains comptes. Pour trouver l'identifiant d'un vendeur, consultez [ce guide](/fr/guides/get-seller-identifier).

### Où regarder dans l'annonce

Pour chaque filtre de texte (mots, mots à ignorer, regex et regex à ignorer), vous pouvez choisir s'il s'applique au **titre**, à la **description** ou aux **deux**.

**Vinted** n'a pas de description : les filtres s'appliquent donc au **titre** et à la **marque**.

## Regex (Pro uniquement)

Une **regex** permet de chercher des motifs de texte plus précis. Inutile pour les recherches courantes, elle peut aider quand les mots-clés ne suffisent pas : variantes de noms, modèles ou formats de texte.

- **Regex personnalisée :** l'annonce doit correspondre au motif. Exemple : `^(Leica|Hasselblad).*(M[0-9]).*`
- **Regex à ignorer :** écarte les annonces qui correspondent au motif, même si elles remplissent le reste. Exemple : `(?i)(replique|copie|inspire)`

Pour tester, **regex101** est un site utile. Utilisez le moteur **Rust**.

Les regex sont une fonction du plan **Pro**. Si vous passez à un plan inférieur, les recherches avec regex sont mises en pause jusqu'à ce que vous les modifiiez (voir [Plans](/fr/docs/guides/plans#si-vous-changez-pour-un-plan-inférieur)).

## Filtre IA

Ce champ permet de donner une instruction supplémentaire à l'intelligence artificielle de Vallax.

L'IA est un **second filtre** : elle ne s'applique pas à toutes les annonces. Vos mots, prix, zone et autres filtres passent d'abord, puis l'IA examine les annonces déjà retenues et écarte celles qui ne respectent pas votre instruction. Elle **n'ajoute jamais d'annonces** que vos filtres n'auraient pas trouvées.

### Ce qu'elle analyse

L'IA peut examiner :

- Les **photos** de l'annonce : vous choisissez combien, de **0 à 10**. Avec 0, elle ne lit que le texte.
- Le **titre**.
- La **description**, quand la plateforme la fournit.
- Le **prix**.
- Sur **Vinted**, aussi la **marque**.

### À quoi elle sert

L'IA est utile pour confirmer quelque chose que les mots-clés seuls ne permettent pas de garantir.

Exemple : votre recherche peut détecter `PS4`, mais cela ne veut pas dire que l'annonce est une console. Ce pourrait être une manette, une boîte vide ou un accessoire. Vous pouvez alors ajouter une instruction comme :

`Je veux une console PlayStation 4 complète, pas une manette ni un accessoire.`

L'IA utilise alors le texte et les images pour vérifier si l'annonce correspond vraiment.

### Utiliser le prix avec du contexte

L'IA peut aussi relier le prix au contenu de l'annonce, ce qu'un prix minimum ou maximum ne peut pas exprimer :

`Accepte les annonces jusqu'à 40 € si elles incluent des jeux ; sinon, accepte seulement jusqu'à 20 €.`

### Tokens IA

Chaque annonce examinée par l'IA consomme des **tokens IA**, qu'elle corresponde ou non. La consommation dépend surtout du nombre de photos analysées et de la longueur de l'annonce.

- Tous les plans, y compris **Gratuit**, peuvent utiliser le filtre IA s'ils ont des tokens.
- Il faut **au moins 3 tokens** pour activer l'analyse IA dans une recherche.
- Si votre solde tombe à 0, le filtre IA se désactive, mais la recherche continue de fonctionner sans lui.

Pour consommer moins, utilisez des mots-clés précis, des mots à ignorer et une fourchette de prix : l'IA n'examinera que les annonces vraiment susceptibles de vous intéresser.

Comment obtenir des tokens (Pro, packs et boutique de points) : [Plans et tokens IA](/fr/docs/guides/plans#tokens-ia).

## Tester la recherche avant de l'enregistrer

Avec **Voir les dernières correspondances**, Vallax teste votre filtre sur les annonces publiées au cours des **dernières 24 heures** et vous indique :

- Combien de correspondances il y aurait eu et combien de notifications par jour vous recevriez, environ.
- Quelques annonces d'exemple (ce sont des annonces déjà publiées, pas des notifications : elles n'apparaîtront pas dans votre liste).

S'il y en a trop, fixez un prix maximum ou ajoutez un mot. S'il n'y en a aucune, le plus souvent un mot-clé pose problème, ou le prix, la zone ou la catégorie sont trop stricts.

## Partager et importer des recherches

Depuis les actions d'une recherche, vous pouvez **Partager la recherche** : Vallax génère un code et le copie dans le presse-papiers. La personne qui le reçoit peut utiliser **Importer une recherche**, la vérifier et l'enregistrer.

Si la recherche importée utilise des options Pro (comme les regex) et que vous n'avez pas Pro, vous devrez les retirer pour l'enregistrer.

## Recommandation pour commencer

Pour votre première recherche, le plus pratique est :

1. Bien définir les **mots-clés** et ajouter des options pour les synonymes.
2. Utiliser **sans ces mots** pour retirer les annonces gênantes.
3. Ajouter un **prix** et une **localisation** pour affiner.
4. **Tester la recherche** pour voir combien de notifications vous recevriez.
5. Utiliser l'**IA** quand il faut relier texte, photos et prix ou appliquer des conditions que les filtres de base ne peuvent pas exprimer.

Avec cela, vous pouvez déjà créer des recherches très précises sans trop vous compliquer.
