# Logux Stylelint Config

<img align="right" width="95" height="148" title="Logux logotype"
     src="https://logux.io/branding/logotype.svg">

Shareable [Stylelint] config and best practice for CSS.

[Stylelint]: https://stylelint.io/
[Logux]: https://logux.io/

<a href="https://evilmartians.com/?utm_source=logux-stylelint">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Install

```sh
yarn add --dev @logux/stylelint-config stylelint stylelint-config-recess-order stylelint-config-standard stylelint-order
```


## Usage

Add this config to `package.json` or other Stylelint config files.

```js
  "stylelint": {
    "extends": "@logux/stylelint-config"
  }
```
