'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslate = exports.TranslateReducer = exports.TranslateProvider = exports.TranslateActions = undefined;

var _actions = require('./actions');

var TranslateActions = _interopRequireWildcard(_actions);

var _provider = require('./provider');

var _provider2 = _interopRequireDefault(_provider);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _withTranslate = require('./withTranslate');

var _withTranslate2 = _interopRequireDefault(_withTranslate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.TranslateActions = TranslateActions;
exports.TranslateProvider = _provider2.default;
exports.TranslateReducer = _reducers2.default;
exports.withTranslate = _withTranslate2.default;