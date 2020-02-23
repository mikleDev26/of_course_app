import produce from 'immer';
import { 
  ADD_COURSE_BEGIN, 
  ADD_COURSE_SUCCESS, 
  // ADD_COURSE_ERROR,
  LOAD_COURSES_ERROR,
  LOAD_COURSES_BEGIN,
  LOAD_COURSES_SUCCESS, 

} from './actions'; 

const initialState = {
  coursesLoading: false,
  coursesLError: null,
  fetching: false,
  courses: [],
  error: null
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
    case LOAD_COURSES_BEGIN:
      draft.coursesLoading = true;
      return;
    case LOAD_COURSES_SUCCESS:
      draft.courses = action.payload;
      draft.coursesLoading = false;
      return;
    case LOAD_COURSES_ERROR:
      draft.coursesLoading = false;
      draft.coursesLError = action.error;
      return;

    default:
      return;
  }
}, initialState);

export default reducer;

