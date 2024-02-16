import axios from "axios";

const baseUrl = "https://api.movies.dcts.se";

const getMovies = (params) => {
	return axios({
		method: "get",
		url: `${baseUrl}/rpc/movies_search?q=${params}`,
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		});
};

const getAutoCompleteResults = (params) => {
	const limit = 5;

	return axios({
		url: `${baseUrl}/rpc/movies_autocomplete?q=${params}&limit=${limit}`,
	})
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			return err;
		});
};

export { getAutoCompleteResults, getMovies };
