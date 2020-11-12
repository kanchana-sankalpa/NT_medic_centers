/*
 * File: common.js
 * File Created: Thursday, 12th November 2020 3:39:25 pm
 * Author: Buwaneka (buwanekasumanasekara@gmail.com)
 * -----
 * Last Modified: Thursday, 12th November 2020 3:39:25 pm
 * Modified By: Buwaneka (buwanekasumanasekara@gmail.com>)
 * --------------------------------------------------------------
 */


async function getAllMedicalCenters() {
    return fetch(`https://covid19-healthylk.herokuapp.com/api/medical`, {
        timeout: 7000,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}

export default {
    getAllMedicalCenters
};