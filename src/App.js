import React from "react";
import "./App.css";

import Row from "./components/Row/Row";
import Requests from "./utils/consts";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/Navbar/Navbar";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Banner />
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
