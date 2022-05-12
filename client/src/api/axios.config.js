import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const backendAPI = "http://localhost:4000/api";
axios.defaults.baseURL = backendAPI

const client = axios.create();

client.interceptors.request.use(
	async config => {
		const token = await AsyncStorage.getItem('token')
		if (token){
			config.headers.Authorization = "Brearer "+ token
			console.log(config.headers.Authorization)
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

export default client;