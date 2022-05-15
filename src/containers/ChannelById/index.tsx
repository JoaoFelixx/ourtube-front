import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Channel } from 'interfaces';
import { api } from 'service';
import { Page } from '../style';
import { 
	Painel,
	Banner,
	SideNav, 
	SearchBar, 
	FlexChannelById,
} from 'components';

const Card = styled.div` 
	width: 100%;
	height: 100%;
`;

const Apresentation = styled.div` 
	margin: 5px;
	background-color: #EDEDED;
	display: flex;
	padding: 12px;

	video {
		width: 40em;
	}

	@media (max-width: 768px) {
		padding: 0;
		flex-direction: column;

		video {
			width: 100%;
		}
	}
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
	}, [id])

	return (
		<Page>
			<SideNav />
			<FlexChannelById>
				<SearchBar />
				{channel && (
					<Card>
						<Banner image={`http://localhost:4545/api/v1/files/${channel.banner_id}`} />
						<Painel channel={channel} />
						<Apresentation>
							<video controls autoPlay>
								<source src="https://youtu.be/ALA7CoagMUk?list=RDMMALA7CoagMUk" type="video/mp4" />
							</video>
							<div style={{ padding: '8px' }} >
								<h3>Conheça tal canal</h3><br/>
								<p style={{ maxWidth: '40ch', fontSize: '1em' }}>
									Fala galera o canal de não curiosidades foi feito para 
									vocÊ que não gosta de curiosidades 
									apenas de coisas que voce já sabe
								</p>
							</div>
						</Apresentation>
					</Card>
				)}
			</FlexChannelById> 
		</Page>
	)
}