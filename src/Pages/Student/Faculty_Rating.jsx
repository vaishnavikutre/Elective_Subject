import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import StarHalfSharpIcon from '@material-ui/icons/StarHalfSharp';
import PersonIcon from '@material-ui/icons/Person';
import DoneIcon from '@material-ui/icons/Done';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import "../style.css"
import {BrowserRouter as Router, Link, withRouter } from "react-router-dom";
function createData(name) {
  return { name };
}
const rows = [
  createData('Python'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),
  createData('Advance Java'),



];

 
const drawerWidth = 240;

const icons = [
    <LocalLibraryIcon/>,
    <AddBoxIcon />,
    <DoneIcon/>,
    <StarHalfSharpIcon />,
    <PersonIcon />
]

const routes = ['/dashboard','/Helpme','/ChooseElective','/rating','/about'];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default function FacultyRating({history}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
         <div className="nav-item1">
         <Typography variant="h6" noWrap>
            Student DashBoard
          </Typography>
         </div>

          <div className="nav-item2">
              <IconButton>
          <Avatar src="/broken-image.jpg" >H</Avatar>
          </IconButton>
          </div>
          <div>
              <Button color="inherit">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
         
            <ListItem button key={0} onClick={()=>history.push(routes[0])}>
              <ListItemIcon>{icons[0]}</ListItemIcon>
              <ListItemText primary={"Elective"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[1])}>
              <ListItemIcon>{icons[1]}</ListItemIcon>
              <ListItemText primary={"Help Me"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[2])}>
              <ListItemIcon>{icons[2]}</ListItemIcon>
              <ListItemText primary={"Choose Elective"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[3])}>
              <ListItemIcon>{icons[3]}</ListItemIcon>
              <ListItemText primary={"Rate Faculty"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[4])}>
              <ListItemIcon>{icons[4]}</ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
        </List>
        <Divider />
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} style={{minHeight:45}} />
        
         <div className="ContainerRating">
         <Grid item xs={6}>
         <div className="electivesChoosen">
         <TableContainer component={Paper}>
      <Table className={classes.table1} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><div style={{ fontSize: 20, textAlign: "center" }}>Allocated Electives</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow  key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           </div>
           </Grid>
           <Grid item xs={6}>
           <div className="rating">
           <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
         </div>
       </Grid>
       <Grid item xs={6}>
         <div className="Comment">
           <label>Write your comment here :<textarea style={{width:373,height:74,marginBottom:410}}>
            
           </textarea ></label>
         </div>
      </Grid>
       </div>
      </main>
    </div>
  );
}
