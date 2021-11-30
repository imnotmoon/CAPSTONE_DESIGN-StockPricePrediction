import React from "react";
import styled from "@emotion/styled";

import Header from "./Header";
import List from "./List";

const Layout = () => {
	const onClickTopButton = () => {
		document.documentElement.scroll({ top: 0, behavior: "smooth" });
	};

	return (
		<Container>
			<Header />
			<List />
			<TopButton onClick={onClickTopButton}>Top</TopButton>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	position: relative;
`;

const TopButton = styled.div`
	position: fixed;
	width: 40px;
	height: 40px;
	top: 90vh;
	right: 50px;
	border-radius: 20px;
	background-color: rgb(52, 144, 255);
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;

	cursor: pointer;
`;

export default Layout;
