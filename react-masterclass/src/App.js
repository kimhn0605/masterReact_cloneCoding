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
	justify-content: center;
	align-items: center;
	background-color: beige;
	animation: ${anim} 15s infinite;
	&:hover {
		background-color: black;
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
			<Btn>Hello</Btn>
			<Circle>ReactJS</Circle>
		</Box>
	);
}

export default App;
