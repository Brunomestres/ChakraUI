import React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import HeaderSearch from "../../components/HeaderSearch";
import MovieTrending from "../../components/MovieTrending";
import MovieSearch from "../../components/MovieSearch";
import PaginatorMovie from "../../components/PaginatorMovie";
import { MovieStore } from "../../stores/movieStore";
const Home = () => {
	const movieStore = useLocalObservable(() => new MovieStore());

	return (
		<>
			<HeaderSearch setSearchStore={movieStore.setSearch} />
			{movieStore.moviesSearch.results.length > 0 ? (
				<>
					<MovieSearch moviesSearch={movieStore.moviesSearch.results} />
					<PaginatorMovie
						totalPages={movieStore.moviesSearch.total_pages}
						page={movieStore.page}
						setPage={movieStore.setPage}
					/>
				</>
			) : (
				<MovieTrending movieTrending={movieStore.getTranding} />
			)}
		</>
	);
};

export default observer(Home);
