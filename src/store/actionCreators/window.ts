import {Dispatch} from "redux";
import {WindowAction, WindowActionTypes} from "../../types/windowReducerTypes";


export const getWindowOffset = () => {
    return (dispatch: Dispatch<WindowAction>) => {
        dispatch({
            type: WindowActionTypes.GET_WINDOW_OFFSET,
            payload: window.scrollY
        });
    };
};

export const setWindowOffsetToZero = () => {
    return (dispatch: Dispatch<WindowAction>) => {
        dispatch({type: WindowActionTypes.SET_WINDOW_OFFSET_TO_ZERO});
    };
};