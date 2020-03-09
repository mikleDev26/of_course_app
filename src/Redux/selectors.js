import { createSelector } from 'reselect';


const getLesssons = (state) => state.lessons.lessons;
const parseCourseId = (state, props) => parseInt(props.courseId, 10);

export const getLessonsByCourse = createSelector(
  getLesssons,
  parseCourseId,
 (lessons, courseId) => lessons.filter(
  lesson => +lesson.courseId === courseId
  )
);


const getCourses = (state) => state.courses.courses;

export const getCourseById = createSelector(
  getCourses,
  parseCourseId,
  (courses, courseId) => courses.find(
    course => course.id === courseId
  )
);
