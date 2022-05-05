import styled from 'styled-components';

const Card = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;

	form {
		display: flex;
		flex-direction: column;
		width: 400px;
		height: 400px;
		padding: 6px;
		background-color: red;
	}

	label {
		color: #fff;
	}

	h1 {
		color: #fff;
		text-align: center;
	}

	div {
		display: block;
	}

	button {
		font-size: 1em;
		width: 25%;
		float: right;
	}
`;

export { Card, }