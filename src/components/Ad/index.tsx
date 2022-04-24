import { 
	Div,
	Text,
	Card,
	Image, 
} from './style';

function Ad() {
	return (
		<Card>
			<Div>
				<Image src="https://felixflix.netlify.app/img/phone.png" alt="ad"/>
				<Text>
					Where does it come from?	chunk of Lorem Ipsum used since the 1500s 
					is reproduced below for those interested. Sections 1.10.32 and 1.10.33
					from "de Finibus Bonorum et Malorum"
				</Text>
			</Div>
			<Div>
				<Image src="https://felixflix.netlify.app/img/phone.png" alt="ad"/>
				<Text>
					Where does it come from?	chunk of Lorem Ipsum used since the 1500s 
					is reproduced below for those interested. Sections 1.10.32 and 1.10.33
					from "de Finibus Bonorum et Malorum"
				</Text>
			</Div>
		</Card>
	)
}

export default Ad;