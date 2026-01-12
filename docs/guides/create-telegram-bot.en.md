---
lang: en
slug: create-telegram-bot
title: "How to create your own Telegram bot"
description: "Generate a token with BotFather and plug it into Vallax to send alerts from your bot."
---

## Summary

This walkthrough shows how to create a personal Telegram bot through BotFather. The goal is to plug its token into Vallax so your alerts are sent from your own bot instead of sharing the public quota.

## Why use your own bot?

If you need to receive more notifications per minute and avoid VallaxBot’s rate limit, add the token from your bot so every alert is dispatched from it.

## Create the bot step by step

### 1. Start the conversation

Search for `@BotFather` in Telegram, open the chat, and press **Start** to unlock all the available commands.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-02-start.png"
    alt="BotFather welcome screen with the Start button highlighted"
    width="360"
  />
  <figcaption>Tap Start so BotFather shows the full command list.</figcaption>
</figure>

### 2. Tap “Open”

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-01-open.png"
    alt="Opening BotFather from Telegram and tapping Open"
    width="360"
  />
  <figcaption>Use the Open button in the official Telegram client to launch BotFather quickly.</figcaption>
</figure>

### 3. Choose “Create a New Bot”

From the action list, select **Create a New Bot**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-03-create.png"
    alt="BotFather options highlighting Create a New Bot"
    width="360"
  />
</figure>

### 4. Enter the name and username

Provide a public name (for example, “Vallax private bot”) and a username ending in `bot`, such as `vallax_private_bot`. BotFather confirms when the username is available.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-04-form.png"
    alt="BotFather form fields filled with the bot name and username"
    width="360"
  />
  <figcaption>Pick a name you can recognize quickly and a unique username.</figcaption>
</figure>

### 5. Copy the token

BotFather returns a token similar to `123456:ABCDE...`. Copy and store it securely—anyone with it can send messages as your bot.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-05-token.png"
    alt="BotFather showing the bot token along with Copy and Revoke buttons"
    width="360"
  />
  <figcaption>Keep the token private; you’ll paste it into Vallax in the next step.</figcaption>
</figure>

### 6. Ping your newly created bot

Search Telegram for the username you registered (for example, `vallax_private_bot`), open the chat, and tap **Start**. Without this handshake, the bot cannot send you messages.

## Connect your bot to Vallax

1. Inside Vallax, open **Profile → Settings**.
2. Enable the **Telegram token** option to use your personal bot.
3. Paste the token from BotFather and press **Save token**.
4. Once saved, every alert is delivered through your private bot without sharing the public limit.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-06-vallax-config.png"
    alt="Vallax settings screen with the Telegram token option and Save token button"
    width="360"
  />
</figure>
