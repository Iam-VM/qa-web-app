import {TOGGLE_DARK_MODE} from "./actionTypes";
import * as appActionObjectsTypes from "./actionObjectsTypes"
import {appStateType} from "./type";

/*
* Whenever appInitialState is modified
* Remember to modify appState in type.ts file also
* */
const appInitialState = {
    darkMode: false
}

const reducer = (state = appInitialState, action: appActionObjectsTypes.appActionObjectType): appStateType => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            }
        default:
            return state;
    }
}

export default reducer;
