import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      console.log('test');
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
        console.log('test');

      return { ...state, isSignedIn: false, userId: null };
    default:
      return { ...state };
  }
};
