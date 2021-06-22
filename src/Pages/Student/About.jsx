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
//import BUTTON from '..//..//reusableComponent/Button'
import TextField from '..//..//reusableComponent/textfirlddisabled'
//import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import StarHalfSharpIcon from '@material-ui/icons/StarHalfSharp';
import PersonIcon from '@material-ui/icons/Person';
import DoneIcon from '@material-ui/icons/Done';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
//import Grid from '@material-ui/core/Grid';
//import Box from '@material-ui/core/Box';
import "../style.css"
import {useFormik} from "formik";
//import * as yup from "yup";
import {BrowserRouter as Router, Link, withRouter } from "react-router-dom";


const drawerWidth = 240;

const icons = [
    <LocalLibraryIcon/>,
    <AddBoxIcon />,
    <DoneIcon/>,
    <StarHalfSharpIcon />,
    <PersonIcon />
]

const routes = ['/dashboard','/Helpme','/ChooseElective','/rating',,'/about'];

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
}));


export default function About({history}) {
  const classes = useStyles();
 
  
        
        const formik=useFormik({
            initialValues:{
                username:"Vaishnavi",
                usn:"2ji18cs099",
                sem:"Fifth",
                cgpa:"8.5",
                sgpa:"9.1",
                phone:"9632870199",
                email:"Vaishnavi@gmail.com",
                college:"Jain college of Engineering,Belgaum.",
         },
           
            onSubmit:(data) =>{
                console.log(data)
            }
    
        })

  return (
    console.log(formik),
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
        <Typography paragraph>  
          <div>
            <form onSubmit={formik.handleSubmit}>
            <div className="about-div-2">
                <h2>
                    Your information
                </h2>
            <div className="about-flex-box">
           <h3>Name :</h3>
              <TextField 
               width={200}
               label="Name"
               name="username"
               handleChange={formik.handleChange}
               values={formik.values.username}
               onBlur={formik.handleBlur}
               error={formik.errors.username}
               touched={formik.touched.username}/>
            </div>
            <div className="about-flex-box">
              <h3>USN :</h3>
              <TextField 
               label="Usn"
               width={200}
               name="usn"
               handleChange={formik.handleChange}
               values={formik.values.usn}
               onBlur={formik.handleBlur}
               error={formik.errors.usn}
               touched={formik.touched.usn}/>
            </div>
            <div className="about-flex-box">
            <h3>Semester :</h3>
            <TextField
                label="Semester"
                width={200}
                name="sem"
                values={formik.values.sem}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.sem}
                touched={formik.touched.sem} />
            </div>
            <div className="about-flex-box">
            <h3>CGPA :</h3>
              <TextField 
               width={200}
               label="CGPA"
               name="cgpa"
               handleChange={formik.handleChange}
               values={formik.values.cgpa}
               onBlur={formik.handleBlur}
               error={formik.errors.cgpa}
               touched={formik.touched.cgpa}/>
            </div>
           <div className="about-flex-box">
              <h3>SGPA :</h3>
              <TextField 
               width={200}
               label="SGPA"
               name="sgpa"
               handleChange={formik.handleChange}
               values={formik.values.sgpa}
               onBlur={formik.handleBlur}
               error={formik.errors.sgpa}
               touched={formik.touched.cgpa} />
            </div>
            <div className="about-flex-box">
            <h3>Phone :</h3>
              <TextField 
               width={200}
               label="Phone"
               name="phone"
               handleChange={formik.handleChange}
               values={formik.values.phone}
               onBlur={formik.handleBlur}
               error={formik.errors.phone}
               touched={formik.touched.phone}/>
               </div>
           
            <div className="about-flex-box">
                <h3>Email :</h3>
        
              <TextField 
              label="Email"
              name="email"
              width={200}
              handleChange={formik.handleChange}
              values={formik.values.email}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}/>
            </div>
            <div className="about-flex-box">
              <h3>College :</h3>
              <TextField 
              width={200}
              label="College"
              name="college"
              values={formik.values.college}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.college}
              touched={formik.touched.college}/>
            </div>
            </div>
            </form>
          </div>
        </Typography>
        
      </main>
    </div>
  );
}
