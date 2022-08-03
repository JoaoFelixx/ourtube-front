import { useState, useEffect } from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { 
	Panel,
	Banner,
	SideNav, 
	SearchBar,
	FlexContainer,
	ListVideosById,
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
				{channel && (
					<Margin>
						<Banner src={`http://localhost:4545/api/files/${channel?.banner_id}`}/>
						<Panel channel={channel}/>
						<ListVideosById id={channel._id} />
					</Margin>
				)}
			</FlexContainer>
		</Page>
	)
}
