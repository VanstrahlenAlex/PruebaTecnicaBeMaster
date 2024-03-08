
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


function App() {


	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} /> {/* Login at root path */}
					<Route path="/home" element={<Home />} /> {/* Home at /home path */}
					{/* Add other routes here if needed */}
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
