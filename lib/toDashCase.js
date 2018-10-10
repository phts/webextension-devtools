'use strict'

module.exports = function toDashCase(str) {
  return str.toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
}
