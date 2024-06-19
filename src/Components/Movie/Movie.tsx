import React, {useEffect, useState} from 'react';
import {MovieIndex, Movies} from '../../../types';

interface Props {
  index: number;
  id: string;
  name: string;
  delete: () => void
  edit: (tre: Movies) => void
}


const Movie: React.FC<Props> = React.memo((data) => {
  const [movieMutation, setMovieMutation] = useState<MovieIndex>({index: 0, id: '', name: ''});
  const place = data.index + 1;

  // useEffect(() => {
  //   setMovieMutation({index: data.index, id: data.id, name: data.name});
  // }, [data]);


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setMovieMutation((prev) => (
      {...prev, id: data.id, name: value, index: data.index}
    ));
    console.log(movieMutation);
  }
  const onEditSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(event)
    data.edit(movieMutation);
  }
  return (
    <form action="#" onSubmit={onEditSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text bg-primary-subtle" id="">{place}</span>
        <input type="text" id="name" className="form-control" required aria-label="Username"
               aria-describedby="basic-addon1" placeholder={data.name} value={movieMutation.name} onChange={onChange}/>

        <button className="btn btn-success">edit</button>
        <div className="btn btn-danger" onClick={data.delete}>delete</div>
      </div>
    </form>
  );
}, (prevProps, nextProps) =>{
  return nextProps.id !== prevProps.id || nextProps.name !== prevProps.name;
  }
);
export default Movie;