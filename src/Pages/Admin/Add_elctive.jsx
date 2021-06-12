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
import { useFormik } from "formik";
import * as yup from "yup";
import {BrowserRouter as Router, Link, withRouter } from "react-router-dom";


const drawerWidth = 240;



const branch = [
    "Computer Science",
    "Electronics and Communication",
    "Civil",
    "Electrical",
  ];
  const Semester = [
    "First",
    "Second",
    "Third",
    "Fourth",
    "Fifth",
    "Sixth",
    "Seven",
    "Eight",
  ];
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


export default function AddElective({history}) {
  const classes = useStyles();
  const schema =yup.object().shape({
    code:yup.string().required('Code is required'),
    name:yup.string().required("This field is required"),
    sem:yup.string().required("choose the sem"),
    branch:yup.string().required("choose the branch")
  })
  const formik =useFormik({
   initialValues:{
    code:"",
    name:"",
    sem:"",
    branch:"",
   },
   validationSchema:schema,
   onSubmit:(data)=>{
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
         <h1>Add elective page</h1>
         <form  onSubmit={formik.handleSubmit}>
             <div> <Grid container spacing={3}>
          <Grid item xs={6}>
          <TextField
                 width={400}
                    label="Code"
                    name="code"
                    onChange={formik.handleChange}
                    value={formik.values.code}
                    onBlur={formik.handleBlur}
                    error={formik.errors.code}
                    touched={formik.touched.code}
                    />
                    </Grid>
                     <Grid item xs={6}>
                     <TextField
                 width={400}
                    label="Enter elctive name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    />
                    </Grid>
                    </Grid>
                    <br/>
                    <Grid container spacing={3}>
          <Grid item xs={6}>
          <Select
                width={400}
                    label=" Select Sem"
                    data={Semester}
                    name="sem"
                    values={formik.values.sem}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.sem}
                    touched={formik.touched.sem}
                  />
         
                    </Grid>
                     <Grid item xs={6}>
                     <Select
                width={400}
                    label=" Select Branch"
                    data={branch}
                    name="branch"
                    values={formik.values.branch}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.branch}
                    touched={formik.touched.branch}
                  />
                     
                    </Grid>
                    </Grid>
                    <br/>
                    <BUTTON title="Submit" width="300px"></BUTTON>

             </div>
         </form>
        </Typography>
        
      </main>
    </div>
  );
}
