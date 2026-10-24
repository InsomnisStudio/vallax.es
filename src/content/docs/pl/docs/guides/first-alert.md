---
title: Jak utworzyć pierwsze wyszukiwanie
description: Dowiedz się, jak skonfigurować przydatne wyszukiwanie bez komplikacji.
sidebar:
  order: 2
---

Tworzenie wyszukiwania w Vallax jest proste, ale kilka pól warto dobrze zrozumieć, żeby powiadomienia były naprawdę przydatne.

Nie musisz od razu używać wszystkiego. Ważne, żeby wiedzieć, do czego służy każda część, i używać tylko tego, co potrzebne. Formularz ma tę samą kolejność.

## Nazwa

Służy tylko do rozpoznania wyszukiwania na liście. Nie wpływa na wyniki.

## Słowa kluczowe („Czego szukasz?”)

To najważniejsze pole. Mówi Vallax, jakiego ogłoszenia szukasz.

Wpisuj słowa jak w wyszukiwarce. Każde słowo staje się etykietą, a **ogłoszenie musi zawierać je wszystkie, w dowolnej kolejności**.

Jeśli potrzebujesz dokładnej frazy, wpisz ją **w cudzysłowie**: `"play station 2"`.

### Opcje: alternatywy w jednym wyszukiwaniu

Możesz dodać kilka **opcji**. Każda opcja jest sprawdzana osobno i wystarczy, że ogłoszenie spełni **jedną** z nich.

Na przykład:

- Opcja 1: `nintendo switch` → ogłoszenie musi zawierać *nintendo* **i** *switch*.
- Opcja 2: `konsola nintendo`
- Opcja 3: `"switch oled"`

Opcje przydają się do synonimów i różnych zapisów tego samego (`PS4`, `PlayStation 4`…).

Im więcej słów w jednej opcji, tym mniej ogłoszeń będzie pasować.

### Jak porównywany jest tekst

- Słowa kluczowe **nie rozróżniają wielkich i małych liter**.
- Dopasowanie **nie dotyczy wyłącznie całych słów**. Jeśli szukasz `tractor`, może pasować też `extractor`.

Jeśli potrzebujesz czegoś bardziej rygorystycznego, użyj cudzysłowu albo, w Pro, **regex**.

### Limit słów kluczowych

Łączna liczba słów kluczowych w wyszukiwaniu zależy od planu: **5 w Darmowym, 15 w Plus i 50 w Pro**.

## Platformy i kategorie

Wybierz, gdzie Vallax ma szukać: Wallapop, Vinted, Milanuncios i Todocoleccion. W planie **Darmowym** możesz wybrać **1 platformę** na wyszukiwanie; w **Plus** i **Pro** wszystkie.

**Kategoria** jest opcjonalna. Każda platforma ma własne drzewo kategorii. Używaj jej tylko wtedy, gdy wyszukiwanie zwraca wyniki z innego rodzaju produktów.

## Cena i lokalizacja

Oba pola są opcjonalne. Zostaw je puste, żeby niczego nie odrzucać.

- **Cena:** podaj maksimum albo zakres minimum–maksimum.
- **Lokalizacja:** wybierz obszar i maksymalny promień, np. Alicante w promieniu 50 km. Przydaje się, gdy chcesz kupić blisko, obejrzeć przedmiot osobiście lub uniknąć dalekich dojazdów.

Bardzo niska cena maksymalna lub mały promień oznaczają mniej powiadomień.

### Ważne: Vinted

W **Vinted** lokalizacja nie jest stosowana, bo platforma nie podaje wystarczająco dokładnej lokalizacji do pracy z odległościami. Nawet jeśli ją ustawisz, dostaniesz ogłoszenia spoza swojej okolicy.

## Więcej filtrów

### Bez tych słów

Działa odwrotnie niż słowa kluczowe: odrzuca ogłoszenia zawierające określone słowa.

Typowy przykład: szukasz konsoli, ale nie chcesz ogłoszeń ze słowami `pad`, `uszkodzona`, `na części` czy `puste pudełko`. To bardzo przydatny sposób na usunięcie szumu bez zmieniania reszty wyszukiwania.

### Sprzedawcy

- **Tylko od tych sprzedawców:** wyszukiwanie skupia się na tych użytkownikach.
- **Nigdy od tych sprzedawców:** ich ogłoszenia są odrzucane.

Przydatne, jeśli znasz już ciekawych sprzedawców albo chcesz unikać konkretnych kont. Jak znaleźć identyfikator sprzedawcy, opisuje [ten poradnik](/pl/guides/get-seller-identifier).

### Gdzie szukać w ogłoszeniu

Dla każdego filtra tekstowego (słowa, słowa do ignorowania, regex i regex do ignorowania) możesz wybrać, czy sprawdza **tytuł**, **opis** czy **oba**.

**Vinted** nie ma opisu, więc filtry są sprawdzane w **tytule** i **marce**.

## Regex (tylko Pro)

**Regex** pozwala szukać bardziej precyzyjnych wzorców tekstu. Nie jest potrzebny w zwykłych wyszukiwaniach, ale pomaga, gdy słowa kluczowe nie wystarczają: warianty nazw, modele czy formaty tekstu.

- **Własny regex:** ogłoszenie musi pasować do wzorca. Przykład: `^(Leica|Hasselblad).*(M[0-9]).*`
- **Regex do ignorowania:** odrzuca ogłoszenia pasujące do wzorca, nawet jeśli spełniają resztę. Przykład: `(?i)(replika|kopia|inspirowan[ya])`

Do testów przyda się strona **regex101**. Wybierz silnik **Rust**.

Regex to funkcja planu **Pro**. Jeśli przejdziesz na niższy plan, wyszukiwania z regex zostaną wstrzymane, dopóki ich nie edytujesz (zobacz [Plany](/pl/docs/guides/plans#zmiana-na-niższy-plan)).

## Filtr AI

To pole pozwala dać dodatkowe polecenie sztucznej inteligencji Vallax.

AI to **drugi filtr**: nie działa na wszystkie ogłoszenia. Najpierw działają Twoje słowa, cena, obszar i inne filtry, a dopiero potem AI sprawdza ogłoszenia, które już pasują, i odrzuca te, które nie spełniają polecenia. **Nigdy nie dodaje ogłoszeń**, których Twoje filtry by nie znalazły.

### Co analizuje

AI może sprawdzić:

- **Zdjęcia** ogłoszenia: sam wybierasz ile, od **0 do 10**. Przy 0 czyta tylko tekst.
- **Tytuł**.
- **Opis**, jeśli platforma go udostępnia.
- **Cenę**.
- W **Vinted** także **markę**.

### Do czego służy

AI przydaje się, gdy chcesz potwierdzić coś, czego same słowa kluczowe nie rozstrzygają.

Przykład: wyszukiwanie może wykryć `PS4`, ale to nie znaczy, że ogłoszenie dotyczy konsoli. Może to być pad, puste pudełko albo akcesorium. Wtedy możesz dodać polecenie:

`Chcę kompletną konsolę PlayStation 4, a nie pada ani akcesorium.`

AI użyje tekstu i zdjęć, żeby sprawdzić, czy ogłoszenie to naprawdę to, czego szukasz.

### Cena w kontekście

AI potrafi też powiązać cenę z zawartością ogłoszenia, czego nie wyrazi sama cena minimalna czy maksymalna:

`Akceptuj ogłoszenia do 40 €, jeśli zawierają gry; jeśli nie zawierają gier, akceptuj tylko do 20 €.`

### Tokeny AI

Każde ogłoszenie sprawdzone przez AI zużywa **tokeny AI**, niezależnie od tego, czy pasuje. Zużycie zależy głównie od liczby analizowanych zdjęć i długości ogłoszenia.

- Każdy plan, także **Darmowy**, może używać filtra AI, jeśli ma tokeny.
- Potrzebujesz **co najmniej 3 tokenów**, aby włączyć analizę AI w wyszukiwaniu.
- Gdy saldo spadnie do 0, filtr AI się wyłącza, ale wyszukiwanie dalej działa bez niego.

Żeby zużywać mniej, używaj konkretnych słów kluczowych, słów do ignorowania i zakresu cen: wtedy AI sprawdza tylko ogłoszenia, które naprawdę mogą Cię zainteresować.

Jak zdobyć tokeny (Pro, pakiety i sklep punktów): [Plany i tokeny AI](/pl/docs/guides/plans#tokeny-ai).

## Przetestuj wyszukiwanie przed zapisaniem

Dzięki **Zobacz ostatnie dopasowania** Vallax sprawdza filtr na ogłoszeniach z **ostatnich 24 godzin** i pokazuje:

- Ile byłoby dopasowań i mniej więcej ile powiadomień dziennie byś dostawał.
- Kilka przykładowych ogłoszeń (to już opublikowane ogłoszenia, nie powiadomienia: nie pojawią się na Twojej liście).

Jeśli jest ich za dużo, ustaw cenę maksymalną lub dodaj kolejne słowo. Jeśli nie ma żadnego, zwykle winne jest któreś słowo kluczowe albo zbyt restrykcyjna cena, obszar lub kategoria.

## Udostępnianie i import wyszukiwań

W akcjach wyszukiwania możesz wybrać **Udostępnij wyszukiwanie**: Vallax wygeneruje kod i skopiuje go do schowka. Odbiorca może użyć **Importuj wyszukiwanie**, przejrzeć je i zapisać.

Jeśli importowane wyszukiwanie korzysta z opcji Pro (np. regex), a nie masz Pro, musisz je usunąć, żeby zapisać wyszukiwanie.

## Rada na start

Przy pierwszym wyszukiwaniu najpraktyczniej jest:

1. Dobrze ustawić **słowa kluczowe** i dodać opcje dla synonimów.
2. Użyć **bez tych słów**, żeby usunąć niechciane ogłoszenia.
3. Dodać **cenę** i **lokalizację**, jeśli chcesz zawęzić wyniki.
4. **Przetestować wyszukiwanie**, żeby zobaczyć, ile powiadomień byś dostawał.
5. Użyć **AI**, gdy trzeba powiązać tekst, zdjęcia i cenę albo zastosować warunki, których nie wyrażą podstawowe filtry.

Tyle wystarczy, by tworzyć bardzo precyzyjne wyszukiwania bez zbędnych komplikacji.
