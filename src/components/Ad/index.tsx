import {
	Flex,
	Text,
	Card,
	Image,
} from './style';
const felixflix = require('../../assets/felixflix.png');

function Ad() {
	return (
		<Card>
			<Flex>
				<Image src={felixflix} alt="ad" />
				<Text>
					P
					R
					O
					P
					A
					G
					A
					N
					D
					A
				</Text>
			</Flex>
		</Card>
	)
}

export default Ad;