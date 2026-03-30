import {useEffect, useState} from "react";
import PoweredBy from "./PoweredBy";

function Movies({data}) {

    const movies = data;
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (selectedMovie) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedMovie]);

    function formatRating(voteAverage) {
        if (typeof voteAverage !== 'number') {
            return 'N/A';
        }

        return voteAverage.toFixed(1);
    }

    function formatDate(dateString) {
        if (!dateString) {
            return '--';
        }

        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

    return (
        <div>
            <div className="results-grid">
                {movies.length > 0 && movies.map((movie) => (
                    <article
                        className="result-card result-card-clickable"
                        key={movie.id}
                        onClick={() => setSelectedMovie(movie)}
                    >
                        { movie.poster_path && <img
                            src={`https://image.tmdb.org/t/p/w500`+movie.poster_path}
                            alt={movie.original_title || null}
                        />}
                        <div className="result-card-content">
                            <p>{movie.original_title}</p>
                            <span className="result-card-rating">⭐ {formatRating(movie.vote_average)}</span>
                        </div>
                    </article>

                ))}
            </div>

            {selectedMovie ? (
                <div className="movie-modal-overlay" onClick={() => setSelectedMovie(null)}>
                    <div className="movie-modal" onClick={(event) => event.stopPropagation()}>
                        <button
                            type="button"
                            className="movie-modal-close"
                            onClick={() => setSelectedMovie(null)}
                            aria-label="Fechar modal"
                        >
                            X
                        </button>
                        <h2>{selectedMovie.original_title}</h2>
                        <p className="movie-modal-overview">
                            {selectedMovie.overview || 'Sem descrição disponível.'}
                        </p>
                        <div className="movie-modal-info">
                            <span>⭐ {formatRating(selectedMovie.vote_average)}</span>
                            <span>Lançamento: {formatDate(selectedMovie.release_date)}</span>
                        </div>
                    </div>
                </div>
            ) : null}
            <PoweredBy />
        </div>
    )
}
export default Movies;
