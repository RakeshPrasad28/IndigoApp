import { combineReducers } from 'redux';
import aimsDataReducer from './slice/aimsData';
import pendingDataReducer from './slice/PendingData';
import gradingHistoryReducer from './slice/gradingHistory';
import themeReducer from './slice/themeSlice';

const rootReducer = combineReducers({
  aimsDataReducer,
  pendingDataReducer,
  gradingHistoryReducer,
  theme: themeReducer,
});

export default rootReducer;
