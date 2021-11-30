import React, { useState } from "react";
import styled from "@emotion/styled";
import StockDetail from "./StockDetail";

interface IStock {
	name: string;
	code: string;
}

const Stock = ({ data }: { data: IStock }) => {
	const [open, setOpen] = useState(false);

	const onClickStock = () => {
		setOpen(true);
	};

	return (
		<Container onClick={onClickStock}>
			<div>{data.name}</div>
			<div>{wrapCode(data.code)}</div>
			{open && <StockDetail code={data.code} />}
		</Container>
	);
};

const wrapCode: (code: string) => string = (code: string) =>
	code.length < 6 ? Array.from({ length: 6 - code.length }).reduce((prev: string) => "0" + prev, code) : code;

const Container = styled.div`
	background-color: rgb(250, 250, 250);
	margin: 5px 0px;
	width: 80%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 20px 0;
	border: 1px solid rgba(230, 230, 230, 0.7);
`;

export default Stock;
