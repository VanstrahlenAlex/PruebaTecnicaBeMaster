// ContentDetails.jsx
import React from 'react';
import { useMovieContext } from '../Context/MovieContext';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const ContentDetails = ({ movie }) => {
	const { selectedMovie, setSelectedMovie } = useMovieContext();

	const closeModal = () => {
		setSelectedMovie(null);
	};

	if (!selectedMovie) return null;

	return (
		<div className="modal absolute right-3 mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 rounded-xl">
			<button onClick={closeModal} className='absolute top-2 right-2 p-2 m-2 rounded-full bg-red-600 text-white hover:bg-red-700 focus:outline-none'>X</button>
			<div className="modal-content p-2">
				<h2 className='text-2xl font-bold text-slate-600'>Name: <span className='text-white'>{selectedMovie.original_title}</span></h2>
				<p className='text-2xl font-bold text-slate-600'> Description: <span className='text-white'>{selectedMovie.overview}</span> </p>
				<p className='text-2xl font-bold text-slate-600'>Release Date: <span className='text-white'>{selectedMovie.release_date}</span></p>
				<p className='text-2xl font-bold text-slate-600'>Vote Average: <span className='text-white'>{selectedMovie.vote_average} </span></p>

			</div>
		</div>
	);
};

export default ContentDetails;
