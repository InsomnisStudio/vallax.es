---
lang: es
slug: crear-bot-telegram
title: "Evita el rate limit con tu bot de Telegram"
description: "Activa un bot personal para que Vallax envíe tus alertas sin compartir el cupo del bot público."
---

## Resumen

Esta guía te explica cómo crear un bot propio en Telegram usando BotFather. El objetivo es activar la función Premium de Vallax que envía tus alertas desde tu bot personal para librarte del rate limit global del bot oficial.

## ¿Por qué crear tu bot personal?

Si necesitas recibir más notificaciones por minuto y así evitar el rate limit de VallaxBot, introduce el token de tu bot para que todas tus alertas salgan desde él.

## Crea el bot paso a paso

### 1. Inicia la conversación

Busca `@BotFather` en Telegram, abre el chat y pulsa **Iniciar** para que BotFather muestre las opciones disponibles.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-02-start.png"
    alt="Pantalla de inicio de BotFather con el botón Iniciar"
    width="360"
  />
  <figcaption>Pulsa Iniciar para desbloquear todas las opciones de BotFather.</figcaption>
</figure>

### 2. Pulsa “Open”

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-01-open.png"
    alt="Abrir BotFather desde Telegram y tocar Open"
    width="360"
  />
  <figcaption>Usa el botón Open para acceder al bot desde el cliente oficial.</figcaption>
</figure>

### 3. Pulsa “Create a New Bot”

En la lista de acciones, pulsa **Create a New Bot** / **Crear nuevo bot**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-03-create.png"
    alt="Lista de opciones de BotFather resaltando Create a New Bot"
    width="360"
  />
</figure>

### 4. Introduce nombre y usuario

Escribe un nombre público (por ejemplo, “Vallax privado”) y un nombre de usuario que termine en `bot`, como `vallax_private_bot`. BotFather te confirmará si está disponible.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-04-form.png"
    alt="Formulario de BotFather con los campos de nombre y usuario completados"
    width="360"
  />
</figure>

### 5. Copia el token

BotFather mostrará un token similar a `123456:ABCDE...`. Cópialo y guárdalo: es la clave que Vallax utilizará para enviar tus alertas desde este bot.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-05-token.png"
    alt="Pantalla final de BotFather mostrando el token y los botones Copy y Revoke"
    width="360"
  />
</figure>

### 6. Habla con tu bot recién creado

Busca en Telegram el nombre de usuario que acabas de registrar (por ejemplo, `vallax_private_bot`), abre el chat y pulsa **Start** para activarlo. Sin este paso, tu bot no podrá enviarte mensajes.

## Conecta tu bot con Vallax Premium

1. En el bot de Vallax abre el menú **Perfil → Configuración**.
2. Activa **Token de Telegram** para usar tu bot personal.
3. Pega el token que acabas de copiar y pulsa **Guardar token**.
4. Una vez guardado, las alertas llegarán desde tu bot privado sin sufrir los límites del bot público.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-06-vallax-config.png"
    alt="Pantalla de configuración de Vallax mostrando la opción Token de Telegram y el botón Guardar token"
    width="360"
  />
</figure>
