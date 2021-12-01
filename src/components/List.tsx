import React, { useContext } from "react";
import styled from "@emotion/styled";

import Stock from "./Stock";
import { STOCKS } from "../static";
import { SearchContext } from "./Layout";

const List = () => {
	const { search } = useContext(SearchContext);
	return (
		<Container>
			{STOCKS.filter((st) => {
				const regex = new RegExp(search);
				if (regex.test(st.name) || regex.test(st.code)) return true;
				return false;
			}).map((stock) => {
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

	margin-top: 100px;
	margin-bottom: 100px;

	// ::-webkit-scrollbar {
	// 	display: none;
	// }
`;

export default List;
