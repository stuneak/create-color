# Create color

[![npm version](https://badge.fury.io/js/create-color.svg)](https://badge.fury.io/js/create-color) ![](https://img.shields.io/npm/dm/create-color.svg)
[![Code Climate](https://codeclimate.com/github/yakotika/create-color.svg)](https://codeclimate.com/github/yakotika/create-color)

A tiny (2.2 KB) JavaScript library to generate the permanent color from any string, array or object.

## Install

```bash
npm install create-color
// or
yarn add create-color
```

## Usage

```js
const createColor = require("create-color").default;
// or
import createColor from "create-color";
```

```js
// format by default: hex
const hex = createColor("canThereBeAnyText"); // => "#8906A2"
```

```js
// from string
const hsl = createColor("canThereBeAnyText", "hsl"); // => "hsl(290, 93%, 33%)"
// from object
const hex = createColor({ user: "admin", hash: "gtr%$6y4t" }, "hex"); // => "#29F947"
// from array
const rgb = createColor(["test", "anytext"], "rgb"); // => "rgb(247,151,245)"
```
