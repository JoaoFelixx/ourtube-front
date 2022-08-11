interface Channel {
	_id: string;
	name: string;
	icon_src?: string;
	banner_src?: string;
	description: string;
}

interface Enrolled {
  _id: string;
  user_id: string;
  channel_id: string;
}

interface Video {
	_id: string;
	video_src: string;
	preview_src: string;
	mimetype: string;
	channel_id: Channel;
	description: string;
}

interface ID {
	id: string;
}

interface Provider {
	children: React.ReactNode;
}

export type { ID, Video, Channel, Provider, Enrolled };