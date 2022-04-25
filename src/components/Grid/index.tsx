import styled from 'styled-components';

const Grid = styled.div` 
	display: Grid;
	grid-template-columns: 1fr 15fr;
	grid-template-rows: auto auto auto auto;
	grid-template-areas: "sideNav searchBar"
											 "sideNav popWords"
											 "sideNav advertising"
											 "sideNav videos"
											 "sideNav videos";
	justify-content: center;

	@media (max-width: 768px) {
		grid-template-columns: 98%;
		grid-template-areas: "searchBar"
												 "popWords"
												 "advertising"
												 "videos";
	} 
`; 

export default Grid;