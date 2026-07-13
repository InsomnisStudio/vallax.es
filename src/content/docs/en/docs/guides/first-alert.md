---
title: How to create your first alert
description: Learn how to configure a useful alert without overcomplicating it.
sidebar:
  order: 2
---

Creating an alert in Vallax is simple, but there are a few fields worth understanding so that the notifications are actually useful.

You do not need to make everything complex from the start. The important part is understanding what each field does and using only what you need.

## Keywords

This is the most important field.

Keywords tell Vallax what type of listing you want to find. You can create several different options inside the same alert.

### How options work

Each option is checked separately. If just one option matches, the listing is considered valid.

Inside each option, the words are written in the same input separated by commas.

For example:

- Option 1: `Nintendo, Switch`
- Option 2: `PlayStation 4`
- Option 3: `PS4`

In an option like `Nintendo, Switch`, what you are telling Vallax is simply: I want listings where those two words match.

If a listing matches any of those options, it passes this filter.

### Important about text matching

- Keywords are **not case-sensitive**.
- Matching is **not strict by full word**.

For example, if you search for `tractor`, a text like `extractor` may also be considered valid.

If you need stricter behavior, that is where **regex** can make sense.

### Where keywords are checked

Keywords are not checked exactly the same way on every marketplace:

- On **Wallapop**, **Milanuncios**, and **Todocoleccion**, they are checked in the **title** and **description**.
- On **Vinted**, we do not have the description field, so they are checked in the **title** and **brand**.

## Location

This field lets you choose an area and a maximum distance.

For example, you can say you want listings in Alicante within 50 km.

This makes sense when you want something close to you, want to inspect it in person, or want to avoid long travel.

### Important: Vinted

On **Vinted**, this filter does not work the same way because that platform does not expose precise enough location data for reliable distance filtering.

If you choose a specific distance, the usual expectation is to find nearby listings. That is why this setting has limited value on Vinted.

## Category

Category can help narrow your search, although it is not always the most important field.

The key point here is this: **Vinted categories are not supported right now**. That is why you will not see categories for that marketplace in the form.

That is not an error. It is simply not available on Vinted at the moment.

## Excluded words

This field does the opposite of keywords.

It tells Vallax to discard listings that contain words you do not want.

A typical case would be searching for a console but excluding listings that mention `controller`, `broken`, `read`, or `box only`.

It is a very effective way to reduce noise without changing the rest of the alert too much.

## Follow users and ignore users

These fields let you filter listings based on the seller.

- If you add users to **follow users**, the alert focuses on those sellers.
- If you add users to **ignore users**, their listings are discarded.

This is useful if you already know sellers you care about or, on the contrary, want to avoid specific accounts.

## Regex

A **regex** is a way to search for more specific text patterns.

You do not need it for normal alerts, but it can help when keywords are not precise enough.

For example, it can be useful for detecting specific model variants, naming patterns, or text formats.

If you want to test regex, **regex101** is a useful website. If you test there, use the **Rust** engine.

## AI field

This field gives Vallax AI an extra instruction.

AI is **not applied to every listing**. First, the normal filters of the alert run. Only after that does AI review the listings that already matched.

That is important because AI does not replace your basic filters. It works as an extra layer.

### What it analyzes

AI can review:

- Up to the **first 3 photos** of the listing.
- The **title**.
- The **description**, when the marketplace provides it.
- On **Vinted**, also the **brand**.

Depending on the marketplace, Vallax has access to different fields.

### What it is useful for

AI is useful when you want to confirm something that is not always obvious from keywords alone.

Example: your alert may detect `PS4`, but that does not guarantee the listing is actually a console. It could be a controller, an empty box, or an accessory.

In that case, you can add an instruction like this:

`I want it to be a complete PlayStation 4 console, not a controller or accessory.`

That way, AI uses both the text and the images to decide whether the listing is really what you want.

### What you do not need to ask AI for

It usually does not make sense to ask AI to repeat filters that Vallax already handles on its own, such as minimum or maximum price.

AI works better as an extra interpretation layer, not as a replacement for rules that already exist.

## Recommended setup for your first alert

If this is your first alert, the most practical approach is:

1. Define your **keywords** properly.
2. Use **excluded words** to remove noisy listings.
3. Add **location** if you want listings near you.
4. Use **AI** only when you need to confirm details that text alone cannot make clear.

With that setup, you can already build very precise alerts without making them unnecessarily complex.
