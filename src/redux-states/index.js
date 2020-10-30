/*
 * File: index.js
 * File Created: Friday, 30th October 2020 4:36:51 pm
 * Author: Buwaneka (buwanekasumanasekara@gmail.com)
 * -----
 * Last Modified: Friday, 30th October 2020 4:36:51 pm
 * Modified By: Buwaneka (buwanekasumanasekara@gmail.com>)
 * --------------------------------------------------------------
 */

import { combineReducers } from 'redux';
import app from '@redux-states/app/reducer';


// Combine all
const appReducer = combineReducers({
  app
});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? {app:state.app} : state;

  return appReducer(newState, action);
};

export default rootReducer;
