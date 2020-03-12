import produce from 'immer';
import { 
   GET_LESSONS,
   GET_LESSONS_SUCCESS,
   GET_LESSONS_ERROR,
   ADD_LESSON_BEGIN ,
   ADD_LESSON_SUCCESS,
   ADD_LESSON_ERROR,
   DELETE_LESSON_SUCCESS,
   SAVE_LESSON_BEGIN ,
   SAVE_LESSON_SUCCESS,
   SAVE_LESSON_ERROR,
   SET_LESSON_MARKDOWN,
} from '../actions'; 

const initialState = {
  lessons: {},
  gettingLessons: false,
  gettingLessonsError: null,
  lessonSaveInProgress: false,
  lessonSaveError: null,
};

// export default function reducer(state = initialState, action) {
//   return produce(state, draft => {

//   })
// }

const reducer = produce((draft, action) => {
  switch(action.type) {
    case GET_LESSONS:
      draft.gettingLessons = true;
      draft.gettingLessonsError = null;
      return;
    case GET_LESSONS_SUCCESS:
      // draft.lessons = action.payload;
      action.payload.forEach(lesson => {
        draft.lessons[lesson.id] = lesson;
      });
      draft.gettingLessons = false;
      return;
      case GET_LESSONS_ERROR:
        draft.gettingLessonsError = action.payload;
        draft.gettingLessons = false;
        return;
      case ADD_LESSON_SUCCESS:
        draft.lessons[action.payload.id] = action.payload;
        return;
        case SAVE_LESSON_SUCCESS: 
        draft.lessons[action.payload.id] = action.payload;
        return;
      case DELETE_LESSON_SUCCESS:
       delete draft.lessons[action.payload.id];
       return;
      case SAVE_LESSON_ERROR:
        draft.gettingLessonsError = action.payload;
        draft.gettingLessons = false;
        return;
        case SET_LESSON_MARKDOWN:
          draft.lessons[action.payload.lesson.id].markdown = action.payload.markdown;
          return;
    default:
      return;
  }
}, initialState);

export default reducer;

