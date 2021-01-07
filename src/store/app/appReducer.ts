import * as appActionTypes from "./actionTypes";
import * as appActionObjectsTypes from "./appActionObjectsTypes"
import {appStateType} from "./type";

const appInitialState = {
    darkMode: false
}

const appReducer = (state = appInitialState, action: appActionObjectsTypes.appActionType): appStateType => {
    return state;
}

export default appReducer;
