import axios from "axios";
import React, { useState, useEffect } from "react";

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
    <>
      <div className="px-8 mx-auto flex flex-col gap-10">
        <section>
          <h1 className="text-2xl font-bold">Top Rated</h1>
        </section>

        <section className="grid grid-cols-5 gap-5 justify-center">
          {movies.map((item) => (
            <div key={item.id} className="shadow-md relative">
              <div className="text-center relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  width="250px"
                  height="350px"
                  style={{borderRadius:"10px"}}
                />
                <button
                  className="bg-orange-500 rounded-md px-1 py-1 text-white absolute bottom-0 left-0 right-0 mx-auto mb-1 text-xs"
                  style={{ width: "80px" }}
                  onClick={() => handleRateButtonClick(item.vote_average)}
                >
                  RATING: {item.vote_average.toFixed(1)}
                </button>
              </div>
              <div className="text-center">
                <h2 className="text-md font-semibold text-ellipsis mb-1">
                  {item.title}
                </h2>
                <p>{item.release_year}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Toprated;