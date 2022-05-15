import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Card } from './style';
import { Painel } from '../Painel';
import { Banner } from '../Banner';
import { api } from 'service';
import { Channel } from 'interfaces';

export function ChannelConfig() {
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
		<>
			{channel && (
				<Card>
					<Banner image={`http://localhost:4545/api/v1/files/${channel.banner_id}`} />
					<Painel channel={channel} />
				</Card>
			)}
		</>
	)
}