import { api } from 'service';
import { toast } from 'react-toastify';
import { Card, Button } from './style';
import { localizedStrings } from 'constants/localizedStrings';
import { useForm, SubmitHandler } from 'react-hook-form';

interface ChannelImages {
	iconList: FileList;
	bannerList: FileList;
}

interface ChannelId {
	_id?: string;
}

export function FormChannelEditImages({ _id }: ChannelId) {
	const { register: registerImg, handleSubmit: submitImg } = useForm<ChannelImages>();

	const onSubmitImages: SubmitHandler<ChannelImages> = async ({ iconList, bannerList }) => {
		try {
			const token = localStorage.getItem('ourtube_token');

			if (!token)
				return

			const formIcon = new FormData();
			const formBanner = new FormData();

			const icon = iconList?.[0];
			const banner = bannerList?.[0];

			if (!icon || !banner) {
				toast.error(localizedStrings.addAllPhotos)
				return
			}

			formIcon.append('icon', icon);
			formBanner.append('banner', banner);

			const headers = {
				'headers': {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${JSON.parse(token)}`
				}
			}

			await Promise.all([
				api.put(`/channels/icon/${_id}`, formIcon, headers),
				api.put(`/channels/banner/${_id}`, formBanner, headers)
			])

			toast.success(localizedStrings.photosSendedWithSuccessful);

		} catch (error) {
			toast.error(localizedStrings.errorRegisteringImages);
		}
	}

	return (
		<Card>
			<h1 style={{ textAlign: 'center' }} >{localizedStrings.customChannel}</h1><br />
			<form onSubmit={submitImg(onSubmitImages)}>
				<label>{localizedStrings.channelIcon}</label><br />
				<input type="file" {...registerImg('iconList')} /><br /><br />
				<label>{localizedStrings.channelBanner}</label><br />
				<input type="file" {...registerImg('bannerList')} /><br /><br />
				<Button color="#777777">{localizedStrings.send} </Button>
				<Button color="#ff0000">{localizedStrings.cancel}</Button>
			</form>
		</Card>
	)
}