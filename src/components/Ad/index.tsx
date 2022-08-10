import {
	Flex,
	Text,
	Card,
	Image,
} from './style';
import Felixflix from 'assets/felixflix.png';

export function Ad() {
	return (
		<Card>
			<Flex>
				<Image src={Felixflix} alt="ad" />
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