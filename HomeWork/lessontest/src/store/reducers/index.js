import { combineReducers } from "@reduxjs/toolkit";
import AuthReducer from "./authReducer/AuthReducer";
import ThemeReducer from "./themeReducer/ThemeReducer";

const rootReducer = combineReducers({
    // name   :  reducer
    authReducer: AuthReducer,
    themeReducer: ThemeReducer
});

export default rootReducer;