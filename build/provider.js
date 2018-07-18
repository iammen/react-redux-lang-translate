'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

var _context = require('./context');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LangTranslateProvider = function (_React$Component) {
  _inherits(LangTranslateProvider, _React$Component);

  function LangTranslateProvider(props) {
    _classCallCheck(this, LangTranslateProvider);

    var _this = _possibleConstructorReturn(this, (LangTranslateProvider.__proto__ || Object.getPrototypeOf(LangTranslateProvider)).call(this, props));

    _this.addTranslation = function (translation) {
      var newTranslations = (0, _merge2.default)(_this._translations, translation);
      _this._translations = newTranslations;
    };

    _this.translate = function (key, placeholders, isHTML) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var result = (0, _utils.translateKey)(key, _this._translations[_this.props.locale]['messages']);

      var tagName = options.tagName || 'div';

      if (typeof placeholders === 'undefined') {
        return result;
      }

      var finalResult = (0, _utils.supplant)(result, placeholders);

      return isHTML ? _react2.default.createElement(tagName, { dangerouslySetInnerHTML: (0, _utils.createHTMLMarkup)(finalResult) }, null) : finalResult;
    };

    _this._translations = _this.props.translations;
    return _this;
  }

  /**
   * Add additional translation
   * 
   * @example
   * const translation = {
   *   th: { landing: { feature: 'คุณสมบัติ' } },
   *   en: { landing: { feature: 'Feature' } }
   * };
   * 
   * @param {Object} translation Additional translation
   */


  /**
   * Translate language
   * 
   * @param {String} key  Object path that need to translate
   * @param {Object} placeholders
   * @param {Boolean} isHTML
   * @param {Object} options
   */


  _createClass(LangTranslateProvider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _context.TranslateProvider,
        {
          value: {
            addTranslation: this.addTranslation,
            translate: this.translate
          }
        },
        this.props.children
      );
    }
  }]);

  return LangTranslateProvider;
}(_react2.default.Component);

LangTranslateProvider.propTypes = {
  translations: _propTypes2.default.object
};
LangTranslateProvider.defaultProps = {
  translations: {}
};


var mapStateToProps = function mapStateToProps(state) {
  var translation = state.translation;

  return _extends({}, translation);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(LangTranslateProvider);