import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TranslateProvider } from './context';
import {
  createHTMLMarkup,
  supplant,
  translateKey
} from './utils';

class MultiLangProvider extends React.Component {

  static propTypes = {
    translations: PropTypes.object
  };

  static defaultProps = {
    translations: {}
  };

  translate = (key, placeholders, isHTML, options = {}) => {
    const result = translateKey(
      key,
      this.props.translations[this.props.locale]['messages']
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
      <TranslateProvider value={this.translate}>
        {this.props.children}
      </TranslateProvider> 
    );
  }
}

const mapStateToProps = (state) => {
  const { lang } = state;
  return {
    ...lang
  };
}

export default connect(mapStateToProps)(MultiLangProvider)