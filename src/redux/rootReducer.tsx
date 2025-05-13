import { combineReducers } from 'redux';
import aimsDataReducer from './slice/aimsData';
import pendingDataReducer from './slice/PendingData';
import gradingHistoryReducer from './slice/gradingHistory';
import themeReducer from './slice/themeSlice';
import getUpdatedTraineeList from './slice/getUpdatedTraineeList';
import traineeDataReducer from './slice/traineeData';
import rowData from './slice/rowData';

const rootReducer = combineReducers({
  aimsDataReducer,
  pendingDataReducer,
  gradingHistoryReducer,
  theme: themeReducer,
  getUpdatedTraineeList,
  rowData,
  traineeDataReducer
});

export default rootReducer;
