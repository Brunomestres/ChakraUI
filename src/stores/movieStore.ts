import { makeAutoObservable } from "mobx";
import { api } from "../services/api";
import { Movie } from "../interfaces/movie";
import axios from "axios";
export class MovieStore {
	public initialState = {
		page: 0,
		results: [],
		total_pages: 0,
		total_results: 0,
	};
	public search = "a";
	public moviesSearch: Movie = this.initialState;
	public moviesTrending: Movie = this.initialState;
	constructor() {
		makeAutoObservable(this);
		this.fetchTrending();
	}

	public setMoviesSearch(movies: Movie) {
		this.moviesSearch = movies;
	}
	public setMoviesTrending(movies: Movie) {
		this.moviesTrending = movies;
	}

	public async fetchTrending() {
		const response = await axios.get(
			"https://api.themoviedb.org/3/trending/movie/day?api_key=e4754b23001f38ed6b6b09be083d1dd8&language=pt-BR",
		);
		this.setMoviesTrending(response.data);
	}

	public async fetchMovie() {
		try {
			const response = await api.get(`&query=${this.search}`);
			console.log(response.data);
			this.setMoviesSearch(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}
