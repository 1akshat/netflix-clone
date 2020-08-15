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
            className="poster_image"
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </>
  );
};

export default Row;
