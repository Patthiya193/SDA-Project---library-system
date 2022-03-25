import { useState } from "react";

const userUrl = "localhost:8080/api/v1/user";

export const getUser = async () => {
    // const [data, setData] = useState([]);
    try {
        const response = await fetch(userUrl);
        const json = await response.json();
        return json.movies;
    } 
    catch (error) {
        console.error(error);
    }

}
