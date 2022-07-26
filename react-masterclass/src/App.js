import React from "react";
import styled, { keyframes } from "styled-components";

const anim = keyframes`
from {
  transform: rotate(0deg)
}
to {
  transform: rotate(360deg)
}
`;

const Box = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.textColor};
	// animation: ${anim} 15s infinite;
	&:hover {
		background-color: gray;
	}
`;

const Btn = styled.button`
	font-size: 50px;
	background-color: tomato;
	&:active {
		font-size: 100px;
	}
`;

const Circle = styled(Btn)`
	border-radius: 20px;
`;

function App() {
	return (
		<Box>
			<h1>Theme</h1>
			<Btn>Hello</Btn>
			<Circle>ReactJS</Circle>
		</Box>
	);
}

export default App;
