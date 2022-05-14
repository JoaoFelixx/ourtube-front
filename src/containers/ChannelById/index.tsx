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
	FlexChannelById,
} from 'components';

const Card = styled.div` 
	width: 100%;
	height: 100%;
`;

const Painel = styled.div`
	margin: 5px;
	padding: 20px 0 0;
	display: flex;
	justify-content: space-around;
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
		flex-direction: column;

		video {
			width: 100%;
		}
	}
`;

const Icon = styled.img` 
	border-radius: 100px;
	width: 80px; 
	margin-right: 4px;
`;

const Subscribe = styled.button` 
	background-color: #ff0000; 
	padding: 6px 12px;
	border: none;
	font-size: 1.2em;
	color: #fff;
	cursor: pointer;
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
				<Card>
					<Banner image="https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107_960_720.jpg" />
					<Painel>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Icon src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Logo" />
							<div style={{ placeItems: 'center' }}>
								<h1>Channel Name</h1>
								<span> 0 Inscritos </span>
							</div>
						</div>
	
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<Subscribe> 
								Inscreva-se 
							</Subscribe>
						</div>
					</Painel>
					<Apresentation>
						<video controls autoPlay>
							<source src="https://youtu.be/ALA7CoagMUk?list=RDMMALA7CoagMUk" type="video/mp4" />
						</video>
						<div style={{ padding: '8px' }} >
							<h3>Conheça tal canal</h3><br/>
							<p style={{ maxWidth: '40ch', fontSize: '1em' }}>
								Olá galera esse canal foi feito para falar sobre coisas da vida
								Como trabalho desonesto, vida dificil, acusações falsa sobre vocÊ 
							</p>
						</div>
					</Apresentation>
				</Card>
			</FlexChannelById> 
		</Page>
	)
}