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

