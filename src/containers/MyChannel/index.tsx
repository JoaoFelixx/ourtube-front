import { Page } from '../style';
import { 
	SideNav, 
	SearchBar, 
	GridMyChannel,
	ChannelConfig, 
} from 'components';

export function MyChannel() {
	return (
		<Page>
			<SideNav />
			<GridMyChannel>
				<SearchBar />
				<ChannelConfig />
			</GridMyChannel>
		</Page>
	)
}