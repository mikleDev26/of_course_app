import produce from 'immer';
import { ADD_COURSE } from './actions'; 

const initialState = {
  courses: []
};

// export default function reducer(state = initialState, action) {
//   return produce(state, draft => {

//   })
// }

const reducer = produce((draft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case ADD_COURSE:
      draft.courses.unshift(action.payload);
      return;
    default:
      return;
  }
}, initialState);

export default reducer;

