---
lang: pl
slug: utworz-bot-telegram
title: "Jak utworzyc wlasnego bota Telegram"
description: "Wygeneruj token w BotFather i podlacz go do Vallax, aby wysylac alerty ze swojego bota."
---

## Podsumowanie

Ten poradnik pokazuje, jak utworzyc prywatnego bota Telegram przez BotFather. Celem jest podlaczenie tokena do Vallax, aby alerty szly z Twojego bota.

## Dlaczego warto uzyc wlasnego bota?

Jesli potrzebujesz wiecej powiadomien na minute i chcesz uniknac rate limitu VallaxBot, dodaj token swojego bota.

## Tworzenie bota krok po kroku

### 1. Rozpocznij rozmowe

Wyszukaj `@BotFather` w Telegramie, otworz czat i kliknij **Start**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-02-start.png"
    alt="Ekran powitalny BotFather z przyciskiem Start"
    width="360"
  />
</figure>

### 2. Kliknij "Open"

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-01-open.png"
    alt="Otwarcie BotFather w Telegramie"
    width="360"
  />
</figure>

### 3. Wybierz "Create a New Bot"

Z listy akcji wybierz **Create a New Bot**.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-03-create.png"
    alt="Opcja Create a New Bot w BotFather"
    width="360"
  />
</figure>

### 4. Wpisz nazwe i username

Podaj nazwe publiczna i username konczacy sie na `bot`.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-04-form.png"
    alt="Formularz BotFather z nazwa i username"
    width="360"
  />
</figure>

### 5. Skopiuj token

BotFather zwroci token podobny do `123456:ABCDE...`. Skopiuj go i zachowaj prywatnie.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-05-token.png"
    alt="BotFather pokazuje token bota"
    width="360"
  />
</figure>

### 6. Uruchom nowego bota

Wyszukaj nowego bota, otworz czat i kliknij **Start**.

## Podlacz bota do Vallax

1. W Vallax wejdz w **Profile -> Settings**.
2. Wlacz **Telegram token**.
3. Wklej token i kliknij **Save token**.
4. Alerty beda wysylane z Twojego prywatnego bota.

<figure>
  <img
    src="/images/guides/crear-bot-telegram/steps/step-06-vallax-config.png"
    alt="Ustawienia Vallax z opcja tokena Telegram"
    width="360"
  />
</figure>
