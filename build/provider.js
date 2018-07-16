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

var _context = require('./context');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiLangProvider = function (_React$Component) {
  _inherits(MultiLangProvider, _React$Component);

  function MultiLangProvider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MultiLangProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MultiLangProvider.__proto__ || Object.getPrototypeOf(MultiLangProvider)).call.apply(_ref, [this].concat(args))), _this), _this.translate = function (key, placeholders, isHTML) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var result = (0, _utils.translateKey)(key, _this.props.translations[_this.props.locale]['messages']);

      var tagName = options.tagName || 'div';

      if (typeof placeholders === 'undefined') {
        return result;
      }

      var finalResult = (0, _utils.supplant)(result, placeholders);

      return isHTML ? _react2.default.createElement(tagName, { dangerouslySetInnerHTML: (0, _utils.createHTMLMarkup)(finalResult) }, null) : finalResult;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MultiLangProvider, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _context.TranslateProvider,
        { value: this.translate },
        this.props.children
      );
    }
  }]);

  return MultiLangProvider;
}(_react2.default.Component);

MultiLangProvider.propTypes = {
  translations: _propTypes2.default.object
};
MultiLangProvider.defaultProps = {
  translations: {}
};


var mapStateToProps = function mapStateToProps(state) {
  var lang = state.lang;

  return _extends({}, lang);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MultiLangProvider);