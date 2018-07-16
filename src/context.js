import React from 'react';

// Create translate context using new context API
const TranslateContext = React.createContext(null);

/** 
 * Destructure Provider and Consumer variables 
 * from context and then rename them
 */
const {
  Provider: TranslateProvider,
  Consumer: TranslateConsumer
} = TranslateContext;

export {
  TranslateProvider,
  TranslateConsumer
};

export default TranslateContext;