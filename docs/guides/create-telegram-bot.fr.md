---
lang: fr
slug: creer-bot-telegram
title: "Comment creer votre bot Telegram"
description: "Generez un token avec BotFather et connectez-le a Vallax pour envoyer les alertes depuis votre bot."
---

## Resume

Ce guide explique comment creer un bot Telegram personnel avec BotFather. L'objectif est d'utiliser son token dans Vallax pour envoyer vos alertes depuis votre bot prive.

## Pourquoi utiliser votre propre bot ?

Si vous devez recevoir plus de notifications par minute et eviter le rate limit de VallaxBot, ajoutez le token de votre bot pour que toutes les alertes partent depuis lui.

## Creation du bot pas a pas

### 1. Demarrez la conversation

Recherchez `@BotFather` dans Telegram, ouvrez le chat et appuyez sur **Start**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-02-start.png"
    alt="Ecran de bienvenue BotFather avec le bouton Start"
    width="360"
  />
</figure>

### 2. Appuyez sur "Open"

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-01-open.png"
    alt="Ouverture de BotFather dans Telegram"
    width="360"
  />
</figure>

### 3. Choisissez "Create a New Bot"

Dans la liste d'actions, selectionnez **Create a New Bot**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-03-create.png"
    alt="Option Create a New Bot dans BotFather"
    width="360"
  />
</figure>

### 4. Entrez le nom et le nom d'utilisateur

Saisissez un nom public et un nom d'utilisateur qui se termine par `bot`.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-04-form.png"
    alt="Formulaire BotFather avec nom et username"
    width="360"
  />
</figure>

### 5. Copiez le token

BotFather renvoie un token similaire a `123456:ABCDE...`. Copiez-le et gardez-le prive.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-05-token.png"
    alt="BotFather affichant le token du bot"
    width="360"
  />
</figure>

### 6. Ouvrez votre nouveau bot

Recherchez votre bot, ouvrez le chat et appuyez sur **Start**.

## Connectez le bot a Vallax

1. Dans Vallax, ouvrez **Profile -> Settings**.
2. Activez **Telegram token**.
3. Collez le token et appuyez sur **Save token**.
4. Vos alertes seront envoyees depuis votre bot prive.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-06-vallax-config.png"
    alt="Configuration du token Telegram dans Vallax"
    width="360"
  />
</figure>
