import axios from "axios";

const API_URL = "";

export interface IStockData {
	stockCode: string;
	percent: number;
	variation: string;
}

export const getStockData = (code: string) => {
	return axios.get<IStockData>(`${API_URL}`).then((res) => res.data);
};
