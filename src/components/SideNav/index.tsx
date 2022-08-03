import { Link } from 'react-router-dom';
import { FiYoutube } from 'react-icons/fi';
import { FaRegCompass } from 'react-icons/fa';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { MdVideoLibrary, MdHistory } from 'react-icons/md';
import { Nav, Div, Menu, FixedContainer } from './style';

function SideNav() {
	return (
		<Nav>
			<FixedContainer><br />
				<Menu>
					<AiOutlineMenu size="26px" />
				</Menu><br />
				<Link style={{ textDecoration: 'none' }} to='/'>
					<Div>
						<AiFillHome size="24px" /><br />
						Inicio
					</Div>
				</Link>
				<Div>
					<FaRegCompass size="24px" /><br />
					Explorar
				</Div>
				<Div>
					<FiYoutube size="24px" /><br />
					Shorts
				</Div>
				<Div>
					<BsCollectionPlayFill size="24px" /><br />
					Inscrições
				</Div>
				<Div>
					<MdVideoLibrary size="28px" /><br />
					Biblioteca
				</Div>
				<Div>
					<MdHistory size="30px" /><br />
					Histórico
				</Div>
			</FixedContainer>
		</Nav>
	)
}

export default SideNav;