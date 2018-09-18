'use strict'

function toDashCase(str) {
  return str.toLowerCase().split(' ').join('-')
}

module.exports = toDashCase
