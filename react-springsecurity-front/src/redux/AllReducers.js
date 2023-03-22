import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore} from "redux";
import userReducer from "./reducers/UserReducers";

const allReducers = combineReducers({ // aici definim toti reduceri pe care ii folosim
    user: userReducer,
})

// const store = createStore
// const store = configureStore(allReducers); // ca parametru poate sa primeasca doar un obiect

const store = configureStore({reducer: allReducers})
export default store;