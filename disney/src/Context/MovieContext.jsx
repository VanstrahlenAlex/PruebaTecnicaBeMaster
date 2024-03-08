// MovieContext.js
import React, { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
            {children}
        </MovieContext.Provider>
    );
};
