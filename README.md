
# count-it-down
[![package version](https://img.shields.io/npm/v/count-it-down.svg?style=flat-square)](https://npmjs.org/package/count-it-down)
[![package downloads](https://img.shields.io/npm/dm/count-it-down.svg?style=flat-square)](https://npmjs.org/package/count-it-down)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/count-it-down.svg?style=flat-square)](https://npmjs.org/package/count-it-down)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Get countdown to a date

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install count-it-down
$ # OR
$ yarn add count-it-down
```

## Usage

```js
import countItDown from 'count-it-down'
const weddingDate = new Date('01/26/2019')

countItDown(weddingDate, console.log)
// {days: 195, hours: 12, minutes: 4, seconds: 50}
// {days: 195, hours: 12, minutes: 4, seconds: 49}
// ...

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    