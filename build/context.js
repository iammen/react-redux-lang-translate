'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranslateConsumer = exports.TranslateProvider = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create translate context using new context API
var TranslateContext = _react2.default.createContext(null);

/** 
 * Destructure Provider and Consumer variables 
 * from context and then rename them
 */
var TranslateProvider = TranslateContext.Provider,
    TranslateConsumer = TranslateContext.Consumer;
exports.TranslateProvider = TranslateProvider;
exports.TranslateConsumer = TranslateConsumer;
exports.default = TranslateContext;