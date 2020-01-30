import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormRow from './FormRow';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   paper: {
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

export default function BuildGrid(grid) {
  //const classes = useStyles();

  return (
    <div style = {{padding: '0 0 0 20%'}}>
      <Grid container spacing={1}>
        <Grid container item xs={"auto"} spacing={1}>
          {FormRow(grid[0])}
        </Grid>
        <Grid container item xs={"auto"} spacing={1}>
          {FormRow(grid[1])}
        </Grid>
        <Grid container item xs={"auto"} spacing={1}>
          {FormRow(grid[2])}
        </Grid>
        <Grid container item xs={"auto"} spacing={1}>
          {FormRow(grid[3])}
        </Grid>
        <Grid container item xs={"auto"} spacing={1}>
          {FormRow(grid[4])}
        </Grid>
      </Grid>
    </div>
  );
}

// function changeVisability(){
  
// }