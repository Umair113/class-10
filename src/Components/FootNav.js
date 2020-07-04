import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LensIcon from '@material-ui/icons/Lens';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import ShowChartIcon from '@material-ui/icons/ShowChart';


const useStyles = makeStyles({
  root: {
   position:"fixed",
   width: "100%",
   left:0,
   bottom:0,
   color: "white",
   textAlign: "center"
  },
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();
  //   const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global States" icon={<LensIcon />} />
      <BottomNavigationAction label="Country States" icon={<NaturePeopleIcon />} />
      <BottomNavigationAction label="Graphs" icon={<ShowChartIcon />} />
    </BottomNavigation>
  );
}
