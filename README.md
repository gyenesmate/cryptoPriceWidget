# Crypto Price Widget

Egy könnyű, testreszabható kriptovaluta ár-widget, amely valós idejű árakat kér le a Coinbase API-ról, és jelenít meg a weboldaladon. Több widget is elhelyezhető egy oldalon, mindegyik külön konfigurációval rendelkezhet.

## Projekt struktúra

```
widgets/
priceWidget/
    defaultConfig.json
    priceWidget.js
index.html
style.css
README.md
```

## Főbb funkciók

- Valós idejű kriptovaluta árak megjelenítése fiat pénznemekben (USD, EUR, stb.)
- Több widget támogatása egy oldalon
- Testreszabhatóság:
  - HTML `data-*` attribútumokkal
  - `defaultConfig.json` fájl segítségével
- Automatikus árfrissítés widgetenként
- Világos és sötét téma támogatása
- Több kérpenyőméretre optimalizált

## HTML data-* attribútumok

| Attribútum              | Jelentés                       | Példa |
| ----------------------- | ------------------------------ | ----- |
| `data-currency`         | Kriptovaluta szimbólum         | SOL   |
| `data-fiat`             | Fiat pénznem                   | USD   |
| `data-theme`            | Widget téma (`light` / `dark`) | dark  |

## CMS által generálandó HTML elemek

```HTML
<div class="price-widget" data-theme="dark" data-currency="BTC" data-fiat="USD" data-refresh-interval="3000"></div>
<div class="price-widget" data-theme="light" data-currency="ETH" data-fiat="EUR" data-refresh-interval="3000"></div>
<div class="price-widget" data-theme="dark" data-currency="SOL" data-fiat="HUF" data-refresh-interval="3000"></div>
```
`class="price-widget"` osztállyal el látott `<div>`-t kell generáltatni az igények szerinti `data-*` attribútumokkal

## Preview elérése

A következő linken meglehet tekinteni a Widgetek működését: [Preview](https://gyenesmate.github.io/cryptoPriceWidget/)