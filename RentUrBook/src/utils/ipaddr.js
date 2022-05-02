const ip = ""

export const userLoginApi = `http://${ip}:8080/api/v1/user/login/`;
export const getUserApi = `http://${ip}:8080/api/v1/user`;
export const registerUserApi = `http://${ip}:8080/api/v1/user`;
export const getUserByIdApi = `http://${ip}:8080/api/v1/user/id/`;
export const checkUserNameApi = `http://${ip}:8080/api/v1/user/checkusername/`;
export const addFavApi = `http://${ip}:8080/api/v1/user/addfav/`;
export const removeFavApi = `http://${ip}:8080/api/v1/user/removefav/`;
export const getFavBookApi = `http://${ip}:8080/api/v1/user/favbook/`;

export const getAllBookApi = `http://${ip}:8080/api/v1/book`;
export const getBookByIdApi = `http://${ip}:8080/api/v1/book/id/`;
export const borrowBookApi = `http://${ip}:8080/api/v1/book/borrow/`;
export const searchBookApi = `http://${ip}:8080/api/v1/book/name/`;
export const addBookApi = `http://${ip}:8080/api/v1/book`;
export const editBookApi = `http://${ip}:8080/api/v1/book/edit`;
export const deleteBookApi = `http://${ip}:8080/api/v1/book`;

export const getAllOrderApi = `http://${ip}:8080/api/v1/order`;
export const createOrderApi = `http://${ip}:8080/api/v1/order`;
export const returnBookApi = `http://${ip}:8080/api/v1/order/return/`;