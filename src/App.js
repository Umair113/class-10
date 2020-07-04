import React from 'react';
import NavBar from "./Components/NavBar";
import InfoPanel from "./Components/InfoPanel";

function App() {


  return (
   <div>
        <NavBar />
        <InfoPanel />
   </div>
  );
}

export default App;


/*
//import BarChart from "./barChart";
//import PieChart from "./PieChart";
//import { makeStyles } from '@material-ui/core/styles';
  
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:"center",
    flexDirection: "column",
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1)
    },
  },
  Paper: {
    width: 400,
    margin: "0 auto",
    justifyContent:"center",
    textAlign: "center"
  },
  input:{
    width:"96%",  
  },
  
 
}));
//return
//const classes = useStyles();
 <div className={classes.root}>
     <BarChart />
     <PieChart />
    </div>
import { Paper, TextField, Button} from '@material-ui/core';
import NavBar from "./NavBar";
 <NavBar />
      <Paper elevation={3} className={classes.Paper} >
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <br />
          <TextField label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" >
            Log in
          </Button >
        </form>
      </Paper>
 fetch("https://api.github.com/users/Umair113/repos")
    .then(response=>response.json())
    .then(json=>{
      console.log(json)
      setData(json)
    })

*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 


import React from 'react';

import './App.css';

function App() {
  return (

  );
}

export default App;
*/