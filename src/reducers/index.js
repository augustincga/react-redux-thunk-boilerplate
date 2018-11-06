import { combineReducers } from 'redux';
import {postReducer} from './PostReducer/index';

/* Root Reducer - combine all reducers in here*/
export default combineReducers({
  posts: postReducer
});
