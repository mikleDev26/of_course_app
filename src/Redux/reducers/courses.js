import produce from 'immer';
import { 
  ADD_COURSE_BEGIN, 
  ADD_COURSE_SUCCESS, 
  LOAD_COURSES_ERROR,
  LOAD_COURSES_BEGIN,
  LOAD_COURSES_SUCCESS,
  OPEN_NEW_COURSE_MODAL,
  CLOSE_NEW_COURSE_MODAL, 

} from '../actions'; 

const initialState = {
  coursesLoading: false,
  coursesLError: null,
  fetching: false,
  courses: [],
  error: null,
  newCourseModalOpen: false,
};

// export default function reducer(state = initialState, action) {
//   return produce(state, draft => {

//   })
// }

const reducer = produce((draft, action) => {
  switch(action.type) {
    case ADD_COURSE_BEGIN:
      draft.fetching = true;
      return;
    case ADD_COURSE_SUCCESS:
      draft.courses.unshift(action.payload);
      draft.fetching = false;
      draft.newCourseModalOpen = false;
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
    case OPEN_NEW_COURSE_MODAL: 
      draft.newCourseModalOpen = true;
      return;
    case CLOSE_NEW_COURSE_MODAL:
      draft.newCourseModalOpen = false;
      draft.error = null;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;

