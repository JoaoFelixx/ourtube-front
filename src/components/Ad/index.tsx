import {
	Div,
	Text,
	Card,
	Image,
} from './style';
const felixflix = require('../../assets/felixflix.png');

function Ad() {
	return (
		<Card>
			<Div>
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
			</Div>
		</Card>
	)
}

export default Ad;