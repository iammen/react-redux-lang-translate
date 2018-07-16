import * as types from './types';

const initState = {
  locale: 'en'
};

export default function(state = initState, action) {
  switch (action.type) {
    case types.SET_LOCALE:
      return {
        ...state,
        locale: action.locale
      };
    default:
      return state;
  }
}