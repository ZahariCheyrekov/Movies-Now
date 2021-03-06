import React from 'react';

import './Movies.css';

import { useState, useEffect } from 'react';

import { getAllMovies } from '../../services/movieService';
import { getMoviesByData } from '../../utils/movieUtil';

import MovieBox from '../MovieBox/MovieBox';
import MovieGenres from './MovieGenres/MovieGenres';
import MovieList from './MovieList/MovieList';
import Spinner from '../Spinner/Spinner';

const Movies = () => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('All');

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        getMovies();
    }, []);

    const searchMovies = async (title) => {
        const moviesByTitle = await getMoviesByData(title, 'title');
        setMovies(moviesByTitle);
    }

    const getMovies = async () => {
        const moviesDb = await getAllMovies();
        setMovies(Object.entries(moviesDb));
    }

    return (
        <>
            <MovieBox />

            <div className="container">
                <label htmlFor="movie-title" className="title-movie-srch-lable">
                    <input type="text" className="title-mv-srch" name="title"
                        placeholder="Title" />
                    <i className="fa-solid fa-magnifying-glass"
                        onClick={(ev) => {
                            ev.preventDefault();
                            const value = ev.target.previousSibling.value;
                            searchMovies(value);
                        }}
                    >
                    </i>
                </label>

                <section className="genre-options"
                    onClick={() => setIsActive(!isActive)}
                >
                    {selected}
                    <i className="fa-solid fa-caret-down"></i>

                    <MovieGenres
                        selected={selected}
                        setSelected={setSelected}
                        setMovies={setMovies}
                        isActive={isActive}
                        getMovies={getMovies}
                    />

                </section>
            </div>

            {loading
                ? <Spinner />
                : <MovieList movies={movies} />
            }
        </>
    );
}

export default Movies;