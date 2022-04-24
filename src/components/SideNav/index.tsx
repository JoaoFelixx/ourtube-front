import { Nav, FixedContainer } from './style';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { FaRegCompass } from 'react-icons/fa';

function SideNav() {
	return (
		<Nav>
			<FixedContainer>
				<br />
				<AiOutlineMenu size="30px"/>
				<br /><br />
				<AiFillHome size="30px"/>
				<br /><br />
				<FaRegCompass size="30px"/>
				<br /><br />
			</FixedContainer>
		</Nav>
	)
} 

export default SideNav;