import React from "react";
import "./App.css";

import Row from "./components/Row/Row";
import Requests from "./utils/consts";

const App = () => {
  return (
    <div className="app">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.netflixOriginalsMovies}
        isLargeThumbnail
      ></Row>
      <Row title="TRENDING NOW" fetchUrl={Requests.trendingMovies}></Row>
      <Row title="TOP RATED" fetchUrl={Requests.topRatedMovies}></Row>
      <Row title="ACTION MOVIES" fetchUrl={Requests.actionMovies}></Row>
      <Row title="COMEDY MOVIES" fetchUrl={Requests.comedyMovies}></Row>
      <Row title="HORROR MOVIES" fetchUrl={Requests.horrorMovies}></Row>
      <Row title="ROMANCE MOVIES" fetchUrl={Requests.romanceMovies}></Row>
      <Row title="DOCUMENTARIES" fetchUrl={Requests.documentariesMovies}></Row>
    </div>
  );
};

export default App;
