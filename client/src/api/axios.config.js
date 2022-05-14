import axios from "axios";

const backendAPI = "http://localhost:4000/api";
//const backendAPI = "https://reaxion.herokuapp.com/api"
let staff = JSON.parse(localStorage.getItem("user"))

const client = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
		authorization: `Bearer ${staff}`
	},
});

export default client;