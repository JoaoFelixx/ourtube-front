import { Card, Button } from './style';

export function FormLogin () {
	return (
		<Card>
			<form>
				<div className="top">
					<img src="./img/icon.svg" alt="Icon ourtube"/> 
					<h1>Fazer Login</h1>
				</div>
				<label>Email</label>
				<input type="email" placeholder="email"/><br/>
				<label>Senha</label>
				<input type="password" placeholder="*******"/><br />
				<div className="buttons">
					<Button color='#ff0000'>Cancelar</Button>
					<Button color='#019AFA'>Enviar</Button>
				</div>
			</form>
		</Card>
	)
}