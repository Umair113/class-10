import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50
    //flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color:"blue"
  },
  values:{
    color:"black"
  }
}));

export default function GlobalStats() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
      let data = await response.json();

      delete data.results[0].source;
      setGlobalData(data.results[0]);
    }
    getData();
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {Object.keys(globalData).map((keys,ind)=>{
        return(
          <Grid item xs={12} sm={4} key={ind}>
          <Paper className={classes.paper} elevation={3}>
           <h3 className={classes.title}>{keys.replace(/_/g," ").toUpperCase()}</h3>
            <h3 className={classes.values}>{globalData[keys]}</h3>
          </Paper>
        </Grid>
        )
      })}
       
        

      </Grid>
    </div>
  );
}
