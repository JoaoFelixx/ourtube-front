import React, { useState } from 'react';
import { Card, Button } from './style';

export function FormLogin () {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null)

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(email);
		console.log(password);
	}

	return (
		<Card>
			<form onSubmit={onSubmit} >
				<div className="top">
					<h1>Fazer Login</h1>
					<img src="./img/icon.svg" alt="Icon ourtube"/> 
				</div>
				<label>Email</label>
				<input 
					type="email" 
					required
					onChange={(event) => setEmail(event.target.value)}
					placeholder="username@user.com" /><br/><br/>
				<label>Senha</label>
				<input 
					type="password"
					required
					onChange={(event) => setPassword(event.target.value)} 
					placeholder="*******"/><br /><br/>
				<div className="buttons">
					<Button type="submit" color='#ff0000'>Cancelar</Button>
					<Button type="reset" color='#019AFA'>Enviar</Button>
				</div>
			</form>
		</Card>
	)
}