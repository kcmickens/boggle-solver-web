import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomGrid from './components/randomGrid';
import BuildGrid from './components/grid';
import ContainedButtons from './components/button';
import findAllSolutions from './components/bogglesolver/bogglesolver';
import { useFormik } from 'formik';

var wordList = require('./components/full_wordlist.json');
  wordList = wordList.words;
  console.log(wordList);
  let grid = RandomGrid();
  let solutions = findAllSolutions(grid,wordList);
  console.log(solutions);


function App() {
  const [value, setValue] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const [show, setShow] = useState(false);
  const [end, setEnd] = useState(false);

  const formik = useFormik({
    initialValues: {
        text: '',
    },
    onSubmit: values => {
      if(solutions.includes(values['text'])&& !userAnswers.includes(values['text'])){
        setValue(values['text']);
        setUserAnswers([...userAnswers, " " ,values['text']]);
      }
      else if(userAnswers.includes(values['text']))
        alert('Word already found!')
    },
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Boggle Solver
        </p>
        <div>
          {(show)? BuildGrid(grid):null }
        </div>
        
        <form onSubmit={formik.handleSubmit}>
      <label htmlFor="text">Guesses</label>
      <input
        id="text"
        name="text"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
        <ContainedButtons setShow ={setShow} setEnd = {setEnd}/>
        <h1>
        {(end)? solutions.map(word => word + " "):userAnswers}
        </h1>
      </header>
    </div>
  );
}

export default App;
