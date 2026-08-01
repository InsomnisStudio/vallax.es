---
title: Jak utworzyc pierwszy alert
description: Dowiedz sie, jak skonfigurowac przydatny alert bez niepotrzebnego komplikowania.
sidebar:
  order: 2
---

Utworzenie alertu w Vallax jest proste, ale kilka pol warto dobrze zrozumiec, aby powiadomienia byly naprawde przydatne.

Nie musisz komplikowac wszystkiego od samego poczatku. Najwazniejsze jest zrozumienie, do czego sluzy kazde pole, i uzywanie tylko tego, czego potrzebujesz.

## Slowa kluczowe

To najwazniejsze pole.

Slowa kluczowe mowia Vallax, jakiego typu ogloszenia szukasz. W ramach jednego alertu mozesz utworzyc kilka roznych opcji.

### Jak dzialaja opcje

Kazda opcja jest sprawdzana osobno. Jesli dopasuje sie choc jedna, ogloszenie jest uznawane za poprawne.

W kazdej opcji slowa wpisuje sie w tym samym polu, oddzielajac je przecinkami.

Na przyklad:

- Opcja 1: `Nintendo, Switch`
- Opcja 2: `PlayStation 4`
- Opcja 3: `PS4`

W opcji takiej jak `Nintendo, Switch` mowisz po prostu Vallaxowi: chce ogloszenia, w ktorych pojawiaja sie te dwa slowa.

Jesli ogloszenie pasuje do ktorejkolwiek z tych opcji, przechodzi ten filtr.

### Wazne o tym, jak dziala dopasowanie tekstu

- Slowa kluczowe **nie rozrozniaja wielkich i malych liter**.
- Dopasowanie **nie jest scisle ograniczone do calego slowa**.

Na przyklad, jesli szukasz `tractor`, tekst taki jak `extractor` tez moze zostac uznany za poprawny.

Jesli potrzebujesz bardziej scislego zachowania, wtedy warto rozwazyc **regex**.

### Gdzie sa sprawdzane

Slowa kluczowe nie sa sprawdzane identycznie na wszystkich platformach:

- Na **Wallapop**, **Milanuncios** i **Todocoleccion** sa sprawdzane w **tytule** i **opisie**.
- Na **Vinted** nie mamy pola opisu, wiec sa sprawdzane w **tytule** i **marce**.

## Lokalizacja

To pole pozwala ustawic obszar i maksymalny dystans.

Na przyklad mozesz ustawic ogloszenia w Alicante w promieniu 50 km.

Ma to sens, gdy chcesz kupic cos blisko siebie, obejrzec to osobiscie albo uniknac dlugich dojazdow.

### Wazne: Vinted

Na **Vinted** ten filtr nie dziala tak samo, poniewaz platforma nie udostepnia wystarczajaco precyzyjnych danych lokalizacyjnych do wiarygodnego filtrowania po odleglosci.

Jesli wybierasz konkretny dystans, naturalnym oczekiwaniem sa pobliskie ogloszenia. Dlatego ta opcja ma ograniczona wartosc na Vinted.

## Kategoria

Kategoria moze pomoc zawezic wyszukiwanie, chociaz nie zawsze jest najwazniejszym polem.

Najwazniejsze jest to: **kategorie Vinted nie sa obecnie obslugiwane**. Dlatego w formularzu dla tej platformy ich nie zobaczysz.

To nie jest blad. Ta opcja po prostu nie jest jeszcze dostepna na Vinted.

## Slowa do wykluczenia

To pole dziala odwrotnie niz slowa kluczowe.

Pozwala powiedziec Vallax, aby odrzucal ogloszenia zawierajace slowa, ktorych nie chcesz.

Typowy przypadek to szukanie konsoli, ale bez ogloszen zawierajacych `pad`, `uszkodzona`, `czytaj` albo `sama pudelko`.

To bardzo skuteczny sposob na ograniczenie szumu bez duzych zmian w reszcie alertu.

## Obserwuj uzytkownikow i ignoruj uzytkownikow

Te pola pozwalaja filtrowac ogloszenia wedlug sprzedawcy.

- Jesli dodasz kogos do **obserwowanych uzytkownikow**, alert skupi sie na tych sprzedawcach.
- Jesli dodasz kogos do **ignorowanych uzytkownikow**, jego ogloszenia beda odrzucane.

To przydatne, gdy znasz juz sprzedawcow, ktorzy cie interesuja, albo przeciwnie, chcesz uniknac konkretnych kont.

## Regex

**Regex** to sposob wyszukiwania bardziej precyzyjnych wzorcow tekstu.

Nie jest potrzebny w zwyklych alertach, ale moze pomoc, gdy same slowa kluczowe nie wystarczaja.

Na przyklad moze sluzyc do wykrywania konkretnych wariantow modeli, schematow nazewnictwa albo formatow tekstu.

Jesli chcesz testowac regex, przydatna strona jest **regex101**. Jesli tam probujesz, uzyj silnika **Rust**.

## Pole AI

To pole sluzy do dodania dodatkowej instrukcji dla sztucznej inteligencji Vallax.

AI **nie jest uruchamiane dla wszystkich ogloszen**. Najpierw dzialaja zwykle filtry alertu. Dopiero potem AI analizuje ogloszenia, ktore juz przeszly wstepne dopasowanie.

To wazne, bo AI nie zastepuje podstawowych filtrow. Dziala jako dodatkowa warstwa.

### Tokeny AI

**Tokeny AI** to kredyty wykorzystywane przez Vallax do narzedzi sztucznej inteligencji. Obecnie korzysta z nich filtr AI w alertach: opisujesz w poleceniu, czego szukasz, a AI dokladniej sprawdza, czy dane ogloszenie pasuje.

Premium zapewnia **25 000 tokenow AI co miesiac**. Saldo zmniejsza sie podczas korzystania z tych funkcji.

Aby aktywowac alert z AI, musisz miec minimalne saldo tokenow. Jesli tokenow jest za malo, **nie bedzie mozna aktywowac alertu AI, nawet gdy subskrypcja Premium pozostaje aktywna**. Alerty bez AI nie wymagaja tych tokenow.

### Co analizuje

AI moze analizowac:

- Do **3 pierwszych zdjec** ogloszenia.
- **Tytul**.
- **Opis**, jesli platforma go udostepnia.
- Na **Vinted** takze **marke**.

W zaleznosci od platformy Vallax ma dostep do roznych pol.

### Do czego sie przydaje

AI jest przydatne, gdy chcesz potwierdzic cos, czego nie da sie zawsze jednoznacznie ustalic samymi slowami kluczowymi.

Przyklad: twoj alert moze wykrywac `PS4`, ale to nie znaczy, ze ogloszenie dotyczy samej konsoli. Moze to byc pad, puste pudelko albo akcesorium.

W takim przypadku mozesz dodac instrukcje taka jak:

`Chce, aby to byla kompletna konsola PlayStation 4, a nie pad ani akcesorium.`

Dzieki temu AI wykorzysta tekst i zdjecia, aby sprawdzic, czy ogloszenie rzeczywiscie odpowiada temu, czego szukasz.

### O co nie trzeba prosic AI

Zwykle nie ma sensu prosic AI o powtarzanie filtrow, ktore Vallax juz obsluguje samodzielnie, takich jak cena minimalna lub maksymalna.

AI dziala najlepiej jako dodatkowa warstwa interpretacji, a nie zamiennik istniejacych regu.

## Polecana konfiguracja na start

Jesli to twoj pierwszy alert, najbardziej praktyczne podejscie jest takie:

1. Dobrze ustaw **slowa kluczowe**.
2. Uzyj **slow do wykluczenia**, aby usunac szum.
3. Dodaj **lokalizacje**, jesli chcesz ogloszenia blisko siebie.
4. Uzywaj **AI** tylko wtedy, gdy musisz potwierdzic szczegoly, ktorych sam tekst nie wyjasnia wystarczajaco dobrze.

Taki zestaw pozwala juz budowac bardzo precyzyjne alerty bez niepotrzebnego komplikowania.
