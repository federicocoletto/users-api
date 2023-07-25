/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

const useFetch = () => {
	const [apiInfo, setApiInfo] = useState();
	const baseURL = 'https://users-crud-fc.onrender.com/api/v1/users'

	const getApiInfo = () => {
		const url = baseURL;
		axios
		.get(url)
		.then((res) => setApiInfo(res.data))
		.catch((err) => console.log(err));
	};
	
	const createApiObj = (data) => {
		const url = baseURL;
		axios
			.post(url, data)
			.then((res) => setApiInfo([...apiInfo, res.data]), console.log(apiInfo))
			.catch((err) => console.log(err));
	};

	const getUserById = (id) => {
		const url = `${baseURL}/${id}`;
		axios.get(url)
		.then(res => console.log(res.data))
		.catch(err => console.log(err))
	}
	
	const deleteApiObj = (id) => {
		const url = `${baseURL}/${id}`;
        axios
		.delete(url, id)
			.then(() => {
                const filterApi = apiInfo.filter(element => element.id !== id)
                setApiInfo(filterApi)
            })
			.catch((err) => console.log(err));
	};

    const updateApiObj = (id, data) => {
		const url = `${baseURL}/${id}`;
        axios
			.put(url, data)
			.then(() => {
                const updateApi = apiInfo?.map((element => {
                    if (element.id === data.id) {
                        return data
                    } else {
                        return element
                    }
                }))
                // console.log(updateApi);
                setApiInfo(updateApi)
            })
			.catch((err) => console.log(err));
    }

	return [
		apiInfo,
		getApiInfo,
		createApiObj,
		deleteApiObj,
		updateApiObj,
	];
};

export default useFetch;
