import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeThumbnail = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchUrlData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchUrlData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    console.log("Handle lick");
    // if its already opened, close it
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <>
      <h2 className="row_title">{title}</h2>
      <div className="row_images_container">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`poster_image_backdrop ${
              isLargeThumbnail && "poster_image_poster"
            }`}
            src={`${IMAGE_BASE_URL}${
              isLargeThumbnail ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </>
  );
};

export default Row;
