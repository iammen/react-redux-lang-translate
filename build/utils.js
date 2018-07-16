'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplant = supplant;
exports.translateKey = translateKey;
exports.createHTMLMarkup = createHTMLMarkup;
function supplant(s, d) {
  for (var p in d) {
    s = s.replace(new RegExp('{' + p + '}', 'g'), d[p]);
  }
  return s;
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