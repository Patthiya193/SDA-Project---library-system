import { getAllBookApi } from "../utils/ipaddr"; 
import { SALT } from "../utils/pwdcrypt";
var bcrypt = require('bcryptjs')
import axios from 'axios'

export const getAllBook = async () => {
    const returnResp = await axios.get(getAllBookApi)
    .then(response => {
        return response
    })
    .catch(error => {
        // console.log("GET ERROR", error)
        return []
    })
    // console.log('GET Response is', response)
    // const json = await response.json()

    
    //console.log( "GET all book json ", returnResp.data)
    return returnResp.data
}
