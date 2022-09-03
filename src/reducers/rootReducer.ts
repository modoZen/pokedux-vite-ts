import { combineReducers } from "redux"
import { dataSlice } from "../slices/dataSlice";
// import { uiReducer } from './ui';

const rootReducer = combineReducers({
  data: dataSlice,
  // ui: uiReducer,
});

export default rootReducer;