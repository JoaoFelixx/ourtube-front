import { useState, useEffect } from 'react';
import { api } from 'service';
import { toast } from 'react-toastify';
import { Channel } from 'interfaces';
import { Page, Margin } from '../style';
import {
	Panel,
	Banner,
	SideNav,
	SearchBar,
	FlexContainer,
	ListChannelVideos,
} from 'components';
import BannerImg from 'assets/default-banner.png';

export function MyChannel() {
	const [channel, setChannel] = useState<Channel | null>(null);

	useEffect(() => {
		(async () => {
			try {
				const token = localStorage.getItem('ourtube_token')

				if (!token)
					return

				const headers = {
					Authorization: `Bearer ${JSON.parse(token)}`
				}

				const { data, status } = await api.get<Channel | null>('/myChannel', { headers });

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
						<Banner 
							src={channel ? channel?.banner_src : BannerImg} />
						<Panel channel={channel || undefined} />
						<ListChannelVideos id={channel ? channel._id : undefined} />
					</Margin>
			</FlexContainer>
		</Page>
	)
}