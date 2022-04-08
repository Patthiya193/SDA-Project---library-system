import { userLoginApi, getUserApi, registerUserApi, getUserByIdApi, checkUserNameApi } from "../utils/ipaddr"; 
import { SALT } from "../utils/pwdcrypt";
var bcrypt = require('bcryptjs')
import axios from 'axios'

export const loginUser = async (usr, pwd) => {
    
    // console.log("SALT", bcrypt.genSalt(30))
    // pwd = bcrypt.hashSync(pwd, SALT)
    // console.log("newPASS" + pwd)
    const returnResp = await axios.get(userLoginApi, { params: {username: usr, password:pwd}})
    .then(response => {
        return response
    })
    .catch(error => {
        // console.log("GET ERROR", error)
        return false
    })
    // console.log('GET Response is', response)
    // const json = await response.json()

    if ( returnResp == false) {
        console.log( "GET json failed", returnResp)

        return returnResp
    }
    else {
        console.log( "GET json ", returnResp.data)
        return returnResp.data
    }



}

export const getUser = async () => {
     //remove ip everytime you commit for security
    
    try {
        const response = await fetch(getUserApi);
        const json = await response.json();
        console.log(json);
        return json;
    } 
    catch (error) {
        console.error(error);
    }
}

export const registerUser = (newUserData) => {
    axios.post(registerUserApi, newUserData).catch(error => console.error(error))
    
}

export const checkUserName = async (inUserName) => {
    const returnResp = await axios.get(checkUserNameApi, { params: {username:inUserName}})
    .then(response => {
        return response
    })
    .catch(error => {
        // console.log("GET ERROR", error)
        return false
    })
    // console.log('GET Response is', response)
    // const json = await response.json()

    
    console.log( "GET check username json ", returnResp.data)
    return returnResp.data
    
}