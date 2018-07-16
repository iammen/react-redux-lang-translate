import * as types from './types';

export const setLocale = (locale, callback = () => {}) => ({
  type: types.SET_LOCALE,
  locale,
  callback
});