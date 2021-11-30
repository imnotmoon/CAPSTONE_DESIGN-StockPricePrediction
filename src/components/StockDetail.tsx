import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from "chart.js";
import { Line } from "react-chartjs-2";
import { getStockPrices } from "../service/networking";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const StockDetail = ({ code, color, name }: { code: string; color: string; name: string }) => {
	const [stockPrices, setStockPrices] = useState<any>([]);

	const onClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const data = {
		labels: stockPrices.map((d: any) => d.date.slice(5)),
		datasets: [
			{
				label: name,
				fill: false,
				lineTension: 0.3,
				backgroundColor: color,
				borderColor: color,
				data: stockPrices.map((d: any) => d.closingPrice),
			},
		],
	};
	console.log(data);

	useEffect(() => {
		getStockPrices(code).then((res) => setStockPrices(res.data.data.splice(res.data.length - 30, 30)));
	}, []);

	return (
		<Container onClick={onClick}>
			<Line data={data} options={options} />
		</Container>
	);
};

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
};

const Container = styled.section`
	width: 80%;
	height: 450px;
	display: flex;
	flex-direction: column;
	align-itmes: center;
	justify-content: center;
`;

export default StockDetail;
