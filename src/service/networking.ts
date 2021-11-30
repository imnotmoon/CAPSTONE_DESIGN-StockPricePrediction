import axios from "axios";

const API_URL = "http://localhost:8080";

export interface IStockData {
	stockCode: string;
	percent: number;
	variation: string;
}

export const getStockData = (code: string) => {
	return axios.get<{ data: IStockData }>(`${API_URL}/api/v1?stockCode=${code}`).then((res) => res.data);
};

export const getStockPrices = (code: string) => {
	return axios.get(`${process.env.PUBLIC_URL}/json/${code}.json`);
};
