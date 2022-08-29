import axios from "axios";

const myAxios = axios.create({
	baseURL: process.env.API,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
});

export default myAxios;
