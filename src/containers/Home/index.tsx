import {
	Ad,
	Videos,
	SideNav,
	SearchBar,
	FlexContainer,
} from 'components';
import { Page, Margin } from './style';

export function Home() {
	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				<Margin>
					<Ad />
					<Videos />
				</Margin>
			</FlexContainer>
		</Page>
	)
}