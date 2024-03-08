
import Header from './Header';
import ProductionHouse from './ProductionHouse';
import Slider from './Slider';
import ContentCategory from './ContentCategory';

const Home = () => {

	return (
		<div className='mx-auto px-4 sm:px-6 lg:px-8'>
			<Header />
			<Slider />
			<ProductionHouse />
			<ContentCategory />
		</div>
	)
}

export default Home
