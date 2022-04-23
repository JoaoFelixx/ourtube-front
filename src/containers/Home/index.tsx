import {
	Grid,
	Videos,
	SideNav,
	SearchBar,
	PopularWords,
} from '../../components';

function Home() {
	return (
		<div>
			<Grid>
				<SideNav />
				<SearchBar />
				<PopularWords />
				<Videos />
			</Grid>
		</div>
	)
}

export default Home;