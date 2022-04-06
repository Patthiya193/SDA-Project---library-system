import { userLoginApi, getUserApi } from "../utils/ipaddr"; 
import { SALT } from "../utils/pwdcrypt";
var bcrypt = require('bcryptjs')
import axios from 'axios'

export const loginUser = async (usr, pwd) => {//remove ip everytime you commit for security
    
    // console.log("SALT", bcrypt.genSalt(30))
    // pwd = bcrypt.hashSync(pwd, SALT)
    // console.log("newPASS" + pwd)
    const response = await axios.get(userLoginApi, { params: {username: usr, password:pwd}})
    .catch(error => {
        // console.log("GET ERROR", error)
        return false
    })
    // console.log('GET Response is', response)
    // const json = await response.json()

    if ( response == false) {
        console.log( "GET json failed", response)

        return false
    }
    else {
        console.log( "GET json ", response.data)
        return response.data
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