import { useState, useEffect } from "react"; 
import axios from "axios";

export const useResource = (url, query = "") => {
	const [resources, setResources] = useState([]);

	useEffect(() => {
		const getResources = async () => {
			try {
				const response = await axios.get(`${url}/?${query}`);
				setResources(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		getResources();
	}, [url, query]);

	const create = async (resource) => {
		try {
			const response = await axios.post(url, resource);
			setResources([...resources, response.data]);
		} catch (error) {
			console.log(error);
		}
	};

	const service = { create }

	return [resources, service]; 
}