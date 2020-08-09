import React from "react";
import "./App.css";

import Row from "./components/Row/Row";
import Requests from "./utils/consts";

const App = () => {
  return (
    <>
      <h1>Netflix clone is about to launch soon 🚀</h1>
      <Row title="TRENDING NOW" fetchUrl={Requests.trendingMovies}></Row>
    </>
  );
};

export default App;
