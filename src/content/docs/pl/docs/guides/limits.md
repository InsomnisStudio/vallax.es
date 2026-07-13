---
title: Limity i przerwy bezpieczenstwa
description: Zrozum, dlaczego alert moze tymczasowo przestac wysylac powiadomienia.
sidebar:
  order: 3
---

Jest jedna wazna rzecz, o ktorej warto wiedziec, zeby uniknac niespodzianek: Vallax ma limity bezpieczenstwa, aby alert nie generowal zbyt wielu powiadomien w bardzo krotkim czasie.

To nie jest blad. To zabezpieczenie, ktore ma utrzymac stabilnosc systemu.

## Limit zwyklych powiadomien

Standardowy alert ma limit **240 powiadomien na minute**.

Jesli jeden z twoich alertow przekroczy to tempo, Vallax **tymczasowo zatrzyma wszystkie twoje alerty**.

W tym czasie:

- Nawet jesli je ponownie wlaczysz, **nie bedziesz otrzymywac powiadomien**.
- Bedziesz musial odczekac **1 minute**, zanim znow zaczna dzialac normalnie.

## Limit alertow z AI

Alerty korzystajace z AI maja ostrzejszy limit: **6 analiz na minute**.

Jesli analiza AI uruchomi sie wiecej niz 6 razy w ciagu minuty, Vallax **wylaczy wszystkie twoje alerty z AI**.

W takim przypadku:

- Nawet jesli je ponownie wlaczysz, **nie bedziesz otrzymywac powiadomien**.
- Bedziesz musial odczekac **2 minuty**, zanim znow zaczna dzialac.

## Co to oznacza w praktyce

Jesli alert czesto dobija do tych limitow, zwykle oznacza to, ze jest zbyt szeroki.

Na przyklad:

- Zbyt ogolne slowa kluczowe.
- Za malo filtrow.
- Wlaczone AI w alercie, ktory nadal przepuszcza zbyt wiele ogloszen.

## Rekomendacja

Jesli alert czesto sie zatrzymuje, najlepiej go doprecyzowac:

- Lepiej dopracuj **slowa kluczowe**.
- Dodaj **slowa do wykluczenia**, aby ograniczyc szum.
- Uzywaj **AI** tylko wtedy, gdy jest to rzeczywiscie potrzebne.

Im bardziej precyzyjny jest alert, tym bardziej uzyteczne beda powiadomienia i tym mniejsze ryzyko osiagniecia tych limitow.
