---
title: Come creare la tua prima ricerca
description: Impara a configurare una ricerca utile senza complicarti.
sidebar:
  order: 2
---

Creare una ricerca in Vallax è semplice, ma alcuni campi vanno capiti bene perché le notifiche siano davvero utili.

Non serve usare tutto fin dall'inizio. L'importante è sapere a cosa serve ogni parte e usare solo il necessario. Il modulo segue questo stesso ordine.

## Nome

Serve solo a riconoscere la ricerca nella tua lista. Non influisce sui risultati.

## Parole chiave («Cosa cerchi?»)

È il campo più importante. Dice a Vallax che tipo di annuncio vuoi trovare.

Scrivi le parole come in un motore di ricerca. Ogni parola diventa un'etichetta e **l'annuncio deve contenerle tutte, in qualsiasi ordine**.

Se ti serve una frase esatta, scrivila **tra virgolette**: `"play station 2"`.

### Opzioni: alternative nella stessa ricerca

Puoi aggiungere più **opzioni**. Ogni opzione viene controllata separatamente e basta che ne venga soddisfatta **una** perché l'annuncio superi il filtro.

Per esempio:

- Opzione 1: `nintendo switch` → l'annuncio deve contenere *nintendo* **e** *switch*.
- Opzione 2: `console nintendo`
- Opzione 3: `"switch oled"`

Le opzioni servono per i sinonimi e per i diversi modi di scrivere la stessa cosa (`PS4`, `PlayStation 4`…).

Più parole metti in una stessa opzione, meno annunci corrisponderanno.

### Come viene confrontato il testo

- Le parole chiave **non distinguono tra maiuscole e minuscole**.
- La corrispondenza **non è rigida sulla parola intera**. Se cerchi `tractor`, può corrispondere anche `extractor`.

Se ti serve qualcosa di più rigoroso, usa le virgolette o, con Pro, una **regex**.

### Limite di parole chiave

Il numero totale di parole chiave per ricerca dipende dal piano: **5 con Gratis, 15 con Plus e 50 con Pro**.

## Piattaforme e categorie

Scegli dove deve cercare Vallax: Wallapop, Vinted, Milanuncios e Todocoleccion. Con il piano **Gratis** puoi scegliere **1 piattaforma** per ricerca; con **Plus** e **Pro**, tutte.

La **categoria** è facoltativa. Ogni piattaforma ha il suo albero di categorie. Usala solo se la ricerca ti porta risultati di un altro tipo di prodotto.

## Prezzo e posizione

Entrambi sono facoltativi. Lasciali vuoti per non scartare nulla.

- **Prezzo:** indica un massimo o un intervallo minimo–massimo.
- **Posizione:** scegli una zona e un raggio massimo, per esempio Alicante entro 50 km. Ha senso quando vuoi comprare vicino, vedere l'articolo di persona o evitare lunghi spostamenti.

Un prezzo massimo o un raggio molto stretti significano meno notifiche.

### Importante: Vinted

Su **Vinted** la posizione non si applica, perché la piattaforma non offre una localizzazione abbastanza precisa per lavorare con le distanze. Riceverai annunci fuori dalla tua zona anche se la configuri.

## Altri filtri

### Senza queste parole

Fa il contrario delle parole chiave: scarta gli annunci che contengono certe parole.

Un caso tipico è cercare una console senza annunci che dicono `controller`, `rotta`, `per ricambi` o `scatola vuota`. È un modo molto utile per eliminare il rumore senza toccare il resto della ricerca.

### Venditori

- **Solo da questi venditori:** la ricerca si concentra su quegli utenti.
- **Mai da questi venditori:** i loro annunci vengono scartati.

Utile se conosci già venditori interessanti o, al contrario, vuoi evitare account specifici. Per trovare l'identificativo di un venditore, consulta [questa guida](/it/guides/get-seller-identifier).

### Dove guardare nell'annuncio

Per ogni filtro di testo (parole, parole da ignorare, regex e regex da ignorare) puoi scegliere se controlla il **titolo**, la **descrizione** o **entrambi**.

**Vinted** non ha descrizione, quindi i filtri si applicano al **titolo** e al **marchio**.

## Regex (solo Pro)

Una **regex** permette di cercare schemi di testo più precisi. Non serve per le ricerche normali, ma può aiutare quando le parole chiave non bastano: varianti di nomi, modelli o formati di testo.

- **Regex personalizzata:** l'annuncio deve corrispondere allo schema. Esempio: `^(Leica|Hasselblad).*(M[0-9]).*`
- **Regex da ignorare:** scarta gli annunci che corrispondono allo schema anche se soddisfano il resto. Esempio: `(?i)(replica|copia|ispirat[oa])`

Per fare prove, **regex101** è un sito utile. Usa il motore **Rust**.

Le regex sono una funzione del piano **Pro**. Se passi a un piano inferiore, le ricerche con regex vengono messe in pausa finché non le modifichi (vedi [Piani](/it/docs/guides/plans#se-passi-a-un-piano-inferiore)).

## Filtro IA

Questo campo serve a dare un'istruzione in più all'intelligenza artificiale di Vallax.

L'IA è un **secondo filtro**: non si applica a tutti gli annunci. Prima passano le tue parole, prezzo, zona e gli altri filtri e, solo dopo, l'IA controlla gli annunci che hanno già corrisposto e scarta quelli che non rispettano la tua istruzione. **Non aggiunge mai annunci** che i tuoi filtri non avrebbero trovato.

### Cosa analizza

L'IA può controllare:

- Le **foto** dell'annuncio: scegli tu quante, da **0 a 10**. Con 0 legge solo il testo.
- Il **titolo**.
- La **descrizione**, quando la piattaforma la fornisce.
- Il **prezzo**.
- Su **Vinted**, anche il **marchio**.

### A cosa serve

L'IA è utile quando vuoi confermare qualcosa che le parole chiave da sole non chiariscono.

Esempio: la tua ricerca può rilevare `PS4`, ma non significa che l'annuncio sia una console. Potrebbe essere un controller, una scatola vuota o un accessorio. In quel caso puoi aggiungere un'istruzione come questa:

`Voglio una console PlayStation 4 completa, non un controller né un accessorio.`

Così l'IA usa testo e immagini per verificare se l'annuncio è davvero ciò che cerchi.

### Usare il prezzo con il contesto

L'IA può anche mettere in relazione il prezzo con ciò che include l'annuncio, cosa che un prezzo minimo o massimo non può esprimere:

`Accetta annunci fino a 40 € se includono giochi; se non includono giochi, accetta solo fino a 20 €.`

### Token IA

Ogni annuncio controllato dall'IA consuma **token IA**, che corrisponda o no. Il consumo dipende soprattutto dal numero di foto analizzate e dalla lunghezza dell'annuncio.

- Qualsiasi piano, anche **Gratis**, può usare il filtro IA se ha token.
- Servono **almeno 3 token** per attivare l'analisi IA in una ricerca.
- Se il saldo arriva a 0, il filtro IA si disattiva, ma la ricerca continua a funzionare senza.

Per consumare meno, usa parole chiave precise, parole da ignorare e un intervallo di prezzo: così l'IA controlla solo gli annunci che possono davvero interessarti.

Come ottenere token (Pro, pacchetti e negozio punti): [Piani e token IA](/it/docs/guides/plans#token-ia).

## Prova la ricerca prima di salvarla

Con **Vedi ultime corrispondenze** Vallax confronta il filtro con gli annunci pubblicati nelle **ultime 24 ore** e ti dice:

- Quante corrispondenze ci sarebbero state e quante notifiche al giorno riceveresti, più o meno.
- Alcuni annunci di esempio (sono annunci già pubblicati, non notifiche: non compariranno nella tua lista).

Se sono troppi, metti un prezzo massimo o aggiungi un'altra parola. Se non ce n'è nessuno, di solito il problema è una parola chiave, oppure prezzo, zona o categoria troppo restrittivi.

## Condividere e importare ricerche

Dalle azioni di una ricerca puoi **Condividere la ricerca**: Vallax genera un codice e lo copia negli appunti. Chi lo riceve può usare **Importa ricerca**, controllarla e salvarla.

Se la ricerca importata usa opzioni Pro (come le regex) e non hai Pro, dovrai rimuoverle per salvarla.

## Consiglio per iniziare

Se è la tua prima ricerca, la cosa più pratica è:

1. Definire bene le **parole chiave** e aggiungere opzioni per i sinonimi.
2. Usare **senza queste parole** per togliere gli annunci fastidiosi.
3. Aggiungere **prezzo** e **posizione** se vuoi restringere.
4. **Provare la ricerca** per vedere quante notifiche riceveresti.
5. Usare l'**IA** quando devi mettere in relazione testo, foto e prezzo o applicare condizioni che i filtri base non possono esprimere.

Con questo puoi già creare ricerche molto precise senza complicarti troppo.
