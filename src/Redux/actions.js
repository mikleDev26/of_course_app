import { createCourse, getCourses } from './api';
export const ADD_COURSE = 'ADD_COURSE';
export const ADD_COURSE_BEGIN = 'ADD_COURSE_BEGIN';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';
export const ADD_LESSON = 'ADD_LESSON';
export const ADD_LESSON_BEGIN = 'ADD_LESSON_BEGIN';
export const ADD_LESSON_SUCCESS = 'ADD_LESSON_SUCCESS';
export const ADD_COURSE_ERROR = 'ADD_COURSE_ERROR';
export const LOAD_COURSES_BEGIN = 'LOAD_COURSES_BEGIN';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const LOAD_COURSES_ERROR = 'LOAD_COURSES_ERROR'; 
export const OPEN_NEW_COURSE_MODAL = 'OPEN_NEW_COURSE_MODAL'; 
export const CLOSE_NEW_COURSE_MODAL = 'CLOSE_NEW_COURSE_MODAL';


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

export function addLesson(name, courseId) {
  return dispatch => {
    dispatch({
      type: ADD_LESSON_SUCCESS,
      payload: {
        id: Math.random(),
        name,
        courseId
      }
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