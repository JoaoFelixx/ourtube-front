import {
	Ad,
	Videos,
	SideNav,
	GridHome,
	SearchBar,
	PopularWords,
} from 'components';

export function Home() {
	return (
		<div>
			<GridHome>
				<SideNav /><br />
				<SearchBar />
				<PopularWords />
				<Ad />
				<Videos />
			</GridHome>
		</div>
	)
}