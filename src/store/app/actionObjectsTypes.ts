/* This file is for declaring ActionObject types and their union
*   Format -
*       {
*          action: actionTypes.ACTION_TYPE,
*          payload: {
*          <--whatever the information-->
*          }
*   }
* */
import * as actionTypes from "./actionTypes";
import {appStateType} from "./type";


// action object of TOGGLE_DARK_MODE
export interface toggleDarkModeActionObject {
    type: typeof actionTypes.TOGGLE_DARK_MODE,
}


// Use union operator to create union of ActionObject types
export type appActionObjectType = toggleDarkModeActionObject ;
