import { FormLogin } from 'components';
import { useLocation } from 'react-router-dom';

export function Login() {
	const { pathname } = useLocation();
	const isLogin = pathname === '/login';

	return (
		<FormLogin isLogin={isLogin} />
	)
}