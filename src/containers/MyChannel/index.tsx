import { Page } from '../style';
import { 
	SideNav, 
	SearchBar, 
	FlexMyChannel,
	ChannelConfig, 
} from 'components';

export function MyChannel() {
	return (
		<Page>
			<SideNav />
			<FlexMyChannel>
				<SearchBar />
				<ChannelConfig />
			</FlexMyChannel>
		</Page>
	)
}