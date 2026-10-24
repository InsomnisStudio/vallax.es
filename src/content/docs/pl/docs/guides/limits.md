---
title: Limity i przerwy bezpieczeństwa
description: Zrozum, dlaczego wyszukiwanie może tymczasowo przestać wysyłać powiadomienia.
sidebar:
  order: 6
---

Warto wiedzieć jedną ważną rzecz: Vallax ma limity bezpieczeństwa, które zapobiegają generowaniu przez Twoje konto zbyt wielu powiadomień w bardzo krótkim czasie.

To nie błąd. To ochrona przed nietypowym zachowaniem, która utrzymuje stabilność systemu. Te limity są **takie same w każdym planie**.

## Globalny limit powiadomień

Twoje konto ma globalny limit **240 powiadomień na minutę**.

Oznacza to, że łącznie wszystkie Twoje wyszukiwania, z AI lub bez, nie mogą przekroczyć tego tempa.

Jeśli razem przekroczą limit, Vallax **tymczasowo zatrzyma wszystkie Twoje wyszukiwania**. W tym czasie:

- Nawet jeśli je ponownie włączysz, **nie dostaniesz powiadomień**.
- Musisz odczekać **1 minutę**, aż znów zaczną normalnie działać.

## Limit wyszukiwań z AI

Wyszukiwania z AI mają surowszy limit globalny: **20 analiz na minutę**.

Oznacza to, że łącznie wszystkie Twoje wyszukiwania z AI nie mogą przekroczyć tego progu.

Jeśli analiza AI uruchomi się więcej niż 20 razy w ciągu minuty, Vallax **wyłączy wszystkie Twoje wyszukiwania korzystające z AI**. Wtedy:

- Nawet jeśli je ponownie włączysz, **nie dostaniesz powiadomień**.
- Musisz odczekać **2 minuty**, aż znów zaczną działać.

## Wstrzymane przez plan

To coś innego niż przerwy bezpieczeństwa. Jeśli widzisz wyszukiwanie oznaczone jako **Wstrzymane przez plan**, Twój obecny plan go nie obejmuje: masz więcej aktywnych wyszukiwań, niż pozwala plan, albo korzysta ono z regex, słów kluczowych lub platform ponad limit.

Możesz je edytować, żeby mieściło się w planie, albo przejść na wyższy plan. Zobacz [Zmiana na niższy plan](/pl/docs/guides/plans#zmiana-na-niższy-plan).

## Co to oznacza w praktyce

Jeśli wyszukiwanie uruchamia się zbyt często, zwykle jest zbyt szerokie. Na przykład:

- Bardzo ogólne słowa kluczowe.
- Mało filtrów.
- AI użyte w wyszukiwaniach, które wciąż przepuszczają zbyt wiele ogłoszeń.

## Rekomendacja

Jeśli wyszukiwanie często się zatrzymuje, zrób je bardziej precyzyjnym:

- Doprecyzuj **słowa kluczowe**.
- Dodaj **słowa do ignorowania** i **cenę maksymalną**, żeby usunąć szum.
- Użyj **Zobacz ostatnie dopasowania**, żeby przed zapisaniem sprawdzić, ile powiadomień dziennie generuje.
- Używaj **AI** tylko wtedy, gdy naprawdę jest potrzebne.

Im lepiej dopracowane wyszukiwanie, tym bardziej przydatne powiadomienia i tym mniejsza szansa na osiągnięcie tych limitów.
