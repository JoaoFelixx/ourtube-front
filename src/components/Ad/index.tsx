import React, { useMemo } from 'react';
import Felixflix from 'assets/felixflix.png';
import PrivateMarket from 'assets/private-market.png';
import { useWindowSize } from 'hooks';
import { localizedStrings } from 'constants/localizedStrings';
import { Flex, Text, Card, Image, } from './style';

type NumberSelected = 'felixflix' | 'privateMarket';

export function Ad() {
	const screenSize = useWindowSize();
	const selectedAd = useMemo(() => {
		const ads: NumberSelected[] = ['felixflix', 'privateMarket'];
		const randomIndex = Math.floor(Math.random() * ads.length);

		return ads[randomIndex];
	}, []);

	const randomAdvertising = (number: NumberSelected) => ({
		'felixflix': <Image src={Felixflix} alt="FelixFlix Brazil" />,
		'privateMarket': <Image src={PrivateMarket} alt='Mercado Privado' />
	}[number]);

	return (
		<Card>
			<Flex>
				{screenSize.width < 900 ? randomAdvertising(selectedAd) : (
					<React.Fragment>
						<Image src={Felixflix} alt="FelixFlix Brazil" />
						<Image src={PrivateMarket} alt='Mercado Privado' />
					</React.Fragment>
				)}
				<Text>
					{localizedStrings.advertising}
				</Text>
			</Flex>
		</Card>
	)
}