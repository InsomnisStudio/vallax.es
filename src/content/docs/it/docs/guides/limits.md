---
title: Limiti e pause di sicurezza
description: Capisci perche un avviso puo smettere temporaneamente di inviare notifiche.
sidebar:
  order: 3
---

C'e un punto importante da conoscere per evitare sorprese: Vallax applica alcuni limiti di sicurezza per impedire che un avviso generi troppe notifiche in troppo poco tempo.

Non e un bug. E una protezione per mantenere stabile il sistema.

## Limite per le notifiche normali

Un avviso standard ha un limite di **240 notifiche al minuto**.

Se uno dei tuoi avvisi supera questo ritmo, Vallax **fermera temporaneamente tutti i tuoi avvisi**.

Durante quel periodo:

- Anche se li riattivi, **non riceverai notifiche**.
- Dovrai aspettare **1 minuto** prima che tornino a funzionare normalmente.

## Limite per gli avvisi con IA

Gli avvisi che usano l'IA hanno un limite piu rigido: **6 analisi al minuto**.

Se l'analisi con IA supera 6 esecuzioni in un minuto, Vallax **disattivera tutti i tuoi avvisi con IA**.

In quel caso:

- Anche se li riattivi, **non riceverai notifiche**.
- Dovrai aspettare **2 minuti** prima che tornino a funzionare.

## Cosa significa in pratica

Se un avviso raggiunge spesso questi limiti, di solito significa che e troppo ampio.

Per esempio:

- Parole chiave troppo generiche.
- Pochi filtri.
- IA attivata su avvisi che lasciano passare ancora troppi annunci.

## Consiglio

Se un avviso si blocca spesso, la cosa migliore e renderlo piu preciso:

- Affina meglio le **parole chiave**.
- Aggiungi **parole da escludere** per ridurre il rumore.
- Usa l'**IA** solo quando e davvero necessaria.

Piu un avviso e preciso, piu utili saranno le notifiche e meno probabilita ci saranno di raggiungere questi limiti.
