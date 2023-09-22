import { combineReducers } from "@reduxjs/toolkit";
import trafficReducer from "./traffic";

export default combineReducers({
    traffics: trafficReducer,
});