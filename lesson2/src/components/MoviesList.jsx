import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Batman Begins', genre: 'Action', description: 'The origin story of the Dark Knight' },
        { title: 'The Matrix', genre: 'Action', description: 'Red or blue pill' },
        { title: 'Deadpool', genre: 'Comedy', description: 'A wisecracking superhero fights crime' },
        { title: 'Titanic', genre: 'Romance', description: 'A tragic love story' },
    ])

    const [showGenre, setShowGenre] = useState('All');
    const [showDetails, setShowDetails] = useState({});


    const toggleDetails = (index) => {
        setShowDetails((prevDetails) => ({
            ...prevDetails,
            [index]: !prevDetails[index],
        }));
    };

    const removeMovie = (index) => {
        setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
    };

    const toggleGenreView = () => {
        setShowGenre((prevGenre) => (prevGenre === 'All' ? 'Action' : 'All'));
    };

    const filteredMovies = showGenre === 'All' ? movies : movies.filter(movie => movie.genre === 'Action');

    return (
        <div>
            <h2>Movies List</h2>

            <button onClick={toggleGenreView}>
                {showGenre === 'All' ? 'Show Action Movies' : 'Show All Movies'}
            </button>

            <ul>
                {filteredMovies.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                            {movie.title}
                        </span>

                        {showDetails[index] && <p>{movie.description}</p>}

                        <button onClick={() => removeMovie(index)} style={{ marginLeft: '10px' }}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;