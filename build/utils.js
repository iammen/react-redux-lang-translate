'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supplant = supplant;
exports.translateKey = translateKey;
exports.createHTMLMarkup = createHTMLMarkup;
/**
 * This method is used to copy the values of all enumerable own properties 
 * from one or more source objects to a target object. 
 * It will return the target object.
 * 
 * @borrows
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * 
 * @example
 * const object1 = {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * };
 * 
 * const object2 = Object.assign({c: 4, d: 5}, object1);
 * console.log(object2.c, object2.d);
 * // expected output: 3 5
 * 
 * @param {Object} target
 * @param {Object} source
 */
var extend = exports.extend = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

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