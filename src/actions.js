import * as types from './types';

export const setLocale = (locale) => ({
  type: types.SET_LOCALE,
  locale
});