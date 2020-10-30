/*
 * File: index.js
 * File Created: Friday, 30th October 2020 4:26:03 pm
 * Author: Buwaneka (buwanekasumanasekara@gmail.com)
 * -----
 * Last Modified: Friday, 30th October 2020 4:26:03 pm
 * Modified By: Buwaneka (buwanekasumanasekara@gmail.com>)
 * --------------------------------------------------------------
 */


import React,{useEffect} from 'react';
import { Router } from 'react-native-router-flux';


// Consts and Libs
import AppRoutes from '@navigation/';

//Redux
import { connect, Provider } from 'react-redux';
import configureStore from './configureStore';




const { store } = configureStore();

// Connect RNRF with Redux
const RouterWithRedux = connect()(Router);



/* Component ==================================================================== */
// Wrap App in Redux provider (makes Redux available to all sub-components)
export default function AppContainer() {
  return (
    <Provider store={store}>
          <RouterWithRedux navigator={AppRoutes} />
    </Provider>
  );
}