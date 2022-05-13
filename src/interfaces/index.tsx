export interface Video {
	_id: string;
	createdAt: Date;
	mimetype: string;
	photo_id: string;
	updatedAt: Date;
	description: string;
	channel_id: {
		name: string;
		icon_id: string;
	}
}

export interface Channel {
	_id: string;
	name: string;
	description: string;
	banner_id?: string;
	icon_id?: string;
}
