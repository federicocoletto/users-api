/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

const useFetch = (base_URL, path) => {
	const [apiInfo, setApiInfo] = useState();

	const getApiInfo = () => {
		const url = `${base_URL}${path}`;
		axios
			.get(url)
			.then((res) => setApiInfo(res.data))
			.catch((err) => console.log(err));
	};

	const createApiObj = (data) => {
		const url = `${base_URL}${path}`;
		axios
			.post(url, data)
			.then((res) => setApiInfo([...apiInfo, res.data]))
			.catch((err) => console.log(err));
	};

	const deleteApiObj = (id) => {
		const url = `${base_URL}${path}/${id}`;
        axios
			.delete(url, id)
			.then(() => {
                const filterApi = apiInfo.filter(element => element.id !== id)
                setApiInfo(filterApi)
            })
			.catch((err) => console.log(err));
	};

    const updateApiObj = (id, data) => {
        const url = `${base_URL}${path}/${id}`
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
