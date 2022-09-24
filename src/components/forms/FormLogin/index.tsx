import React, { useState } from 'react';
import Ourtube from 'assets/icon.png';
import { api } from 'service';
import { toast } from 'react-toastify';
import { useSelectorApp } from 'Context/ApplicationProvider';
import { localizedStrings } from 'constants/localizedStrings';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Input, Button, DiscreteComponent } from './style';

interface FormType {
	isLogin?: boolean;
}

export function FormLogin({ isLogin }: FormType) {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);
	const [confPassword, setConfPassword] = useState<string | null>(null);
	const { setAuthenticated } = useSelectorApp();

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
				toast.warning(localizedStrings.isNotSamePassword);
				return
			}

			await api.post('/users', user);

			toast.success(localizedStrings.registeredWithSuccessful);

			setTimeout(() => navigate('/login'), 2000);

		} catch (error) {
			toast.error(localizedStrings.errorRegistering);
		}
	}

	return (
		<Card>
			<form onSubmit={onSubmit} >
				<div className="top">
					<img src={Ourtube} alt="Icon ourtube" />
					<h1 style={{ marginLeft: '4px' }}>
						{isLogin ? localizedStrings.makeLogin : localizedStrings.register}
					</h1>
				</div><br />
				<label>{localizedStrings.email}</label>
				<Input
					type="email"
					required
					onChange={(event) => setEmail(event.target.value)}
					placeholder="username@user.com" /><br /><br />
				<label>{localizedStrings.password}</label>
				<Input
					type="password"
					required
					onChange={(event) => setPassword(event.target.value)}
					placeholder="*******" /><br /><br />

				{!isLogin && (
					<React.Fragment>
						<label>{localizedStrings.confPassword}</label>
						<Input
							type="password"
							required
							onChange={(event) => setConfPassword(event.target.value)}
							placeholder="*******" /><br /><br />
					</React.Fragment>
				)}
				<div className="buttons">
					<Button color='#019AFA'>{localizedStrings.send}</Button>
					<Button type="reset" color='#ff0000'>{localizedStrings.cancel}</Button>
				</div>
				<DiscreteComponent>
					{isLogin ?
						<Link to='/register'>Não possui conta ?</Link> :
						<Link to='/login'>Já possui conta ?</Link>
					}
				</DiscreteComponent>
			</form>
		</Card>
	)
}