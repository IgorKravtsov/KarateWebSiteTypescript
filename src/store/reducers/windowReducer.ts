import {IWindowState, WindowAction, WindowActionTypes} from "../../types/windowReducerTypes";


const initialState: IWindowState = {
    windowOffset: 0
}

export const windowReducer = (state = initialState, action: WindowAction) : IWindowState => {
    switch (action.type) {
        case WindowActionTypes.GET_WINDOW_OFFSET:
            return {windowOffset: action.payload}

        case WindowActionTypes.SET_WINDOW_OFFSET_TO_ZERO:
            return {windowOffset: 0}

        default:
            return state;
    }
}