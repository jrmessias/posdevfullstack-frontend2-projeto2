import {useContext, useEffect} from "react";
import {MovieContext} from "../context/MovieContext";
import Loader from "./Loader";
import Movies from "./Movies";
import PoweredBy from "./PoweredBy";

function Container({searchTerm}){

    const {movies, loading, runSearch} = useContext(MovieContext);

    useEffect(() => {
        runSearch(searchTerm);
    }, [runSearch, searchTerm])

    return (
        <div className="results">
            {loading && <Loader />}
            {!loading && movies.length ? <p>Resultados para <strong>"{searchTerm}"</strong>:</p> : ''}
            {!loading && !movies.length ? <p>Nenhum resultado para <strong>"{searchTerm}"</strong>.</p> : ''}
            <Movies data={movies} />
        </div>
    )
}

export default Container;
