import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie.js';

function App() {
    const [movies, setMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchMoviesHandler = React.useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://swapi.dev/api/films');
            if (!response.ok) {
                setError('Something went wrong');
                setIsLoading(false);
                return;
            }

            const responseData = await response.json();

            const moviesData = responseData.results.map((movie) => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    openingText: movie.opening_crawl,
                    releaseDate: movie.release_date,
                };
            });

            setMovies(moviesData);
        } catch (error) {
            setError(error.message);
            console.log(error);
        }

        setIsLoading(false);
    });

    React.useEffect(() => {
        fetchMoviesHandler();
    }, []);

    function addMovieHandler(movie) {
        console.log(movie);
    }

    let content = <p>Found no movies.</p>;

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
