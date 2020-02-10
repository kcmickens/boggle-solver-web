import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginButton from './LoginButton';
import { db } from '../firebase';
import RandomGrid from './randomGrid';
import findAllSolutions from './bogglesolver/bogglesolver';
var wordList = require('./full_wordlist.json');
wordList = wordList.words;
console.log(wordList);
let boardMode = 'randomGrid';
let mode = 0;
let board = RandomGrid();
var solutions = findAllSolutions(RandomGrid(),wordList);
console.log(solutions);
const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
function makeGrid(grid){
  let temp = [];
  let result = [];
  console.log(grid);
  for(let x = 0; x<5;x++){
    for(let z = 0;z<5;z++){
      temp.push(grid[z+(5*x)]);
    }
    result.push(temp);
    temp = [];
  }
  return result;
}
function switchBoard(){
  mode++;
  if(mode>4){mode=0;}
  switch(mode){
    case 0: {
      boardMode='randomGrid';
      board = RandomGrid();
      solutions = findAllSolutions(board,wordList);
      console.log(solutions);
      break;
    }
    case 1:{
      boardMode='grid0';
      db.collection('grids').doc('grid0').get().then(snapshot => {
        console.log(snapshot.data().grid);
        board = makeGrid(snapshot.data().grid);
        console.log(board);
        solutions = findAllSolutions(board,wordList);
      });
      break;
    }
    case 2:{
      boardMode='grid1';
      db.collection('grids').doc('grid1').get().then(snapshot => {
        console.log(snapshot.data());
        board = makeGrid(snapshot.data().grid);
        solutions = findAllSolutions(board,wordList);
      });
      break;
    }
    case 3:{
      boardMode='grid2';
      db.collection('grids').doc('grid2').get().then(snapshot => {
        console.log(snapshot.data());
        board = makeGrid(snapshot.data().grid);
        solutions = findAllSolutions(board,wordList);
      });
      break;
    }
    case 4:{
      boardMode='grid3';
      db.collection('grids').doc('grid3').get().then(snapshot => {
        console.log(snapshot.data());
        board = makeGrid(snapshot.data().grid);
        solutions = findAllSolutions(board,wordList);
      });
      break;
    }
    default:{
      boardMode='randomGrid';
      board = RandomGrid();
      solutions = findAllSolutions(board,wordList);
      console.log(solutions);
      console.log(board);
    }
  }
}

function ContainedButtons({setShow, setEnd, setUser}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={() => setShow(true)}>
        Start
      </Button>
      <Button variant="contained" color="primary" onClick={()=>switchBoard(setShow(false))}>
        Switch Board
      </Button>
      <Button variant="contained" color="primary" onClick={() => setEnd(true)}>
        End
      </Button>
      <LoginButton variant="contained" color="primary" setUser={(user) => setUser(user)} />
    </div>
  );
}
export {ContainedButtons, boardMode, solutions, board};
