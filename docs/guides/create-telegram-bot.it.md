---
lang: it
slug: crea-bot-telegram
title: "Come creare il tuo bot Telegram"
description: "Genera un token con BotFather e collegalo a Vallax per inviare alert dal tuo bot."
---

## Riepilogo

Questa guida mostra come creare un bot Telegram personale con BotFather. L'obiettivo e usare il token in Vallax per inviare gli alert dal tuo bot privato.

## Perche usare un bot personale?

Se devi ricevere piu notifiche al minuto ed evitare il rate limit di VallaxBot, aggiungi il token del tuo bot.

## Crea il bot passo dopo passo

### 1. Avvia la conversazione

Cerca `@BotFather` su Telegram, apri la chat e premi **Start**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-02-start.png"
    alt="Schermata iniziale di BotFather con Start"
    width="360"
  />
</figure>

### 2. Premi "Open"

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-01-open.png"
    alt="Apertura di BotFather da Telegram"
    width="360"
  />
</figure>

### 3. Seleziona "Create a New Bot"

Dalla lista azioni scegli **Create a New Bot**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-03-create.png"
    alt="Opzione Create a New Bot in BotFather"
    width="360"
  />
</figure>

### 4. Inserisci nome e username

Inserisci un nome pubblico e uno username che finisca con `bot`.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-04-form.png"
    alt="Form BotFather con nome e username"
    width="360"
  />
</figure>

### 5. Copia il token

BotFather restituisce un token come `123456:ABCDE...`. Copialo e conservalo in modo sicuro.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-05-token.png"
    alt="BotFather mostra il token del bot"
    width="360"
  />
</figure>

### 6. Avvia il nuovo bot

Cerca il bot appena creato, apri la chat e premi **Start**.

## Collega il bot a Vallax

1. In Vallax apri **Profile -> Settings**.
2. Attiva **Telegram token**.
3. Incolla il token e premi **Save token**.
4. Gli alert verranno inviati dal tuo bot privato.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-06-vallax-config.png"
    alt="Schermata impostazioni Vallax con token Telegram"
    width="360"
  />
</figure>
