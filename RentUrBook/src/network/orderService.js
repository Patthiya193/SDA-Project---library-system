import { getAllOrderApi, createOrderApi, returnBookApi } from "../utils/ipaddr"
import { SALT } from "../utils/pwdcrypt";
var bcrypt = require('bcryptjs')
import axios from 'axios'

export const getAllOrder = async () => {
    const returnResp = await axios.get(getAllOrderApi)
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

export const createOrder = (newOrder) => {
    axios.post(createOrderApi, newOrder).catch(error => console.error(error))
}


export const returnBook = (oId) => {

    axios.get(borrowBookApi,{ params: {orderId:oId}})
    // .then(response => {
    //     return response
    // })
    .catch(error => {
        // console.log("GET ERROR", error)
        console.error(error)
    })
   
}
