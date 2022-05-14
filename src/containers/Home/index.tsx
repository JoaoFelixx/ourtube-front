import {
	Ad,
	Videos,
	SideNav,
	FlexHome,
	SearchBar,
	PopularWords,
} from 'components';
import { Page } from '../style';

export function Home() {
	return (
		<Page>
			<SideNav />
			<FlexHome>
				<SearchBar />
				<PopularWords />
				<Ad />
				<Videos />
			</FlexHome>
		</Page>
	)
}