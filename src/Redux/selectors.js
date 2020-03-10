import { createSelector } from 'reselect';


// const getLesssons = (state) => Object.values(state.lessons.lessons);
const getLesssons = (state) => state.lessons.lessons;
const parseCourseId = (state, props) => parseInt(props.courseId, 10);
const getCourses = (state) => state.courses.courses;

const getSortedLessons = createSelector(
  getLesssons,
  lessons => Object.values(lessons).sort((a,b) => {
    if(a.id < b.id) {
      return 1;
  } else if(a.id > b.id) {
    return -1;
  } else {
    return 0;
  }
})
// lessons => Object.values(lessons).reverse()
);

export const getLessonsByCourse = createSelector(
  getSortedLessons,
  parseCourseId,
 (lessons, courseId) => lessons.filter(
  lesson => +lesson.courseId === courseId
  )
);


export const getCourseById = createSelector(
  getCourses,
  parseCourseId,
  (courses, courseId) => courses.find(
    course => course.id === courseId
  )
);
