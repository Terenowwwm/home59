import './App.css'
import InputForm from './Components/inputForm/inputForm';
import {useState} from 'react';
import {Movies} from '../types';
import Movie from './Components/Movie/Movie';

const App = () => {
  const [movies, setMovies] = useState<Movies[]>([
    {id: '1', name: 'lalafo'},
    {id: '2', name: 'oc.kg'},
    {id: '3', name: 'Namba.kg'}
  ]);

  const addMovie = (newMovie: Movies) => {
    setMovies((prev) => [...prev, newMovie]);
  }
  const deleteMovie = (id:string) =>{
    const select = movies.filter((i) => i.id !== id);
    console.log(id);
    console.log(select);
    setMovies((prev) => select);
  }
  const editMovie = (editMovie:Movies) => {
    const copyMovie = movies
    const edit = copyMovie.map((e) => {
      if (e.id === editMovie.id){
        e.name = editMovie.name;
        // e.index = editMovie.index;
      }
      console.log(e)
      return e;
    });
    setMovies((prev) => (edit));
  }

  return (
    <>
      <InputForm onSubmit={addMovie}/>
      {movies.map((movie, index) =>
        <Movie key={index} id={movie.id} index={index} name={movie.name} edit={editMovie} delete={() => deleteMovie(movie.id)}/>
      )}
    </>
  )
}

export default App
