import { combineReducers } from 'redux';
import lessons from './lessons';
import courses from './courses';
import mode from './mode';
import user from './user';

export default combineReducers({
  courses,
  lessons,
  mode,
  user,
})