import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { getCustomer } from './api/userApi';
import './App.css';
import CustomerCard from './customer';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function App() {
  const [user, setUser] = useState(null);
  getCustomer(1)
    .then(response => {
      setUser(response);
    });
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Paper className={classes.paper}>xs=5</Paper>
            <header className="App-header">
              <CustomerCard user={user} />
            </header>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>xs=2</Paper>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item>
                <ButtonGroup variant="contained" size="small" aria-label="Small contained button group">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Grid>
              <Grid item>
                <ButtonGroup variant="contained" size="small" aria-label="Small contained button group">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Grid>
              <Grid item>
                <ButtonGroup variant="contained" size="small" aria-label="Small contained button group">
                  <Button>One</Button>
                  <Button>Two</Button>
                  <Button>Three</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>xs=5</Paper>
            <header className="App-header">
              <CustomerCard user={user} />
            </header>
          </Grid>
        </Grid>
      </Container>
  </React.Fragment>
  );
}
