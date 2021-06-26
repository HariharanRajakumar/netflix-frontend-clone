import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

// api key=2f46ae25bae7a83e33d95f162b7b249d
// demo url=https://api.themoviedb.org/3/movie/550?api_key=2f46ae25bae7a83e33d95f162b7b249d
// yarn add firebase-tools
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixoriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchToprated} />
    </div>
  );
}

export default App;
