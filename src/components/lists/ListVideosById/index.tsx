import { useEffect } from 'react';
import { ID } from 'interfaces';
import { Card } from './style';

export function ListVideosById({ id }: ID) {
	useEffect(() => {
		console.log(id)
	}, [id])

	return (
		<Card>
			Listando videos by id: {id}
		</Card>
	)
}