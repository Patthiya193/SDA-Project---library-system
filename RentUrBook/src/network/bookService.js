import { getAllBookApi, borrowBookApi, searchBookApi } from "../utils/ipaddr"; 
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

export const searchBook = async (book) => {
    const returnResp = await axios.get(searchBookApi, {params:{bookName:book}})
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

export const borrowBook = (bkId, usrId) => {
    console.log("type: ", typeof bkId,typeof usrId)

    axios.get(borrowBookApi,{ params: {bookId:bkId, callerId:usrId}})
    // .then(response => {
    //     return response
    // })
    .catch(error => {
        // console.log("GET ERROR", error)
        console.error(error)
    })
    // const returnResp = axios.patch(borrowBookApi,{ params: {bookId:bkId, callerId:usrId}})
    // .then(response => {
    //     return response
    // })
    // .catch(error => {
    //     // console.log("GET ERROR", error)
    //     return []
    // })
    // console.log('GET Response is', response)
    // const json = await response.json()

    
    //console.log( "GET all book json ", returnResp.data)
    // return returnResp.data
}
