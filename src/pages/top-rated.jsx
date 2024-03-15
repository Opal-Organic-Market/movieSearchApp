import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Toprated = () => {
  const [movies, setMovies] = useState(null);
  const url = "https://api.themoviedb.org/3/movie/top_rated";

  useEffect(() => {
    async function displayAllMovies() {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN_API_KEY}`
          }
        });
        const responseJson = response.data.results; // Access the 'results' property
        const modifiedMovies = responseJson.map((movie) => ({
          ...movie,
          release_year: movie.release_date.substring(0, 4) // Extracting only the year
        }));
        setMovies(modifiedMovies);
      } catch (error) {
        console.log(error);
      }
    }
    displayAllMovies();
  }, []);

  const handleRateButtonClick = (average) => {
    alert(`The average rating is ${average}`);
  };

  if (!movies) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div className="flex justify-center mt-9">
        <div className="container">
          <span className="font-extrabold">Top-Rated</span>
          <div className="flex overflow-auto gap-x-2">
            {movies.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <Link to={'/moviedetailspage/' + item.id}>
                  <div className="w-48 h-auto p-4 rounded-md">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt="movies"
                      className="h-64 rounded-md"
                    />
                    <button
                      className="bg-orange-500 rounded-md px-1 py-1 text-white bottom-0 left-0 right-0 mx-auto mb-1 text-xs"
                      style={{ width: "80px" }}
                      onClick={() => handleRateButtonClick(item.vote_average)}
                    >
                      RATING: {item.vote_average.toFixed(1)}
                    </button>
                    <h2 className="mt-2 text-base font-semibold truncate h-7">
                      {item.original_title}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toprated;
