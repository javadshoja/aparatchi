import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.TMDB_API_KEY

const requests = {
	fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
	fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
	fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
	fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
	fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
}

export const getBannerMovies = async () => {
	const [batman, blacklight, spiderMan, uncharted, theOutfit] =
		await Promise.all([
			axios
				.get(`${BASE_URL}/movie/${414906}?api_key=${API_KEY}&language=en-US`)
				.then(res => res.data),
			axios
				.get(`${BASE_URL}/movie/${823625}?api_key=${API_KEY}&language=en-US`)
				.then(res => res.data),
			axios
				.get(`${BASE_URL}/movie/${634649}?api_key=${API_KEY}&language=en-US`)
				.then(res => res.data),
			axios
				.get(`${BASE_URL}/movie/${335787}?api_key=${API_KEY}&language=en-US`)
				.then(res => res.data),
			axios
				.get(`${BASE_URL}/movie/${799876}?api_key=${API_KEY}&language=en-US`)
				.then(res => res.data)
		])

	return [batman, blacklight, spiderMan, uncharted, theOutfit]
}
