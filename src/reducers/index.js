import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts:PostsReducer,
  form:FormReducer
});

export default rootReducer;
