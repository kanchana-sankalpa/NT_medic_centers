/*
 * File: actions.js
 * File Created: Friday, 30th October 2020 4:37:30 pm
 * Author: Buwaneka (buwanekasumanasekara@gmail.com)
 * -----
 * Last Modified: Friday, 30th October 2020 4:37:30 pm
 * Modified By: Buwaneka (buwanekasumanasekara@gmail.com>)
 * --------------------------------------------------------------
 */

import { TestApi } from '@api';


export function appStateLoaded() {
    return async dispatch => {
        dispatch({ type: "APP_STATE_LOADED" });
    }
}



export function testAPI() {
    return async dispatch => {
        try {
            dispatch({ type: "APP_API_TEST_LOADING", isLoading: true });
            let apiResponse = await TestApi.testAPIFun1("yourtoken",{"id":1,"name":"ttt"});
            console.log('---------------- apiResponse-----------------');
            console.log(apiResponse.status);
            console.log(apiResponse);
          
            if (apiResponse.status === 200) {
               
                //do wht ever you want using response
                let respJson = await  apiResponse.json();//you can get json object of response here
         
                console.log('----------------testAPI response -----------------');
               console.log(respJson);

                dispatch({ type: "APP_API_TEST_LOADING", isLoading: false });
            } else {
                console.log("apiResponse.status === 200 error ");
                throw new Error("Got api error");
            }
        } catch (error) {
            dispatch({ type: "APP_API_TEST_LOADING", isLoading: false, error: error });
        }
    }
}