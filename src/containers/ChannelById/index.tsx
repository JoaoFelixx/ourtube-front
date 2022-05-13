import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Channel } from 'interfaces';
import { api } from 'service';
import { Page } from '../style';
import { 
	Banner,
	SideNav, 
	SearchBar, 
	GridChannelById,
} from 'components';

const Card = styled.div` 
	grid-area: content;
`;

export function ChannelById() {
	const [channel, setChannel] = useState<Channel | null>(null);
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			try {
				const { status, data } = await api.get(`/channel/${id}`);

				if (status === 204)
					return 

				setChannel(data);

			} catch (error) {
				console.log(error);
			}
		})()

		console.log(channel);
	}, [id])

	return (
		<Page>
			<SideNav />
			<GridChannelById>
				<SearchBar />
				{!channel ? <h1> Channel not a found </h1> : (
					<Card>
						<Banner image={`http://localhost:4545/api/v1/files/${channel.banner_id}`} />
					</Card>
				)}
			</GridChannelById> 
		</Page>
	)
}