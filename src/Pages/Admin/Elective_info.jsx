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
import {useFormik} from "formik";
import * as yup from "yup";
import {BrowserRouter as Router, Link, withRouter } from "react-router-dom";


const drawerWidth = 240;


const Subjects = ["Java", "python", "Data Structure"];
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


export default function ElectiveInfo({history}) {
  const classes = useStyles();
 const schema=yup.object().shape({
   subject:yup.string().required("This field is required"),
   facultyname:yup.string().required("This field is required"),
   Intake:yup.string().required("This field is required"),
   ScopeofSubject:yup.string().required("This field is required"),
   companies:yup.string().required("This field is required"),
   syllabus:yup.string().required("Choose the file"),
   video:yup.string().required("Choose the video"),
   prerequists:yup.string().required("This field is required"),
   code:yup.string().required("This field is required"),

 })
  const formik=useFormik({
    initialValues:{
      subject:"",
      facultyname:"",
      Intake:"",
      ScopeofSubject:"",
      companies:"",
      syllabus:"",
      video:"",
      prerequists:"",
      code:"",
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
         <h1 style={{marginRight:"10px"}}>Elective information</h1>
         <div>
             <form action="">
                 
             <div className="about-flex-box">
           <h3>Choose Subject :</h3>
           <Select
                width={300}
                    label="Subject"
                    data={Subjects}
                    name="subject"
                    values={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.subject}
                    touched={formik.touched.subject}
                  />
            </div><br/>
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>Faculty Name :</h3>
           <TextField
                 width={300}
                  
                   
                    name="facultyname"
                    onChange={formik.handleChange}
                    value={formik.values.facultyname}
                    onBlur={formik.handleBlur}
                    error={formik.errors.facultyname}
                    touched={formik.touched.facultyname}
                    />
            </div>
            <br/>
            
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>Total Intake :</h3>
           <TextField
                 width={300}
                  
                   
                    name="Intake"
                    onChange={formik.handleChange}
                    value={formik.values.Intake}
                    onBlur={formik.handleBlur}
                    error={formik.errors.Intake}
                    touched={formik.touched.Intake}
                    />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>Scope of Subject:</h3>
           <TextField
                 width={300}
                  
                   
                    name="ScopeofSubject"
                    onChange={formik.handleChange}
                    value={formik.values.ScopeofSubject}
                    onBlur={formik.handleBlur}
                    error={formik.errors.ScopeofSubject}
                    touched={formik.touched.ScopeofSubject}
                    />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>Companies:</h3>
           <TextField
                 width={300}
                  
                   
                    name="companies"
                    onChange={formik.handleChange}
                    value={formik.values.companies}
                    onBlur={formik.handleBlur}
                    error={formik.errors.companies}
                    touched={formik.touched.companies}
                    />
            </div>
           
            <br/>
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>Syllabus(pdf):</h3>
           <TextField
                 width={300}
                  
                   type="file"
                    name="syllabus"
                    onChange={formik.handleChange}
                    value={formik.values.syllabus}
                    onBlur={formik.handleBlur}
                    error={formik.errors.syllabus}
                    touched={formik.touched.syllabus}
                    />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>Choose video file:</h3>
           <TextField
                 width={300}
                  
                   type="file"
                    name="video"
                    onChange={formik.handleChange}
                    value={formik.values.video}
                    onBlur={formik.handleBlur}
                    error={formik.errors.video}
                    touched={formik.touched.video}
                    />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>prerequists:</h3>
           <TextField
                 width={300}
                  
                    multiline
                    rowsMax={4}
                    name="prerequists"
                    onChange={formik.handleChange}
                    value={formik.values.prerequists}
                    onBlur={formik.handleBlur}
                    error={formik.errors.prerequists}
                    touched={formik.touched.prerequists}
                    />
            </div>
            <br/>
            <div className="about-flex-box">
           <h3 style={{marginRight:"20px"}}>Elective Code:</h3>
           <TextField
                 width={300}
                  
                    
                    name="code"
                    onChange={formik.handleChange}
                    value={formik.values.code}
                    onBlur={formik.handleBlur}
                    error={formik.errors.code}
                    touched={formik.touched.code}
                    />
            </div>
            <br/>
            <BUTTON title="Submit" width ="250px"></BUTTON>
            
             </form>
         </div>
         
         </Typography>
        
      </main>
    </div>
  );
}

