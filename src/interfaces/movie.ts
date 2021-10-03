export interface Movie {
	page: number;
	results: MovieResult[];
	total_results: number;
	total_pages: number;
}

export interface MovieResult {
	poster_path: string;
	adult: boolean;
	overview: string;
	release_date: string;
	original_title: string;
	genre_ids: number[];
	id: number;
	media_type: string;
	original_language: string;
	title: string;
	backdrop_path: string | null;
	popularity: number;
	vote_count: number;
	video: boolean;
	vote_average: number;
}

export interface SeriesResult {
	poster_path: string;
	popularity: number;
	id: number;
	overview: string;
	backdrop_path: string | null;
	vote_average: number;
	media_type: string;
	first_air_date: string;
	origin_country: string[];
	genre_ids: number[];
	original_language: string;
	vote_count: number;
	name: string;
	original_name: string;
}

export interface PersonResult {
	profile_path: string;
	adult: boolean;
	id: number;
	media_type: string;
	known_for: SeriesResult[] | MovieResult[];
	name: string;
	popularity: number;
}
