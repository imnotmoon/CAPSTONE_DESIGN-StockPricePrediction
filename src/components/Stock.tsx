import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import StockDetail from "./StockDetail";
import { IStockData, getStockData } from "../service/networking";

interface IStock {
	name: string;
	code: string;
}

const Stock = ({ data }: { data: IStock }) => {
	const [open, setOpen] = useState(false);
	const [stockData, setStockData] = useState<IStockData | null>(null);

	const onClickStock = () => {
		setOpen(!open);
	};

	useEffect(() => {
		getStockData(wrapCode(data.code)).then((res) => setStockData(res.data));
	}, []);

	return (
		<Container onClick={onClickStock}>
			<Title>
				<Name>{data.name}</Name>
				<span>
					내일 <b>{~~stockData?.percent!}%</b> 확률로{" "}
					<Prediction up={stockData?.variation === "상승" ? true : false}>{stockData?.variation}</Prediction>
					할 것으로 예측됩니다.
				</span>
			</Title>
			{open && (
				<StockDetail
					name={data.name}
					code={wrapCode(data.code)}
					color={stockData?.variation === "상승" ? "red" : "rgb(52, 144, 255)"}
				/>
			)}
		</Container>
	);
};

const wrapCode: (code: string) => string = (code: string) =>
	code.length < 6 ? Array.from({ length: 6 - code.length }).reduce((prev: string) => "0" + prev, code) : code;

const Container = styled.div`
	background-color: rgba(250, 250, 250, 0.4);
	margin: 5px 0px;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 20px 0;
	border: 1px solid rgba(230, 230, 230, 0.7);
`;

const Title = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 2fr;
`;

const Name = styled.div`
	font-weight: 600;
`;

const Prediction = styled.span<{ up: boolean }>`
	color: ${({ up }) => (up ? "red" : "rgb(52, 144, 255)")};
`;

export default Stock;
