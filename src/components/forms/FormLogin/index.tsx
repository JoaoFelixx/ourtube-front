import React, { useState } from 'react';
import Ourtube from 'assets/icon.png';
import { api } from 'service';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelectorAuth } from 'Context/AuthProvider';
import { Card, Input, Button } from './style';

interface FormType {
	isLogin?: boolean;
}

export function FormLogin({ isLogin }: FormType) {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);
	const [confPassword, setConfPassword] = useState<string | null>(null);
	const { setAuthenticated } = useSelectorAuth();

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		try {
			event.preventDefault();

			const user = { email, password };

			if (isLogin) {
				const { data: { token } } = await api.post('/auth', user);

				localStorage.setItem('ourtube_token', JSON.stringify(token));

				setAuthenticated?.(true);

				navigate('/');

				return
			}

			if (password !== confPassword) {
				toast.warning('Senhas não são iguais');
				return
			}

			await api.post('/users', user);

			toast.success('Cadastrado com sucesso');

			setTimeout(() => navigate('/login'), 2000);

		} catch (error) {
			toast.error('Erro ao efetuar processo');
		}
	}

	return (
		<Card>
			<form onSubmit={onSubmit} >
				<div className="top">
					<img src={Ourtube} alt="Icon ourtube" />
					<h1 style={{ marginLeft: '4px' }}>{isLogin ? 'Fazer Login' : 'Registre-se'}</h1>
				</div><br />
				<label>Email</label>
				<Input
					type="email"
					required
					onChange={(event) => setEmail(event.target.value)}
					placeholder="username@user.com" /><br /><br />
				<label>Senha</label>
				<Input
					type="password"
					required
					onChange={(event) => setPassword(event.target.value)}
					placeholder="*******" /><br /><br />

				{!isLogin && (
					<React.Fragment>
						<label>Confirmação de senha</label>
						<Input
							type="password"
							required
							onChange={(event) => setConfPassword(event.target.value)}
							placeholder="*******" /><br /><br />
					</React.Fragment>
				)}
				<div className="buttons">
					<Button color='#019AFA'>Enviar</Button>
					<Button type="reset" color='#ff0000'>Cancelar</Button>
				</div>
			</form>
		</Card>
	)
}