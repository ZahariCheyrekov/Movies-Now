import './CardDetails.css';

import React from 'react';
import ReactPlayer from 'react-player/youtube';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCardById } from '../../services/movieService';
import Spinner from '../Spinner/Spinner';

const CardDetails = () => {
    const [loading, setLoading] = useState(false);
    const { movieCardId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 500);

        getMovie();
    }, []);

    const getMovie = async () => {
        const movieById = await getMovieCardById(movieCardId);
        setMovie(movieById);
    }

    return (
        <>
            {loading
                ? <Spinner />
                : <>
                    <article className="movie-card-details">
                        <article className="mv-card-img-d">
                            <img src={movie.imageUrl} alt="Movie Poster" />
                        </article>

                        <section className="mv-card-details-info dt-el">
                            <h2 className="mv-card-ttl">
                                {movie.title} ({movie.year})
                            </h2>
                            <h3 className="mv-card-type dt-el">
                                {movie.type}
                            </h3>

                            <h3 className="mv-card-overview">Overview</h3>
                            <p className="mvs-card-description dt-el" >
                                {movie.description}
                            </p>
                        </section>
                    </article>

                    <section className="mv-dtls-video">
                        ? <ReactPlayer
                            url={movie.trailerUrl}
                        />
                    </section>
                </>
            }
        </>
    );
}

export default CardDetails;