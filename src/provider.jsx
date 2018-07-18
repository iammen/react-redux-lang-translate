import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TranslateProvider } from './context';
import {
  createHTMLMarkup,
  extend,
  supplant,
  translateKey
} from './utils';

class LangTranslateProvider extends React.Component {

  constructor(props) {
    super(props);

    this._translations = this.props.translations;
  }

  static propTypes = {
    translations: PropTypes.object
  };

  static defaultProps = {
    translations: {}
  };

  /**
   * Add additional translation
   * 
   * @example
   * const translation = {
   *   th: { landing: { feature: 'คุณสมบัติ' } },
   *   en: { landing: { feature: 'Feature' } }
   * };
   * 
   * 
   * @param {Object} translation Additional translation
   */
  addTranslation = (translation) => {
    const newTranslations = extend(this._translations, translation);
    this._translations = newTranslations;
  }

  /**
   * Translate language
   * 
   * @param {String} key  Object path that need to translate
   * @param {Object} placeholders
   * @param {Boolean} isHTML
   * @param {Object} options
   */
  translate = (key, placeholders, isHTML, options = {}) => {
    const result = translateKey(
      key,
      this._translations[this.props.locale]['messages']
    );

    const tagName = options.tagName || 'div';

    if (typeof placeholders === 'undefined') {
      return result
    }

    const finalResult = supplant(result, placeholders);

    return isHTML
      ? React.createElement(
        tagName,
        { dangerouslySetInnerHTML: createHTMLMarkup(finalResult) },
        null
      )
      : finalResult
  }

  render() {
    return (
      <TranslateProvider
        value={{
          addTranslation: this.addTranslation,
          translate: this.translate
        }}
      >
        {this.props.children}
      </TranslateProvider> 
    );
  }
}

const mapStateToProps = (state) => {
  const { translation } = state;
  return {
    ...translation
  };
}

export default connect(mapStateToProps)(LangTranslateProvider)