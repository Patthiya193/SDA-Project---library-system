
export const getUser = async () => {
    try {
        const response = await fetch(userUrl);
        const json = await response.json();
        return json.movies;
    } 
    catch (error) {
        console.error(error);
    }

}
