import {
	Ad,
	Videos,
	SideNav,
	SearchBar,
	PopularWords,
	FlexContainer,
} from 'components';
import { Page, Margin } from '../style';

export function Home() {
	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				<Margin>
					<PopularWords />
					<Ad />
					<Videos />
				</Margin>
			</FlexContainer>
		</Page>
	)
}