const APIKEY = '2f46ae25bae7a83e33d95f162b7b249d';

const requests = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}&language=en-US`,
  fetchToprated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchUpcoming: `/upcoming?api_key=${APIKEY}&language=en-US`,
  fetchNetflixoriginals: `discover/tv?api_key=${APIKEY}&language=en-US&with_networks=213`,
  fetchActionMovies: `discover/tv?api_key=${APIKEY}&language=en-US&with_genres=28`,
  fetchComedyMovies: `discover/tv?api_key=${APIKEY}&language=en-US&with_genres=35`,
  fetchHorrorMovies: `discover/tv?api_key=${APIKEY}&language=en-US&with_genres=27`,
};

export default requests;
