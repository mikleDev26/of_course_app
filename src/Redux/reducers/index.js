import { combineReducers } from 'redux';
import lessons from './lessons';
import courses from './courses';

combineReducers({
  courses: courses,
  lessons: lessons,
})