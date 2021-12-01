import React, { useContext, useRef } from "react";
import styled from "@emotion/styled";

import { SearchContext } from "./Layout";

const Header = () => {
	const { setSearch } = useContext(SearchContext);
	const throttled = useRef<any>();

	const onChangeInput = (e: React.FormEvent) => {
		if (throttled.current) {
			clearTimeout(throttled.current);
		}
		throttled.current = setTimeout(() => {
			setSearch((e.target as HTMLInputElement).value);
		}, 500);
	};

	return (
		<Container>
			<div>Stock Price Prediction</div>
			<div>
				<input type="text" placeholder="search..." onChange={onChangeInput} />
			</div>
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

	& input {
		width: 35vw;
		height: 35px;
		background-color: rgb(250, 250, 250);
		border: 1px solid rgba(240, 240, 240, 0.7);
		border-radius: 10px;
		font-size: 20px;

		&:focus {
			outline: none;
			padding-left: 20px;
		}
	}
`;

export default Header;
