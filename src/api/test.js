//const API_CONFIG.DEFAULT_TIMEOUT= 7000

async function testAPIFun1(token,obj) {
    return fetch(`https://covid19-healthylk.herokuapp.com/api/medical`, {
        timeout: 7000,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body:JSON.stringify(obj)
    });
}

async function testAPIFun2(token) {
    return fetch(`https://covid19-healthylk.herokuapp.com/api/medical`, {
        timeout: 7000,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });
}


export default {
    testAPIFun2,testAPIFun1
};