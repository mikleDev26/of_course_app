import produce from 'immer';
import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNUP_BEGIN,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from '../actions';

const initialState = {
  user: null,
  loading: false,
  error: null,
};


const reducer = produce((draft, action) => {
  switch(action.type) {
    case LOGIN_BEGIN:
        draft.loading = true;
        return;
    case LOGIN_SUCCESS:
        draft.user = action.payload;
        return;
    case LOGIN_ERROR:
        draft.loading = false;
        draft.user = null;
        draft.error = action.payload;
        return;
    case SIGNUP_BEGIN:
        draft.loading = true;
        return;
    case SIGNUP_SUCCESS:
        draft.user = action.payload;
        return;
    case SIGNUP_ERROR:
        draft.loading = false;
        draft.user = null;
        draft.error = action.payload;
        return;
          
    default:
      return draft;
  }
}, initialState);

export default reducer;