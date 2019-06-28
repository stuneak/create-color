# Create color

[![npm version](https://badge.fury.io/js/create-color.svg)](https://badge.fury.io/js/create-color) ![](https://img.shields.io/npm/dm/create-color.svg)

A tiny (1 KB) JavaScript library to generate the permanent color from any string, array or object.

## Install

```bash
npm install create-color
// or
yarn add create-color
```

## Usage

```js
const createColor = require("create-color");
// or
import createColor from "create-color";
```

```js
// format by default: hex
const hex = createColor("canThereBeAnyText"); // => "#67CB22"
```

```js
// from string
const hsl = createColor("canThereBeAnyText", "hsl"); // => "hsl(96,71%,46%)"
// from object
const hex = createColor({ user: "admin", hash: "gtr%$6y4t" }, "hex"); // => "#ACA21"
// from array
const rgb = createColor(["test", "anytext"], "rgb"); // => "rgb(89,119,249)"
```
