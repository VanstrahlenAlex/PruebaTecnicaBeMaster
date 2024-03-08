import { useState } from 'react';
import logo from './../assets/images/logo.png';
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import { useNavigate } from 'react-router-dom';


const Header = () => {

	const [toggle, setToggle] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const navigate = useNavigate();
	const user = localStorage.getItem('user');

	const menu = [
		{
			name: 'HOME',
			icon: HiHome
		},
		{
			name: 'SEARCH',
			icon: HiMagnifyingGlass
		},
		{
			name: 'WATCH LIST',
			icon: HiPlus
		},
		{
			name: 'ORIGINALS',
			icon: HiStar
		},
		{
			name: 'MOVIES',
			icon: HiPlayCircle
		},
		{
			name: 'SERIES',
			icon: HiTv
		}
	]

	const handleAvatarClick = () => {
		setShowOptions(!showOptions);
	};

	const handleLogout = () => {

		navigate('/');
		localStorage.removeItem('user');
	};

	const handleSettings = () => {
		navigate('/Profile');
		console.log('Configuración del perfil');
	};

	return (
		<div className='flex items-center justify-between p-5'>
			<div className='flex gap-8 items-center '>
				<img src={logo} className=' w-[80px] md:w-[115px] object-cover' />
				<div className='hidden md:flex gap-8'>
					{menu.map((item) => (
						<HeaderItem name={item.name} Icon={item.icon} />
					))}
				</div>
				<div className='flex md:hidden gap-5'>
					{menu.map((item, index) => index < 3 && (
						<HeaderItem name={''} Icon={item.icon} />
					))}
					<div className='md:hidden' onClick={() => setToggle(!toggle)}>
						<HeaderItem name={''} Icon={HiDotsVertical} />
						{toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
							{menu.map((item, index) => index > 2 && (
								<HeaderItem name={item.name} Icon={item.icon} />
							))}
						</div> : null}
					</div>
				</div>
			</div>

			<div className='relative'>
				<img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' className='w-10 rounded-full cursor-pointer' alt="User Avatar" onClick={handleAvatarClick} />
				{showOptions ? <div className='absolute right-3 mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4'>
					<div className='m-2 p-2'><p className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
					</svg>
						<span>{user}</span></p></div>
					<div className=''>
						<button onClick={handleSettings} className='mb-2 flex gap-2 w-full'>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
							</svg>
							Settings
						</button>
						<button onClick={handleLogout} className=' mb-2 flex gap-2 w-full'>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
							</svg>
							Logout</button>
					</div>
				</div> : null}
			</div>

		</div>
	)
}

export default Header
