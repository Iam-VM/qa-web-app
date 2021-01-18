/*
* This file stores all action creators for this reducer
* For an ActionCreator
*   Argument - data for payload
*   Returns - action object
* */
import * as actionTypes from "./actionTypes";
import {appActionObjectType} from "./actionObjectsTypes";

//action creator for toggleDarkMode action
export function toggleDarkModeActionCreator(): appActionObjectType {
    return {
        type: actionTypes.TOGGLE_DARK_MODE
    }
}
