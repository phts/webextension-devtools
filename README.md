# webextension-devtools

[![npm](https://img.shields.io/npm/v/webextension-devtools.svg)](https://www.npmjs.com/package/webextension-devtools)

Tools for WebExtension development.

## Install

**Globally**:

    ```
    $ npm i -g webextension-devtools
    ```

**As a local dependency**:

    ```
    $ npm i -D webextension-devtools
    ```

## Usage

This package exposes 2 binaries:

* `webext-version` - Bump a new version, similar to `npm version`
* `webext-xpi` - Create xpi package

For more usage info run these commands with `--help` option.

**Globally**:

```
$ cd dir/to/my-webextension
$ webext-version minor
$ webext-xpi
```

**As a local dependency**:

Add the following scripts into `package.json` file:

```
{
  "scripts": {
    "release": "webext-version",
    "xpi": "webext-xpi"
  },
}
```

