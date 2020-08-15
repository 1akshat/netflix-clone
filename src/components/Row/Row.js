import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import "./Row.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeThumbnail = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchUrlData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchUrlData();
  }, [fetchUrl]);

  return (
    <>
      <h2 className="row_title">{title}</h2>
      <div className="row_images_container">
        {movies.map((movie) => (
          <img
            key={movie.id}
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
    </>
  );
};

export default Row;
