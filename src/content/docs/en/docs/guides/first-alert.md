---
title: How to create your first search
description: Learn how to set up a useful search without overcomplicating it.
sidebar:
  order: 2
---

Creating a search in Vallax is simple, but a few fields are worth understanding so your notifications are actually useful.

You do not need to use everything from the start. What matters is knowing what each part does and using only what you need. The form follows this same order.

## Name

It only helps you recognise the search in your list. It does not affect results.

## Keywords ("What are you looking for?")

This is the most important field. It tells Vallax what kind of listing you want to find.

Type the words as you would in a search engine. Each word becomes a tag and **the listing must contain all of them, in any order**.

If you need an exact phrase, put it **in quotes**: `"play station 2"`.

### Options: alternatives within the same search

You can add several **options**. Each option is checked separately, and a listing only needs to match **one** of them to pass.

For example:

- Option 1: `nintendo switch` → the listing must contain *nintendo* **and** *switch*.
- Option 2: `nintendo console`
- Option 3: `"switch oled"`

Options are useful for synonyms and different ways of writing the same thing (`PS4`, `PlayStation 4`…).

The more words you put in a single option, the fewer listings will match.

### How text matching works

- Keywords are **not case-sensitive**.
- Matching is **not strict by whole word**. If you search for `tractor`, `extractor` may also match.

If you need something stricter, use quotes or, on Pro, a **regex**.

### Keyword limit

The total number of keywords per search depends on your plan: **5 on Free, 15 on Plus and 50 on Pro**.

## Platforms and categories

Choose where Vallax should search: Wallapop, Vinted, Milanuncios and Todocoleccion. On the **Free** plan you can pick **1 platform** per search; on **Plus** and **Pro**, all of them.

The **category** is optional. Each platform has its own category tree. Use it only if the search brings you results for a different type of product.

## Price and location

Both are optional. Leave them empty to discard nothing.

- **Price:** set a maximum or a minimum–maximum range.
- **Location:** choose an area and a maximum radius, for example Alicante within 50 km. Useful when you want to buy nearby, see the item in person or avoid long trips.

A very tight maximum price or radius means fewer notifications.

### Important: Vinted

On **Vinted** location is not applied, because the platform does not provide a precise enough location to work with distances. You will still get listings outside your area even if you set it.

## More filters

### Without these words

It does the opposite of keywords: it discards listings that contain certain words.

A typical case is searching for a console without listings that say `controller`, `broken`, `for parts` or `empty box`. It is a very useful way to remove noise without touching the rest of the search.

### Sellers

- **Only from these sellers:** the search focuses on those users.
- **Never from these sellers:** their listings are discarded.

Useful if you already know sellers you like or, on the contrary, want to avoid specific accounts. If you do not know how to find a seller's identifier, see [this guide](/en/guides/get-seller-identifier).

### Where to look in the listing

For each text filter (words, ignored words, regex and ignored regex) you can choose whether it checks the **title**, the **description** or **both**.

**Vinted** has no description, so filters are checked against the **title** and the **brand**.

## Regex (Pro only)

A **regex** is a way to search for more specific text patterns. You do not need it for normal searches, but it can help when keywords fall short: name variants, models or text formats.

- **Custom regex:** the listing must match the pattern. Example: `^(Leica|Hasselblad).*(M[0-9]).*`
- **Regex to ignore:** discards listings that match the pattern even if they match everything else. Example: `(?i)(replica|copy|inspired)`

For testing, **regex101** is a useful site. Use the **Rust** flavour.

Regex is a **Pro** feature. If you downgrade, searches with regex are paused until you edit them (see [Plans](/en/docs/guides/plans#if-you-downgrade)).

## AI filter

This field lets you give an extra instruction to Vallax's artificial intelligence.

The AI is a **second filter**: it is not applied to every listing. Your words, price, area and other filters are applied first and, only then, the AI reviews the listings that already matched and discards the ones that do not follow your instruction. It **never adds listings** your filters would not have found.

### What it analyses

The AI can review:

- The listing **photos**: you choose how many, from **0 to 10**. With 0 it only reads the text.
- The **title**.
- The **description**, when the platform provides it.
- The **price**.
- On **Vinted**, also the **brand**.

### What it is for

The AI is useful when you want to confirm something that keywords alone do not make clear.

Example: your search may detect `PS4`, but that does not mean the listing is a console. It could be a controller, an empty box or an accessory. In that case you can add an instruction like this:

`I want a complete PlayStation 4 console, not a controller or an accessory.`

The AI then uses the text and images to check whether the listing is really what you want.

### Using price with context

The AI can also relate the price to what the listing includes, something a minimum or maximum price cannot express:

`Accept listings up to €40 if they include games; if they do not include games, accept only up to €20.`

### AI tokens

Every listing the AI reviews uses **AI tokens**, whether it matches or not. The cost depends mainly on the number of photos analysed and the length of the listing.

- Any plan, including **Free**, can use the AI filter if it has tokens.
- You need **at least 3 tokens** to turn on AI analysis in a search.
- If your balance reaches 0, the AI filter is turned off, but the search keeps working without it.

To spend less, use specific keywords, ignored words and a price range: that way the AI only reviews listings that could really interest you.

How to get tokens (Pro, packs and the points shop) is explained in [Plans and AI tokens](/en/docs/guides/plans#ai-tokens).

## Test the search before saving it

With **See latest matches** Vallax checks your filter against the listings published in the **last 24 hours** and tells you:

- How many matches there would have been and roughly how many notifications per day you would get.
- Some example listings (these are already-published listings, not notifications: they will not appear in your list).

If there are too many, set a maximum price or add another word. If there are none, the usual cause is a keyword, or a price, area or category that is too strict.

## Share and import searches

From a search's actions you can **Share search**: Vallax generates a code and copies it to the clipboard. Whoever receives it can use **Import search**, review it and save it.

If the imported search uses Pro options (such as regex) and you are not on Pro, you will need to remove them to save it.

## Recommendation to get started

If this is your first search, the most practical approach is:

1. Define your **keywords** well and add options for synonyms.
2. Use **without these words** to remove annoying listings.
3. Add **price** and **location** if you want to narrow it down.
4. **Test the search** to see how many notifications you would get.
5. Use **AI** when you need to relate text, photos and price, or apply conditions basic filters cannot express.

With that you can already build quite precise searches without overcomplicating things.
