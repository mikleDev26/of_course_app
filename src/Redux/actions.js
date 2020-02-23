export const ADD_COURSE = 'ADD_COURSE';

export function addCourse(name) {
  return {
    type: ADD_COURSE,
    payload: {
      name,
      id: Math.random(),
    }
  }
}