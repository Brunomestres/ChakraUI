import {
	makeObservable,
	action,
	observable,
	computed,
	reaction,
	IReactionDisposer,
} from "mobx";
import { api, API_KEY } from "../services/api";
import { Movie } from "../interfaces/movie";
export class MovieStore {
	public initialState = {
		page: 0,
		results: [],
		total_pages: 0,
		total_results: 0,
	};
	public disposer: IReactionDisposer;
	public search = "";
	public page = 1;
	public moviesSearch: Movie = this.initialState;
	public moviesTrending: Movie = this.initialState;

	constructor() {
		makeObservable(this, {
			search: observable,
			page: observable,
			moviesSearch: observable,
			moviesTrending: observable,
			setSearch: action,
			setMoviesSearch: action,
			setMoviesTrending: action,
			cleanMoviesSearch: action,
			setPage: action,
			getTranding: computed,
		});
		this.fetchTrending();

		this.disposer = reaction(
			() => [this.search, this.page],
			() => {
				this.fetchMovie();
			},
		);
	}

	public setPage = (page: number) => {
		this.page = page;
	};

	public setMoviesSearch = (movies: Movie) => {
		this.moviesSearch = movies;
	};
	public setMoviesTrending = (movies: Movie) => {
		this.moviesTrending = movies;
	};
	public setSearch = (search: string) => {
		this.search = search;
	};
	public fetchTrending = async () => {
		const response = await api.get(
			"trending/movie/day?api_key=e4754b23001f38ed6b6b09be083d1dd8&language=pt-BR",
		);
		this.setMoviesTrending(response.data);
	};

	public get getTranding() {
		return this.moviesTrending.results.slice(0, 9);
	}

	public cleanMoviesSearch = () => {
		this.moviesSearch.results.length = 0;
	};

	public fetchMovie = async () => {
		try {
			const response = await api.get(
				`search/movie?api_key=${API_KEY}&language=pt-BR&include_adult=true&query=${this.search}&page=${this.page}`,
			);
			this.setMoviesSearch(response.data);
		} catch (error) {
			this.cleanMoviesSearch();
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};
}
