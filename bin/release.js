#!/usr/bin/env node

'use strict'

const argv = require('yargs')
  .usage('Usage: $0 [options] <newversion | major | minor | patch>')
  .option('manifest', {
    alias: 'm',
    default: 'src/manifest.json',
    describe: 'Relative path to manifest.json file',
  })
  .demandCommand(1)
  .argv

const fs = require('fs')
const path = require('path')
const exec = require('child_process').execSync
const semver = require('semver')

const newVersionCommand = argv._[0]
const isShortcut = ['major', 'minor', 'patch'].includes(newVersionCommand)
if (!isShortcut && !semver.valid(newVersionCommand)) {
  throw new Error('New version should have semver format (x.y.z) or one of "major", "minor", "patch".')
}

const hostDir = path.resolve('.')
const manifestFile = path.join(hostDir, argv.manifest)

const manifestContent = fs.readFileSync(manifestFile).toString()

const versionRegExp = /([\s]*"version": ")([0-9.]+)(",)/
const match = manifestContent.match(versionRegExp)
if (!match) {
  throw new Error('Cannot find "version" key in the manifest file.')
}
const currentVersion = match[2]
const newVersion = isShortcut ? semver.inc(currentVersion, newVersionCommand) : newVersionCommand

const updatedManifestContent = manifestContent.replace(versionRegExp, `$1${newVersion}$3`)
fs.writeFileSync(manifestFile, updatedManifestContent)

exec(`git add "${manifestFile}" && git commit -m "${newVersion}" && git tag v${newVersion}`)
