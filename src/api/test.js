

async function testAPIFun1(token,obj) {
    return fetch(`https://yourdomain/api/test`, {
        timeout: API_CONFIG.DEFAULT_TIMEOUT,
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
    return fetch(`https://yourdomain/api/test`, {
        timeout: API_CONFIG.DEFAULT_TIMEOUT,
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