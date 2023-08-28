import { combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import doctorReducer from "./reducers/doctor";
import farmacistReducer from "./reducers/farmacist";

const allReducers = combineReducers({
    user: userReducer,
    doctor: doctorReducer,
    farmacist: farmacistReducer
});

const store = configureStore({reducer: allReducers});

export default store;