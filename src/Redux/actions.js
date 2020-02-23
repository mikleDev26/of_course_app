import { createCourse } from './api';
export const ADD_COURSE = 'ADD_COURSE';
export const ADD_COURSE_BEGIN = 'ADD_COURSE_BEGIN';
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS';
export const ADD_COURSE_ERROR = 'ADD_COURSE_ERROR'; 



// export function addCourse(name) {
//   return {
//     type: ADD_COURSE,
//     payload: {
//       name,
//       id: Math.random(),
//     }
//   }
// }

export function addCourse(name) {
  return dispatch => {
    dispatch({ type: ADD_COURSE_BEGIN });
    createCourse(name)
    .then(course => {
      dispatch({ type: ADD_COURSE_SUCCESS, payload: course })
    })
    .catch(err => {
      dispatch({ type: ADD_COURSE_ERROR, err })
    })
  }
}