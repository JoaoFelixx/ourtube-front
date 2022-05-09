import styled from 'styled-components';

export const GridHome = styled.div` 
	flex-grow: 9;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto auto auto auto;
	grid-template-areas: "searchBar   searchBar"
											 "popWords    popWords"
											 "advertising advertising"
											 "videos      videos";
	justify-content: center;

	@media (max-width: 768px) {
		grid-template-columns: 100%;
		grid-template-areas: "searchBar"
												 "popWords"
												 "advertising"
												 "videos";
	} 
`; 