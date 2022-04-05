import { userLoginApi } from "../utils/ipaddr"; 

export const getUser = async () => {//remove ip everytime you commit for security
    
    try {
        const response = await fetch(userLoginApi);
        const json = await response.json();
        // console.log(json);
        return json;
    } 
    catch (error) {
        console.error(error);
    }

}
