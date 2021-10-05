import React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import HeaderSearch from "../../components/HeaderSearch";
import MovieTrending from "../../components/MovieTrending";
import { MovieStore } from "../../stores/movieStore";
const Home = () => {
	const movieStore = useLocalObservable(() => new MovieStore());
	return (
		<>
			<HeaderSearch setSearchStore={movieStore.setSearch} />

			<MovieTrending movieTrending={movieStore.getTranding} />

			{movieStore.moviesSearch.results.map((e) => (
				<p key={e.id}>{e.title}</p>
			))}
		</>
	);
};

export default observer(Home);
