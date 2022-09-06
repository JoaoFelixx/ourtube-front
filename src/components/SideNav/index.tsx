import { toast } from 'react-toastify';
import { FiYoutube } from 'react-icons/fi';
import { FaRegCompass } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import { localizedStrings } from 'constants/localizedStrings';
import { BsCollectionPlayFill } from 'react-icons/bs';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { MdVideoLibrary, MdHistory } from 'react-icons/md';
import { Nav, Div, Menu, FixedContainer } from './style';

export function SideNav() {
	const navigate = useNavigate();
	const unusableService = () => toast.warning('Serviço indisponivel');

	return (
		<Nav>
			<FixedContainer><br />
				<Menu>
					<AiOutlineMenu size="26px" />
				</Menu><br />
				<Link style={{ textDecoration: 'none', color: '#000' }} to='/'>
					<Div>
						<AiFillHome size="24px" /><br />
						{localizedStrings.start}
					</Div>
				</Link>
				<Div onClick={unusableService} >
					<FaRegCompass size="24px" /><br />
					{localizedStrings.explore}
				</Div>
				<Div onClick={unusableService} >
					<FiYoutube size="24px" /><br />
					{localizedStrings.shorts}
				</Div>
				<Div onClick={() => navigate('/subscribes')}>
					<BsCollectionPlayFill size="24px" /><br />
					{localizedStrings.subscribes}
				</Div>
				<Div onClick={unusableService} >
					<MdVideoLibrary size="28px" /><br />
					{localizedStrings.library}
				</Div>
				<Div onClick={unusableService} >
					<MdHistory size="30px" /><br />
					{localizedStrings.historic}
				</Div>
			</FixedContainer>
		</Nav>
	)
}