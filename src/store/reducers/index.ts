import {combineReducers} from "redux";
import {windowReducer} from "./windowReducer";


export const rootReducer = combineReducers({
    window: windowReducer
});

export type RootState = ReturnType<typeof rootReducer>;