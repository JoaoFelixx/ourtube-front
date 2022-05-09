import { Nav, Div, Menu, FixedContainer } from './style';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { FaRegCompass } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { MdVideoLibrary, MdHistory } from 'react-icons/md';

function SideNav() {
	return (
		<Nav>
			<FixedContainer><br/>
				<Menu>
					<AiOutlineMenu size="26px" />
				</Menu><br />
				<Div>
					<AiFillHome size="24px" /><br />
					Inicio
				</Div>
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