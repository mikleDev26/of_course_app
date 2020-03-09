import produce from 'immer';
import { 
  ADD_COURSE_BEGIN, 
  ADD_COURSE_SUCCESS, 
  // ADD_COURSE_ERROR,
   GET_LESSONS_SUCCESS,
   ADD_LESSON,
   ADD_LESSON_BEGIN ,
   ADD_LESSON_SUCCESS,
} from '../actions'; 

const initialState = {
  lessons: [],
  lessonSaveInProgress: false,
  lessonSaveError: null,
};

// export default function reducer(state = initialState, action) {
//   return produce(state, draft => {

//   })
// }

const reducer = produce((draft, action) => {
  switch(action.type) {
    case ADD_LESSON_SUCCESS: 
      draft.lessons.push(action.payload)
      return;
    default:
      return;
      case GET_LESSONS_SUCCESS:
        draft.lessons = action.payload;
        return;
  }
}, initialState);

export default reducer;

