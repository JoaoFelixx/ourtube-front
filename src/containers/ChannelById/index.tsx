import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Channel } from 'interfaces';
import { api } from 'service';
import { Page, Margin } from '../style';
import {
	Panel,
	Banner,
	SideNav,
	SearchBar,
	FlexContainer,
} from 'components';

const Presentation = styled.div` 
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
			<FlexContainer>
				<SearchBar />
				{channel && (
					<Margin>
						<Banner src={`http://localhost:4545/api/v1/files/${channel.banner_id}`} />
						<Panel channel={channel} />
						<Presentation>
							<video controls autoPlay>
								<source src="https://youtu.be/ALA7CoagMUk?list=RDMMALA7CoagMUk" type="video/mp4" />
							</video>
							<div style={{ padding: '8px' }} >
								<h3>Conheça tal canal</h3><br />
								<p style={{ maxWidth: '40ch', fontSize: '1em' }}>
									Fala galera o canal de não curiosidades foi feito para
									vocÊ que não gosta de curiosidades
									apenas de coisas que voce já sabe
								</p>
							</div>
						</Presentation>
					</Margin>
				)}
			</FlexContainer>
		</Page>
	)
}