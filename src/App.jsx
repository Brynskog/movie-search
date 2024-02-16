import "./App.css";
import React from "react";
import { getMovies, getAutoCompleteResults } from "./apiService";
import AutoComplete from "./Components/AutoComplete";
import MoviesList from "./Components/MoviesList";

const App = () => {
	const [searchField, setSearchField] = React.useState("");
	const [searchParam, setSearchParam] = React.useState("");
	const [autoCompleteList, setAutoCompleteList] = React.useState([]);
	const [moviesList, setMoviesList] = React.useState([]);
	const [toggle, setToggle] = React.useState(false);

	React.useEffect(() => {
		if (searchParam) {
			search();
		}
	}, [searchParam]);

	const search = async () => {
		setToggle(false);

		const movies = await getMovies(searchParam);

		setMoviesList(movies);
	};

	const onChangeHandler = async (e) => {
		setToggle(true);
		setSearchField(e.target.value);

		const autoCompleteResult = await getAutoCompleteResults(e.target.value);

		setAutoCompleteList(autoCompleteResult);
	};

	const handleAutCompleteClick = (movie) => {
		setToggle(false);
		setSearchField(movie);
		setSearchParam(movie);
	};

	return (
		<div className="App">
			<div className="wrapper">
				<input
					type="text"
					className="search-field"
					placeholder="Movie title"
					value={searchField}
					onChange={(e) => onChangeHandler(e)}
					onKeyDown={(e) =>
						e.key === "Enter" ? setSearchParam(e.target.value) : ""
					}
				/>
				<button
					className="search-btn"
					onClick={() => setSearchParam(searchField)}
				>
					Search
				</button>
				{autoCompleteList.length && toggle ? (
					<AutoComplete
						list={autoCompleteList}
						updateSelected={handleAutCompleteClick}
					/>
				) : (
					""
				)}
				{moviesList.length ? <MoviesList list={moviesList} /> : ""}
			</div>
		</div>
	);
};

export default App;
