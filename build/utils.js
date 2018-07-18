'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplant = supplant;
exports.translateKey = translateKey;
exports.createHTMLMarkup = createHTMLMarkup;
/**
 * Supplant the string surround with {} with a given object
 * 
 * @param {String} str A String
 * @param {Object} obj A given object 
 */
function supplant(str, obj) {
  for (var prop in obj) {
    str = str.replace(new RegExp('{' + prop + '}', 'g'), obj[prop]);
  }

  return str;
}

function translateKey(path, obj, safe) {
  // Use reduce method to find out a messages matches the given path
  return path.split('.').reduce(function (previousValue, currentValue) {
    return !safe ? previousValue[currentValue] : previousValue ? previousValue[currentValue] : undefined;
  }, obj);
}

function createHTMLMarkup(html) {
  return { __html: html };
}