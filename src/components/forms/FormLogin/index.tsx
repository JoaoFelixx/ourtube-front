import { Card } from './style';

export function FormLogin () {
	return (
		<Card>
			<form>
				<h1> Fazer Login </h1><br />
				<label>Email</label>
				<input type="email" placeholder="email"/>
				<label>Senha</label>
				<input type="password" placeholder="*******"/>
				<div>
					<button>Enviar</button>
					<button>Cancelar</button>
				</div>
			</form>
		</Card>
	)
}