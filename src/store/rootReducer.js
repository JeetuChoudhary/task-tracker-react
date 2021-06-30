import { combineReducers } from 'redux';

import taskReducer from './reducers/tasks';

const rootReducer = combineReducers({
  tks: taskReducer,
});

export default rootReducer;
