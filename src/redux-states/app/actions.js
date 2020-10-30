/*
 * File: actions.js
 * File Created: Friday, 30th October 2020 4:37:30 pm
 * Author: Buwaneka (buwanekasumanasekara@gmail.com)
 * -----
 * Last Modified: Friday, 30th October 2020 4:37:30 pm
 * Modified By: Buwaneka (buwanekasumanasekara@gmail.com>)
 * --------------------------------------------------------------
 */




export function appStateLoaded() {
    return async dispatch => {
        dispatch({ type: "APP_STATE_LOADED" });
    }
}
