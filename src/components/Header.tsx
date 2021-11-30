import React from "react";
import styled from "@emotion/styled";

const Header = () => {
	return (
		<Container>
			<div>Stock Price Prediction</div>
			<div style={{ fontSize: "1rem" }}>CAPSTONE DESIGN</div>
		</Container>
	);
};

const Container = styled.div`
	height: 70px;
	width: 100vw;
	background-color: rgb(52, 144, 255);
	position: fixed;
	top: 0px;
	box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.1);

	display: flex;
	justify-content: space-between;
	align-items: center;
	color: white;
	font-size: 24px;
	font-weight: 600;

	& > div {
		padding: 0 50px;
	}
`;

export default Header;
