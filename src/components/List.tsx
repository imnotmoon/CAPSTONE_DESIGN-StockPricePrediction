import React from "react";
import styled from "@emotion/styled";

import Stock from "./Stock";
import { STOCKS } from "../static";

const List = () => {
	return (
		<Container>
			{STOCKS.map((stock) => {
				return <Stock data={stock} key={stock.code} />;
			})}
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	margin-top: 50px;
	margin-bottom: 100px;

	// ::-webkit-scrollbar {
	// 	display: none;
	// }
`;

export default List;
