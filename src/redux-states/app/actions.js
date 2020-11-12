/*
 * File: actions.js
 * File Created: Friday, 30th October 2020 4:37:30 pm
 * Author: Buwaneka (buwanekasumanasekara@gmail.com)
 * -----
 * Last Modified: Friday, 30th October 2020 4:37:30 pm
 * Modified By: Buwaneka (buwanekasumanasekara@gmail.com>)
 * --------------------------------------------------------------
 */

import { CommonApi } from '@api';


export function appStateLoaded() {
    return async dispatch => {
        dispatch({ type: "APP_STATE_LOADED" });
    }
}



export function getAllMedicalCentersAction() {
    return async dispatch => {
        try {
            dispatch({ type: "APP_MEDICAL_CENTERS_LOADING", isLoading: true });
            let apiResponse = await CommonApi.getAllMedicalCenters();
            if (apiResponse.status === 200) {

                let respJson = await apiResponse.json();
                console.log(respJson);
                dispatch({ type: "APP_MEDICAL_CENTERS_SET", data: respJson.data });

                dispatch({ type: "APP_MEDICAL_CENTERS_LOADING", isLoading: false });
            } else {
                console.log("apiResponse.status === 200 error ");
                throw new Error("Got api error");
            }
        } catch (error) {
            dispatch({ type: "APP_MEDICAL_CENTERS_LOADING", isLoading: false, error: error });
        }
    }
}