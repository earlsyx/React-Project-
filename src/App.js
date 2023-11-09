import React from "react";
import { useEffect } from "react";



//const  API URL = 'http://www.omdbapi.com?apikey=c53d166a';
const API_URL = 'http://www.omdbapi.com?apikey=c53d166a';

const App = () => {
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.search);
    }

 

    useEffect(() => {
        searchMovies("Spiderman");
    },[]);
    return (
        <h1>App</h1>
    );
}

export default App;