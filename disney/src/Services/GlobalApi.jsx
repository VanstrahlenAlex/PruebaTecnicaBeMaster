import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = 'af0e4447296f23a2890461223081d84e';
//https://api.themoviedb.org/3/movie/157336?api_key=af0e4447296f23a2890461223081d84e
//https://api.themoviedb.org/3/trending/all/day?api_key=af0e4447296f23a2890461223081d84e


const getTrendingVideos = () => {
	return axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
}

const getMovieByGenreId = (id) => {
	return axios.get(movieByGenreBaseURL + "&with_genres=" + id)
}
	


export default {
	getTrendingVideos,
	getMovieByGenreId
}