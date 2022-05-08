import {
	Ad,
	Grid,
	Videos,
	SideNav,
	SearchBar,
	PopularWords,
} from 'components';

export function Home() {
	return (
		<div>
			<Grid>
				<SideNav /><br />
				<SearchBar />
				<PopularWords />
				<Ad />
				<Videos />
			</Grid>
		</div>
	)
}