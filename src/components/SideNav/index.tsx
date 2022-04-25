import { Nav, Icon ,FixedContainer } from './style';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { FaRegCompass } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { MdVideoLibrary, MdHistory } from 'react-icons/md';

function SideNav() {
	return (
		<Nav>
			<FixedContainer>
				<br />
				<Icon>
					<AiOutlineMenu size="26px"/>
				</Icon> <br/>
				<Icon>
					<AiFillHome size="24px"/><br />
					Inicio
				</Icon> <br/>
				<Icon>
					<FaRegCompass size="24px"/><br />
					Explorar
				</Icon> <br />
				<Icon>
					<FiYoutube size="24px"/><br />
					Shorts
				</Icon> <br />
				<Icon>
					<BsCollectionPlayFill size="24px"/><br />
					Inscrições
				</Icon> <br />
				<Icon>
					<MdVideoLibrary size="28px"/><br />
					Biblioteca
				</Icon> <br />
				<Icon>
					<MdHistory size="30px"/><br />
					Histórico
				</Icon> <br />
				
			</FixedContainer>
		</Nav>
	)
} 

export default SideNav;