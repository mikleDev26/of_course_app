import { 
  createCourse, 
  getCourses, 
  createLesson, 
  getLessons, 
  updateLesson,
  destroyLesson, 
} from './api';

export const ADD_COURSE = 'ADD_COURSE';
export const ADD_COURSE_BEGIN = 'ADD_COURSE_BEGIN';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';

export const ADD_LESSON = 'ADD_LESSON';
export const ADD_LESSON_BEGIN = 'ADD_LESSON_BEGIN';
export const ADD_LESSON_SUCCESS = 'ADD_LESSON_SUCCESS';
export const ADD_LESSON_ERROR = 'ADD_LESSON_ERROR';

export const SAVE_LESSON_BEGIN = 'SAVE_LESSON_BEGIN';
export const SAVE_LESSON_SUCCESS = 'SAVE_LESSON_SUCCESS';
export const SAVE_LESSON_ERROR = 'SAVE_LESSON_ERROR';

export const DELETE_LESSON_BEGIN = 'DELETE_LESSON_BEGIN';
export const DELETE_LESSON_SUCCESS = 'DELETE_LESSON_SUCCESS';
export const DELETE_LESSON_ERROR = 'DELETE_LESSON_ERROR';

export const ADD_COURSE_ERROR = 'ADD_COURSE_ERROR';
export const GET_LESSONS = 'GET_LESSONS';
export const GET_LESSONS_SUCCESS = 'GET_LESSONS_SUCCESS';
export const GET_LESSONS_ERROR = 'GET_LESSONS_ERROR';
export const LOAD_COURSES_BEGIN = 'LOAD_COURSES_BEGIN';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const LOAD_COURSES_ERROR = 'LOAD_COURSES_ERROR'; 
export const OPEN_NEW_COURSE_MODAL = 'OPEN_NEW_COURSE_MODAL'; 
export const CLOSE_NEW_COURSE_MODAL = 'CLOSE_NEW_COURSE_MODAL';

export const SET_LESSON_MARKDOWN = 'SET_LESSON_MARKDOWN';




// export function addCourse(name) {
//   return {
//     type: ADD_COURSE,
//     payload: {
//       name,
//       id: Math.random(),
//     }
//   }
// }

export function addCourse(name, price) {
  return dispatch => {
    dispatch({ type: ADD_COURSE_BEGIN });
    createCourse(name, price)
    .then(course => {
      dispatch({ type: ADD_COURSE_SUCCESS, payload: course })
    })
    .catch(error => {
      dispatch({ type: ADD_COURSE_ERROR, error })
    })
  }
}

export function loadCourses() {
  return dispatch => {
    dispatch({ type: LOAD_COURSES_BEGIN });
    getCourses()
      .then(courses => {
        dispatch({
          type: LOAD_COURSES_SUCCESS, 
          payload: courses.reverse() });
      })
      .catch(error => {
        dispatch({ type: LOAD_COURSES_ERROR, error })
      })
  }
}

export function loadLessons(courseId) {
  console.log('COURSEID', courseId);
  return dispatch => {
    dispatch({ type: GET_LESSONS });
    getLessons(courseId)
      .then(lessons => {
        console.log('LESSONS', lessons);
        dispatch({
          type: GET_LESSONS_SUCCESS,
          payload: lessons.reverse()
        });
      })
      .catch(err => {
        dispatch({type: GET_LESSONS_ERROR, payload: err});
      })
  }
}

export function addLesson(name, courseId) {
  return dispatch => {
    dispatch({ type: ADD_LESSON_BEGIN })
    createLesson(name, courseId)
      .then( course => {
        dispatch({
          type: ADD_LESSON_SUCCESS,
          payload: course
        });
      })
      .catch(error => {
        dispatch({ type: ADD_LESSON_ERROR, error })
      })
  }
}

export function saveLesson(lesson) {
  return dispatch => {
    dispatch({ type: SAVE_LESSON_BEGIN });
    updateLesson(lesson)
      .then(lesson => {
        dispatch({
          type: SAVE_LESSON_SUCCESS,
          payload: lesson,
        });
      })
      .catch(err => {
        dispatch({
          type: SAVE_LESSON_ERROR,
          payload: err,
        });
      })
  };
}

export const setLessonMarkDown = (lesson, markdown) => {
  return {
    type: SET_LESSON_MARKDOWN,
    payload: {
      lesson,
      markdown,
    }
  };
}

export function deleteLesson(lesson) {
  return dispatch => {
    dispatch({ type: DELETE_LESSON_BEGIN });
    destroyLesson(lesson)
      .then(() => {
        dispatch({
          type: DELETE_LESSON_SUCCESS,
          payload: lesson,
        });
      })
      .catch(err => {
        dispatch({
          type: DELETE_LESSON_ERROR,
          payload: err,
        })
      })
  }
}

export function openNewCourseModal() {
  return {
    type: OPEN_NEW_COURSE_MODAL,
  }
}

export function closeNewCourseModal() {
  return {
    type: CLOSE_NEW_COURSE_MODAL,
  }
}