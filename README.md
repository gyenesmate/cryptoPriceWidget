# Crypto Price Widget

Egy könnyű, testreszabható kriptovaluta ár-widget, amely valós idejű árakat kér le a Coinbase API-ról, és jelenít meg a weboldaladon. Több widget is elhelyezhető egy oldalon, mindegyik külön konfigurációval rendelkezhet.

## Projekt struktúra

app/
widgets/
priceWidget/
defaultConfig.json
priceWidget.js
index.html
style.css
README.md

## Főbb funkciók

- Valós idejű kriptovaluta árak megjelenítése fiat pénznemekben (USD, EUR, stb.)
- Több widget támogatása egy oldalon
- Testreszabhatóság:
  - HTML `data-*` attribútumokkal
  - `defaultConfig.json` fájl segítségével
- Automatikus árfrissítés widgetenként
- Világos és sötét téma támogatása

## HTML data-* attribútumok

| Attribútum              | Jelentés                       | Példa |
| ----------------------- | ------------------------------ | ----- |
| `data-currency`         | Kriptovaluta szimbólum         | SOL   |
| `data-fiat`             | Fiat pénznem                   | USD   |
| `data-theme`            | Widget téma (`light` / `dark`) | dark  |

## CMS által generálandó HTML elemek

`
<div class="price-widget" data-currency="SOL" data-fiat="USD"></div>
<div class="price-widget" data-currency="BTC" data-fiat="EUR"></div>
`

## Preview elérése

A következő linken meglehet tekinteni a Widgetek működését: [link text](https://gyenesmate.github.io/cryptoPriceWidget/)