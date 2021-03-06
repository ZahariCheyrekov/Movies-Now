import { useState } from 'react';

const useGenre = () => {
    const [genres] = useState([
        'All',
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Comedy',
        'Criminal',
        'Drama',
        'Family',
        'Fantasy',
        'Horror',
        'Mystery',
        'Romance',
        'Science Fiction',
        'Supernatural',
        'Thriller'
    ]);

    return genres;
}

export default useGenre;