import React from 'react';
import TextField from '..//..//reusableComponent/TextField'
import Select from '..//..//reusableComponent/DropDown'
import BUTTON from '..//..//reusableComponent/Button'
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
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';
import "../style.css"
import * as yup from "yup";
import { useFormik } from "formik";
import {BrowserRouter as Router, Link, withRouter } from "react-router-dom";


const drawerWidth = 240;


const college=['jain collge','KLE college']
const routes = ['/admin/Add_college','/admin/Add_elective','/admin/Add_user','/admin/Electiveinfo','/admin/ElectiveScore'];

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


export default function AddUser({history}) {
  const classes = useStyles();
  const schema =yup.object().shape({
    name:yup.string().required("This field is required"),
    college:yup.string().required("Select the college"),
    password:yup.string().required("create strong password"),
    electivename:yup.string().required("This field is required"),
  })
  const formik =useFormik({
   initialValues:{
   
    name:"",
    college:"",
    password:"",
    electivename:"",
   
   },
   validationSchema:schema,
   onSubmit:(data)=>{
     console.log(data)
   }

  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
         <div className="nav-item1">
         <Typography variant="h6" noWrap>
            Admin DashBoard
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
              {/* <ListItemIcon>{icons[0]}</ListItemIcon> */}
              <ListItemText primary={"Add college"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[1])}>
              {/* <ListItemIcon>{icons[1]}</ListItemIcon> */}
              <ListItemText primary={"Add elective"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[2])}>
              {/* <ListItemIcon>{icons[2]}</ListItemIcon> */}
              <ListItemText primary={"Add user"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[3])}>
              {/* <ListItemIcon>{icons[3]}</ListItemIcon> */}
              <ListItemText primary={"Add elective info"} />
            </ListItem>

            <ListItem button key={1} onClick={()=>history.push(routes[4])}>
              {/* <ListItemIcon>{icons[4]}</ListItemIcon> */}
              <ListItemText primary={"Add elective score data"} />
            </ListItem>
        </List>
        <Divider />
       
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph> 
        <form action="">
         <h1>Add user</h1>
         <div className="about-flex-box">
           <h3>Name :</h3>
           <TextField
                 width={300}
                    label="Your Name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3>Select college :</h3>
           <Select
                width={300}
                    label=" Select College"
                    data={college}
                    name="college"
                    values={formik.values.college}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.college}
                    touched={formik.touched.college}
                  />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3>Password :</h3>
           <TextField
                 width={300}
                    label="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3>Confirm pass :</h3>
           <TextField
                 width={300}
                    label="Enter elctive name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    />
            </div>
            <br/>
          <BUTTON title="Submit"></BUTTON>
          </form>
         </Typography>
        
      </main>
   
    </div>
  );
}
