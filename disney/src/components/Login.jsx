import  { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // Importa useHistory de React Router

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const history = useHistory(); // Obtiene el historial de navegación

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			// Realizar una solicitud HTTP para obtener los datos del usuario desde el archivo JSON local
			const response = await axios.get('/users.json');
			const users = response.data.users;

			// Verificar si existe un usuario con las credenciales proporcionadas
			const user = users.find(u => u.email === email && u.password === password);

			if (user) {
				// Si las credenciales son válidas, redirige al usuario a la página Home
				history.push('/Home');
			} else {
				setError('Credenciales inválidas');
			}
		} catch (error) {
			setError('Error al iniciar sesión');
			console.error('Error:', error);
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>Email:</label>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label>Password:</label>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				<button type="submit">Login</button>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
};

export default Login;

