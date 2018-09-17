#!/usr/bin/env node

'use strict'

const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .option('dist', {
    alias: 'd',
    default: 'dist',
    describe: 'Relative path to distribution folder to place xpi file in',
  })
  .option('src', {
    alias: 's',
    default: 'src',
    describe: 'Relative path to source code folder to be zipped',
  })
  .argv

const path = require('path')
const AdmZip = require('adm-zip')
const {toDashCase} = require('../lib/utils')

const hostDir = path.resolve('.')
const srcDir = path.join(hostDir, argv.src)
const distDir = path.join(hostDir, argv.dist)
const manifestFile = path.join(srcDir, 'manifest.json')

const manifest = require(manifestFile)
const outputFilename = `${toDashCase(manifest.name)}-${manifest.version}.xpi`
const outputFile = path.join(distDir, outputFilename)

const zip = new AdmZip()
zip.addLocalFolder(srcDir)
zip.writeZip(outputFile)
