import {createContext, useCallback, useState} from "react";
import axios from "axios";
import {apiKey} from "../api/Config";

export const MovieContext = createContext();

function MovieContextProvider(props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    const runSearch = useCallback(async (query) => {
        setLoading(true);
        setMovies([]);

        try {
            const url = 'https://api.themoviedb.org/3/search/movie?language=pt-BR&query=' + query;

            const config = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + apiKey // Sua chave completa aqui
                }
            };

            const response = await // Fazendo a chamada
                axios.get(url, config);

            setMovies(response.data.results || []);
        } catch (error) {
            console.error('Erro na requisição:', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return <>
        <MovieContext.Provider value={{movies, loading, runSearch}}>
            {props.children}
        </MovieContext.Provider>
    </>
}

export default MovieContextProvider;
