'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocale = undefined;

var _types = require('./types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setLocale = exports.setLocale = function setLocale(locale) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  return {
    type: types.SET_LOCALE,
    locale: locale,
    callback: callback
  };
};