import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMovies = () => {
    setLoading(true);
    // prepare url
    const url = new URL("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1");
    url.searchParams.append("api_key", "55dcde56c65284d28b71f215d3411474");

    // fetch movies
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //update the movies state
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchMovies, []);

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <div className="flex justify-center">
            <img src={spinner} width="25%" />
          </div>
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="rounded overflow-hidden shadow-lg">
              <img className="w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <img src={noMovies} width="25%" />
          </div>
        )}
      </div>
    </div>
  );
}
