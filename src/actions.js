import * as types from './types';

export const setLocale = (locale, callback = () => {}) => ({
  type: types.SET_LOCALE,
  locale,
  callback
});

export const setTranslation = (translation, callback = () => {}) => ({
  type: types.SET_TRANSLATION,
  translation,
  callback
});