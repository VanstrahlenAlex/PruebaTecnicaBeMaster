import React, { useState } from 'react'
import { useMovieContext } from '../Context/MovieContext';
import ContentDetails from './ContentDetails';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {

	const { setSelectedMovie } = useMovieContext();
	const [showMovieInfo, setshowMovieInfo] = useState(false);

	const movieSelect = () => {
		console.log("movie select");
		console.log(movie.id); //id de la pelicula
		console.log(movie.original_title); // nombre de la pelicula
		console.log(movie.overview); // descripcion
		console.log(movie.release_date); // Fecha de lanzamiento
		console.log(movie.vote_average); // Votos del publico 
		setSelectedMovie(movie);
		setshowMovieInfo(!showMovieInfo);
	}
	return (
		<>

			<img src={IMAGE_BASE_URL + movie.poster_path} onClick={movieSelect} id={movie.id} alt={movie.original_title} className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer' />
			<div>
				{showMovieInfo && <ContentDetails movie={movie} />}
			</div>
		</>
	)
}

export default MovieCard