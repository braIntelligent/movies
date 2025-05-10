import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const res = await axios.get(`/api/search?q=${query}`);
    setMovies(res.data.Search || []);
  };

  return (
    <>
      <div className="text-uppercase p-4 container font-monospace d-flex flex-column justify-content-start gap-3 align-items-center">
        <h1>Buscador de Películas</h1>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="text-center font-monospace text-uppercase"
        />
        <button className="btn btn-primary text-uppercase" onClick={searchMovies}>Buscar</button>
      </div>

      <div className="text-uppercase container font-monospace d-flex flex-row justify-content-center gap-3 align-items-center flex-wrap">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="object-fit-md-contain border rounded text-uppercase font-monospace d-flex flex-column justify-content-center gap-3 align-items-center flex-wrap p-4"
          >
            <img src={movie.Poster} alt={movie.Title} width={120} />
            <Link to={`/movie/${movie.imdbID}`}>
              <button className="btn btn-primary text-uppercase" onClick={searchMovies}>info</button>
            </Link>
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
