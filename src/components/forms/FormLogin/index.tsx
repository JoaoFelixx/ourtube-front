import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Input, Button } from './style';
import { useSelectorAuth } from 'Context/AuthProvider';
import { api } from 'service';
import { toast } from 'react-toastify';
const ourtube = require('../../../assets/icon.png');

export function FormLogin () {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);
	const { setAuthenticated } = useSelectorAuth();
	const navigate = useNavigate();

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();

			const user = { email, password };

			const { data: { token } } = await api.post('/auth', user);

			localStorage.setItem('ourtube_token', token);

			setAuthenticated?.(true);

			navigate('/');

			window.location.reload();

		} catch (error) {
			toast.error('Erro')
		}
	}

	return (
		<Card>
			<form onSubmit={onSubmit} >
				<div className="top">
					<img src={ourtube} alt="Icon ourtube"/> 
					<h1 style={{ marginLeft: '4px' }}>Fazer Login</h1>
				</div><br/>
				<label>Email</label>
				<Input 
					type="email" 
					required
					onChange={(event) => setEmail(event.target.value)}
					placeholder="username@user.com" /><br/><br/>
				<label>Senha</label>
				<Input 
					type="password"
					required
					onChange={(event) => setPassword(event.target.value)} 
					placeholder="*******"/><br /><br/>
				<div className="buttons">
					<Button color='#019AFA'>Enviar</Button>
					<Button type="reset" color='#ff0000'>Cancelar</Button>
				</div>
			</form>
		</Card>
	)
}