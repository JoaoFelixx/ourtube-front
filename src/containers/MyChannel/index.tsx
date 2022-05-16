import { useState, useEffect } from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { 
	Panel,
	Banner,
	SideNav, 
	SearchBar,
	ListVideos,
	FlexContainer,
} from 'components';
import { Page, Margin } from '../style';

export function MyChannel() {
	const [channel, setChannel] = useState<Channel | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const { data, status } = await api.get<Channel | null>('/myChannel');

				if (status === 204)
					return

				setChannel(data);

			} catch (error) {
				toast.error('Erro ao buscar dados');
			}
		})()
	}, [])

	return (
		<Page>
			<SideNav />
			<FlexContainer>
				<SearchBar />
				<Margin>
					<Banner src={`http://localhost:4545/api/v1/files/${channel?.banner_id}`}/>
					{channel && <Panel channel={channel}/>}<br/>
					<ListVideos />
				</Margin>	
			</FlexContainer>
		</Page>
	)
}