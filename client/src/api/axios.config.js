import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const backendAPI = "http://localhost:4000/api";
let staff = async () => {
	try {
		await AsyncStorage.getItem(
			"staff"
			);
	} catch (err) {

	}
}

const client = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
		authorization: `Bearer ${staff}`
	},
});

export default client;