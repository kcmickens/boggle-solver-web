import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//     },
//     paper: {
//       padding: theme.spacing(1),
//       textAlign: 'center',
//       color: theme.palette.text.secondary,
//     },
//   }));
export default function FormRow(row) {
    //const classes = useStyles();
    return (
        <React.Fragment>
                <Grid item xs = {2}>
                <Paper>{row[0]}</Paper>
                </Grid>
                <Grid item xs= {2}>
                <Paper>{row[1]}</Paper>
                </Grid>
                <Grid item xs= {2}>
                <Paper>{row[2]}</Paper>
                </Grid>
                <Grid item xs= {2}>
                <Paper>{row[3]}</Paper>
                </Grid>
                <Grid item xs= {2}>
                <Paper>{row[4]}</Paper>
                </Grid>
            </React.Fragment>
        );
}