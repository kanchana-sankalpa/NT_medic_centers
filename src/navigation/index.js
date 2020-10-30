/*
 * File: index.js
 * File Created: Friday, 30th October 2020 4:29:37 pm
 * Author: Buwaneka (buwanekasumanasekara@gmail.com)
 * -----
 * Last Modified: Friday, 30th October 2020 4:29:38 pm
 * Modified By: Buwaneka (buwanekasumanasekara@gmail.com>)
 * --------------------------------------------------------------
 */
import React from 'react';
import { Actions, Scene, Stack, Tabs } from 'react-native-router-flux';

import Home from '@containers/Home';


/* Routes ==================================================================== */
export default Actions.create(
    <Stack key={'root'} hideNavBar navTransparent={true}>
        <Scene
            initial
            title={"test"}
            key={'home'}
            component={Home}
            headerLayoutPreset="center"
        />

    </Stack>


);