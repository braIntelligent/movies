import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`/api/movie/${id}`).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return (
    <div className='h-100 border border-dark rounded d-flex flex-column justify-content-center align-items-center gap-3'>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} style={{height:200, width:200}}/>
      <p><strong>Año:</strong> {movie.Year}</p>
      <p><strong>Género:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Sinopsis:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetail;
