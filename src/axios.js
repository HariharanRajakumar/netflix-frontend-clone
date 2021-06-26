import axios from 'axios';

//base url to make a get requests to get the movies
const originalUrl = axios.create({ baseURL: 'https://api.themoviedb.org/3' });

export default originalUrl;
