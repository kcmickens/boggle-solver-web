import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
  function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={() => props.setShow(true)}>
        Start
      </Button>
      <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
        Randomize Board
      </Button>
      <Button variant="contained" color="primary" onClick={() => props.setEnd(true)}>
        End
      </Button>
    </div>
  );
}
export default ContainedButtons;
