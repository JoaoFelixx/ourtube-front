import {
	Ad,
	Videos,
	SideNav,
	GridHome,
	SearchBar,
	PopularWords,
} from 'components';
import { Page } from '../style';

export function Home() {
	return (
		<Page>
			<SideNav />
			<GridHome>
				<br />
				<SearchBar />
				<PopularWords />
				<Ad />
				<Videos />
			</GridHome>
		</Page>
	)
}