import React from "react";

const AutoComplete = (props) => {
	const handleClick = (movie) => {
		props.updateSelected(movie);
	};

	return (
		<ul className="autocomplete-list">
			{props.list.map((movie, index) => {
				return (
					<li onClick={() => handleClick(movie)} key={index}>
						{movie}
					</li>
				);
			})}
		</ul>
	);
};

export default AutoComplete;
