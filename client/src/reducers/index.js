import { combineReducers } from 'redux';
import newsReducers from './newsReducers';

export default combineReducers({
  news: newsReducers
});
