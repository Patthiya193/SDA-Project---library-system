import { getAllBookApi, borrowBookApi, searchBookApi, getBookByIdApi, addBookApi, editBookApi, deleteBookApi } from "../utils/ipaddr"; 
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

export const getBookById = async (book) => {
    const returnResp = await axios.get(getBookByIdApi, {params:{bookId:book}})
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

export const reserveBook = (bkId, usrId, usrName) => {
    console.log("type: ", typeof bkId,typeof usrId)

    axios.get(borrowBookApi,{ params: {bookId:bkId, callerId:usrId, callerName:usrName}})
    // .then(response => {
    //     return response
    // })
    .catch(error => {
        // console.log("GET ERROR", error)
        console.error(error)
    })
}

export const addBook = (newBook) => {
    axios.post(addBookApi, newBook).catch(error => console.error(error))
}

export const editBook = (newBook) => {
    axios.put(editBookApi, newBook).catch(error => console.error(error))
}


export const deleteBook = (id) => {
    axios.delete(deleteBookApi, {params:{bookId:id}}).catch(error => console.error(error))
}