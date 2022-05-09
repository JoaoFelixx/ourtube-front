import styled from 'styled-components';
import {
	Ad,
	Videos,
	SideNav,
	GridHome,
	SearchBar,
	PopularWords,
} from 'components';

const Page = styled.div`
	width: 100vw;
	display: flex;
`;

export function Home() {
	return (
		<div>
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
		</div>
	)
}