import React from 'react';
import { TranslateConsumer } from './context';

/**
 * HOC for acccessing translate function
 * 
 * @param  {Object} WrappedComponent React component
 * @return {Object}
 */
function withTranslate(WrappedComponent) {
  return React.forwardRef((props, ref) => (
    <TranslateConsumer>
      {translate => (
        <WrappedComponent {...props} translate={translate} ref={ref} />
      )}
    </TranslateConsumer>
  ))
}

export default withTranslate;