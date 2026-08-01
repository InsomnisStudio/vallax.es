---
title: Come creare il tuo primo avviso
description: Impara a configurare un avviso utile senza complicarlo inutilmente.
sidebar:
  order: 2
---

Creare un avviso in Vallax e semplice, ma alcuni campi meritano di essere capiti bene per fare in modo che le notifiche siano davvero utili.

Non serve complicare tutto dall'inizio. La cosa importante e capire a cosa serve ogni campo e usare solo cio di cui hai bisogno.

## Parole chiave

Questo e il campo piu importante.

Le parole chiave indicano a Vallax quale tipo di annuncio vuoi trovare. Puoi creare piu opzioni diverse all'interno dello stesso avviso.

### Come funzionano le opzioni

Ogni opzione viene controllata separatamente. Se anche una sola opzione corrisponde, l'annuncio viene considerato valido.

Dentro ogni opzione, le parole si scrivono nello stesso campo separate da virgole.

Per esempio:

- Opzione 1: `Nintendo, Switch`
- Opzione 2: `PlayStation 4`
- Opzione 3: `PS4`

In un'opzione come `Nintendo, Switch`, quello che stai dicendo a Vallax e semplicemente: voglio annunci in cui compaiano queste due parole.

Se un annuncio soddisfa una di queste opzioni, supera questo filtro.

### Importante su come viene fatta la corrispondenza

- Le parole chiave **non distinguono tra maiuscole e minuscole**.
- La corrispondenza **non e rigida sulla parola intera**.

Per esempio, se cerchi `tractor`, anche un testo come `extractor` puo essere considerato valido.

Se ti serve qualcosa di piu rigoroso, e qui che una **regex** puo avere senso.

### Dove vengono controllate

Le parole chiave non vengono controllate nello stesso modo su tutte le piattaforme:

- Su **Wallapop**, **Milanuncios** e **Todocoleccion** vengono controllate nel **titolo** e nella **descrizione**.
- Su **Vinted** non abbiamo il campo descrizione, quindi vengono controllate nel **titolo** e nel **brand**.

## Posizione

Questo campo ti permette di scegliere un'area e una distanza massima.

Per esempio, puoi chiedere annunci ad Alicante entro 50 km.

Questo ha senso quando vuoi comprare qualcosa vicino a te, vederla di persona o evitare spostamenti lunghi.

### Importante: Vinted

Su **Vinted** questo filtro non funziona allo stesso modo, perche la piattaforma non fornisce dati di posizione abbastanza precisi per un filtro affidabile sulla distanza.

Se scegli una distanza specifica, l'aspettativa normale e trovare annunci vicini. Per questo motivo questa opzione ha un valore limitato su Vinted.

## Categoria

La categoria puo aiutare a restringere la ricerca, anche se non e sempre il campo piu importante.

Il punto chiave qui e questo: **le categorie di Vinted non sono supportate al momento**. Per questo non le vedrai nel modulo per quel marketplace.

Non e un errore. Semplicemente questa opzione non e ancora disponibile su Vinted.

## Parole da escludere

Questo campo fa l'opposto delle parole chiave.

Serve a dire a Vallax di scartare gli annunci che contengono certe parole che non ti interessano.

Un caso tipico potrebbe essere cercare una console ma non volere annunci con parole come `controller`, `rotto`, `leggi` o `solo scatola`.

E un modo molto efficace per ridurre il rumore senza cambiare troppo il resto dell'avviso.

## Seguire utenti e ignorare utenti

Questi campi permettono di filtrare gli annunci in base al venditore.

- Se aggiungi utenti in **seguire utenti**, l'avviso si concentra su quei venditori.
- Se aggiungi utenti in **ignorare utenti**, i loro annunci vengono scartati.

E utile se conosci gia venditori che ti interessano o, al contrario, vuoi evitare account specifici.

## Regex

Una **regex** e un modo per cercare schemi di testo piu precisi.

Non serve per avvisi normali, ma puo aiutare quando le parole chiave non bastano.

Per esempio, puo essere utile per individuare varianti di modelli, schemi di nomi o formati di testo particolari.

Se vuoi provare le regex, **regex101** e un buon strumento. Se fai test li, usa il motore **Rust**.

## Campo IA

Questo campo serve a dare un'istruzione extra all'intelligenza artificiale di Vallax.

L'IA **non viene applicata a tutti gli annunci**. Prima passano i filtri normali dell'avviso. Solo dopo l'IA analizza gli annunci che hanno gia superato quei filtri.

Questo e importante, perche l'IA non sostituisce i filtri di base. Funziona come un livello aggiuntivo.

### Token IA

I **token IA** sono i crediti che Vallax utilizza per i suoi strumenti di intelligenza artificiale. Attualmente vengono utilizzati dal filtro IA degli avvisi: descrivi con un prompt cosa vuoi trovare e l'IA verifica piu nel dettaglio se ogni annuncio corrisponde.

Con Premium ricevi **25.000 token IA ogni mese**. Il saldo diminuisce man mano che utilizzi queste funzioni.

Per attivare un avviso con IA devi avere un saldo minimo di token. Se non ne hai abbastanza, **non potrai attivare quell'avviso IA anche se il tuo abbonamento Premium e ancora attivo**. Gli avvisi senza IA non richiedono questi token.

### Cosa analizza

L'IA puo analizzare:

- Fino alle **prime 3 foto** dell'annuncio.
- Il **titolo**.
- La **descrizione**, quando la piattaforma la fornisce.
- Su **Vinted**, anche il **brand**.

In base alla piattaforma, Vallax ha accesso a campi diversi.

### A cosa serve

L'IA e utile quando vuoi confermare qualcosa che non e sempre chiaro dalle sole parole chiave.

Esempio: il tuo avviso puo rilevare `PS4`, ma questo non garantisce che l'annuncio riguardi davvero una console. Potrebbe essere un controller, una scatola vuota o un accessorio.

In quel caso puoi aggiungere un'istruzione come questa:

`Voglio che sia una console PlayStation 4 completa, non un controller ne un accessorio.`

In questo modo l'IA usa testo e immagini per capire se l'annuncio e davvero quello che stai cercando.

### Cosa non ha senso chiedere all'IA

Di solito non ha senso chiedere all'IA di ripetere filtri che Vallax gestisce gia da solo, come il prezzo minimo o massimo.

L'IA funziona meglio come livello aggiuntivo di interpretazione, non come sostituto di regole gia esistenti.

## Configurazione consigliata per iniziare

Se e il tuo primo avviso, l'approccio piu pratico e questo:

1. Definisci bene le **parole chiave**.
2. Usa le **parole da escludere** per eliminare il rumore.
3. Aggiungi la **posizione** se vuoi annunci vicini.
4. Usa l'**IA** solo quando hai bisogno di confermare dettagli che il solo testo non chiarisce abbastanza.

Con questa base puoi gia creare avvisi molto precisi senza complicarli inutilmente.
