import produce from 'immer';
import { ADD_COURSE_BEGIN, ADD_COURSE_SUCCESS, ADD_COURSE_ERROR } from './actions'; 

const initialState = {
  fetching: false,
  courses: []
};

// export default function reducer(state = initialState, action) {
//   return produce(state, draft => {

//   })
// }

const reducer = produce((draft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case ADD_COURSE_BEGIN:
      draft.fetching = true;
      return;
    case ADD_COURSE_SUCCESS:
      draft.courses.unshift(action.payload);
      draft.fetching = false;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;

