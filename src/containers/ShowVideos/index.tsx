import {
	Comments,
	ShowVideo,
	SearchBar,
	ListVideos,
	GridVideos,
} from 'components';

export function ShowVideos() {
	return (
		<div>
			<GridVideos>
				<SearchBar />
				<ListVideos />
				<ShowVideo />
				<Comments />
			</GridVideos>
		</div>
	)
}