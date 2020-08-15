import React, { useState, useEffect } from "react";
import requests from "../../utils/consts";
import axios from "../../utils/axios";
import "./Banner.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const TRUNCATE_OVERVIEW_AFTER = 150;

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.netflixOriginalsMovies);
      const randomPosition = Math.floor(
        Math.random(1, 10) * request.data.results.length
      );
      setMovie(request.data.results[randomPosition]);
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${IMAGE_BASE_URL}${movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-container">
          <h1 className="banner-title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-description">
            {truncate(movie?.overview, TRUNCATE_OVERVIEW_AFTER)}
          </h1>
        </div>
        <div className="banner-fadebottom"></div>
      </header>
    </>
  );
};

export default Banner;
