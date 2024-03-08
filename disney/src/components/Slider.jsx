import { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
	const [movielist, setMovielist] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const sliderRef = useRef(null);

	useEffect(() => {
		getTrendingMovies();
	}, []);

	const getTrendingMovies = async () => {
		try {
			const resp = await GlobalApi.getTrendingVideos();
			setMovielist(resp.data.results);
		} catch (error) {
			console.error('Error fetching trending movies:', error);
		}
	};

	const handlePrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
			sliderRef.current.scroll({
				left: (currentIndex - 1) * sliderRef.current.clientWidth,
				behavior: 'smooth',
			});
		}
	};

	const handleNext = () => {
		if (currentIndex < movielist.length - 1) {
			setCurrentIndex(currentIndex + 1);
			sliderRef.current.scroll({
				left: (currentIndex + 1) * sliderRef.current.clientWidth,
				behavior: 'smooth',
			});
		}
	};

	return (
		<>
			<div>
				<HiChevronLeft onClick={handlePrev} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer' />
				<HiChevronRight onClick={handleNext} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer right-0' />

				<div className='flex overflow-hidden w-full px-16 py-4 scrollbar-none' ref={sliderRef}>
					{movielist.map((item, index) => (
						<img
							key={index}
							src={IMAGE_BASE_URL + item.backdrop_path}
							className='min-w-full h-[600px] object-cover object-left-top rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
							style={{ maxWidth: sliderRef.current?.clientWidth || '100%', marginRight: '10px' }} // Set max-width to prevent overlapping
						/>


					))}
				</div>
			</div>
		</>
	);
};

export default Slider;

// import { useEffect, useRef, useState } from 'react'
// import GlobalApi from '../Services/GlobalApi'
// import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
// const screenWidth = window.innerWidth;

// const Slider = () => {

// 	const [movielist, setMovielist] = useState([]);
// 	const elemtRef = useRef();

// 	useEffect(() => {
// 		getTrendingMovies();
// 	}, [])

// 	const getTrendingMovies = () => {
// 		GlobalApi.getTrendingVideos()
// 			.then(resp => {
// 				//console.log(resp);
// 				//console.log(resp.data.results);
// 				setMovielist(resp.data.results)

// 			})
// 			.catch(error => {
// 				console.error('Error fetching trending movies:', error);
// 			});
// 	}

// 	const sliderRight = (element) => {
// 		element.scrollLeft += screenWidth - 110
// 	}
// 	const sliderLeft = (element) => {
// 		element.scrollLeft -= screenWidth - 110
// 	}

// 	return (
// 		<>
// 			<div>
// 				<HiChevronLeft onClick={() => sliderLeft(elemtRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer' />
// 				<HiChevronRight onClick={() => sliderRight(elemtRef.current)} className='hidden md:block text-white text-[30px] absolute mx-8 mt-[300px] cursor-pointer right-0' />

// 				<div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elemtRef}>
// 					{movielist.map((item, index) => (
// 						<img key={index} src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full h-[600px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
// 					))}
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default Slider
