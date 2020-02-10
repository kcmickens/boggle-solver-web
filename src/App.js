import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BuildGrid from './components/grid';
import {ContainedButtons, boardMode,solutions, board} from './components/button';
import { useFormik } from 'formik';
import {db} from './firebase.js';
let scoreUpdate = db.collection('users');

function App() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [show, setShow] = useState(false);
  const [end, setEnd] = useState(false);
  const [user, setUser] = useState(null); 
  const [score, setScore] = useState(0);
  const formik = useFormik({
    initialValues: {
        text: '',
    },
    onSubmit: values => {
      if(solutions.includes(values['text'].toLowerCase())&& !userAnswers.includes(values['text'].toLowerCase())){
        setUserAnswers([...userAnswers, " " ,values['text'].toLowerCase()]);
        setScore(values['text'].length+score+5);
        if(boardMode!=='randomGrid'){
          var temp;
          scoreUpdate.doc(boardMode).get().then(snapshot =>{
            console.log(snapshot);
            temp = snapshot.data().High_Score;
            console.log(temp);
          });
          console.log(score);
          console.log(boardMode);
          if(temp<score) scoreUpdate.doc(boardMode).set({score: score, user:user.displayName}).then(()=>{
            console.log("Successfully written")}).catch((e)=>console.log(e));
        }
      }
      else if(userAnswers.includes(values['text'].toLowerCase()))
        alert('Word already found!');
    },
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            {user != null &&
	            <p>Welcome, {user.displayName} ({user.email})</p> 
            } 
        <p>
          Boggle Solver, Board: {boardMode}
        </p> 
        <div>
          {(show)? BuildGrid(board):null }
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
        <ContainedButtons setShow ={setShow} setEnd = {setEnd} setUser = {setUser}/>
        <h1>
          Score: {score}
        </h1>
        <h1>
        {(end)? solutions.map(word => word + " "):userAnswers}
        </h1>
        <h1>
          Score is 5 points per word plus the length of the word.
          Sign in to save score
        </h1>
      </header>
    </div>
  );
}

export default App;
//Used https://jaredpalmer.com/formik/docs/tutorial and also used https://material-ui.com/components/lists/