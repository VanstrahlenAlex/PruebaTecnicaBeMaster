
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Profile from './components/Profile';
import { MovieProvider } from './Context/MovieContext';

function App() {


	return (
		<>
			<MovieProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} /> {/* Login at root path */}
						<Route path="/home" element={<Home />} /> {/* Home at /home path */}
						{/* Add other routes here if needed */}
						<Route path='/Profile' element={<Profile/>} />
					</Routes>
				</BrowserRouter>
			</MovieProvider>
		</>
	)
}

export default App
