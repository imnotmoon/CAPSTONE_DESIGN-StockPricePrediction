import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getStockData, IStockData } from "../service/networking";

const StockDetail = ({ code }: { code: string }) => {
	const [data, setData] = useState<IStockData | null>(null);

	useEffect(() => {
		getStockData(code).then((res) => setData(res));
	}, []);

	return <Container></Container>;
};

const Container = styled.section`
	width: 100%;
	height: 100px;
`;

export default StockDetail;
