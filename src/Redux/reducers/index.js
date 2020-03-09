import { combineReducers } from 'redux';
import lessons from './lessons';
import courses from './courses';

export default combineReducers({
  courses: courses,
  lessons: lessons,
})