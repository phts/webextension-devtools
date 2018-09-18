# webextension-devtools

[![npm](https://img.shields.io/npm/v/webextension-devtools.svg)](https://www.npmjs.com/package/webextension-devtools)

Tools for WebExtension development.

## Install

```
$ npm i -D webextension-devtools
```

## Usage

This package exposes 2 binaries:

* `webext-release` - Bump a new version
* `webext-xpi` - Create xpi package

Add these into your `package.json` file:

```
{
  "name": "my-webextension",
  "scripts": {
    "release": "webext-release",
    "xpi": "webext-xpi"
  },
  "devDependencies": {
    "webextension-devtools": "^0.1.0"
  }
}
```

For more usage info run these commands with `--help` option.
