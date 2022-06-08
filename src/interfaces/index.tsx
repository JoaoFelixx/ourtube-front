interface Video {
	_id: string;
	createdAt: Date;
	mimetype: string;
	photo_id: string;
	updatedAt: Date;
	description: string;
	channel_id: {
		_id: string;
		name: string;
		icon_id: string;
	}
}

interface Channel {
	_id: string;
	name: string;
	description: string;
	banner_id?: string;
	icon_id?: string;
}

interface ID {
	id: string;
}

interface Provider {
	children: React.ReactNode;
}

export type { Video, Channel, ID, Provider };