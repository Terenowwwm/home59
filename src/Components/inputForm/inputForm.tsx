import React, {useState} from 'react';
import {Movies} from '../../../types';

interface Props{
  onSubmit: (tre:Movies) => void;
}

const InputForm:React.FC<Props> = ({onSubmit}) => {
  const [movieMutation, setMovieMutation] = useState<Movies>(
    {id:'', name:''});
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setMovieMutation((prev) => (
      {...prev, name : event.target.value}
    ));
  }
  const onFormSubmit = (event:React.FormEvent) =>{
    event.preventDefault();
    onSubmit({
      ...movieMutation, id: (Math.floor(Math.random()*1000)).toString(), name: movieMutation.name
    });
    setMovieMutation({id:'', name:''});
  }

  return (
    <form action="#" onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">To watch list</span>
        <input type="text" id="name" className="form-control" required aria-label="Username"
               aria-describedby="basic-addon1" value={movieMutation.name} onChange={onChange}/>
        <button className='btn btn-primary' type='submit'>add</button>
      </div>
    </form>
  );
};

export default InputForm;