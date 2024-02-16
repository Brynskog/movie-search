import React from "react";

const MoviesList = (props) => {
	return (
		<ul className="movies-list">
			{props.list.map((movie, index) => {
				console.log(movie);
				return (
					<li key={index}>
						<p>
							<strong>Title:</strong> {movie.title}
						</p>
						<p>
							<strong>Description:</strong>
							{movie.overview}
						</p>
						<p>
							<strong>Duration:</strong> {movie.runtime}
						</p>
						<div className="genres">
							<strong>Genres:</strong>
							{movie.genres.map((genre, index) => {
								return <p key={index}>{genre},</p>;
							})}
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default MoviesList;
