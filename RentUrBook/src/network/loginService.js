import { userLoginApi } from "../utils/ipaddr"; 
import { SALT } from "../utils/pwdcrypt";
var bcrypt = require('bcryptjs')

export const loginUser = async (usr, pwd) => {//remove ip everytime you commit for security
    try {
        // console.log("SALT", bcrypt.genSalt(30))
        // pwd = bcrypt.hashSync(pwd, SALT)
        // console.log("newPASS" + pwd)
        var url = userLoginApi+"?username="+usr+"&password="+pwd
        console.log("**********",url)
        const response = await fetch(url)      
        // .catch(error => {
        //     console.log("Fetch login error", error)
        //     return ""
        // })
       
        const json = await response.json()
        // fetch(url)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch( error)
        console.log("response", json);
        if (json == null || json.hasOwnProperty("error")){
            console.log("this")
            return {"noUser":true}
        }
        return json;
    } 
    catch (error) {
        console.error(error);
    }

}
