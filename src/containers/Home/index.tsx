import {
	Grid,
	Videos,
	SideNav,
	SearchBar,
} from '../../components';

function Home() {
	return (
		<div>
			<Grid>
				<SideNav />
				<SearchBar />
				<Videos />
			</Grid>
		</div>
	)
}

export default Home;