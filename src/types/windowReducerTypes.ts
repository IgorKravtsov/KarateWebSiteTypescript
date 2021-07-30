export enum WindowActionTypes {
    GET_WINDOW_OFFSET = "GET_WINDOW_OFFSET",
    SET_WINDOW_OFFSET = "SET_WINDOW_OFFSET",
    SET_WINDOW_OFFSET_TO_ZERO = "SET_WINDOW_OFFSET_TO_ZERO",
}

export interface IWindowState {
    windowOffset : number;
}

export interface IGetWindowOffset {
    type: WindowActionTypes.GET_WINDOW_OFFSET;
    payload: number;
}

export interface ISetWindowOffset {
    type: WindowActionTypes.SET_WINDOW_OFFSET;
    payload: number;
}

export interface ISetWindowOffsetToZero {
    type: WindowActionTypes.SET_WINDOW_OFFSET_TO_ZERO;
}

export type WindowAction = IGetWindowOffset | ISetWindowOffset | ISetWindowOffsetToZero;
