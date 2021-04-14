import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddBoxIcon from "@material-ui/icons/AddBox";
import StarHalfSharpIcon from "@material-ui/icons/StarHalfSharp";
import PersonIcon from "@material-ui/icons/Person";
import DoneIcon from "@material-ui/icons/Done";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Select from "../../reusableComponent/DropDown";
import BUTTON from "../../reusableComponent/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import "../style.css";
import { BrowserRouter as Router, Link, withRouter } from "react-router-dom";

const drawerWidth = 240;

const icons = [
  <LocalLibraryIcon />,
  <AddBoxIcon />,
  <DoneIcon />,
  <StarHalfSharpIcon />,
  <PersonIcon />,
];
const Subjects = ["Java", "python", "Data Structure"];

const routes = [
  "/dashboard",
  "/Helpme",
  "/ChooseElective",
  "/rating",
  "/about",
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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

export default function ChooseElective({ history }) {
  const classes = useStyles();

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
              <Avatar src="/broken-image.jpg">H</Avatar>
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
          <ListItem button key={0} onClick={() => history.push(routes[0])}>
            <ListItemIcon>{icons[0]}</ListItemIcon>
            <ListItemText primary={"Elective"} />
          </ListItem>

          <ListItem button key={1} onClick={() => history.push(routes[1])}>
            <ListItemIcon>{icons[1]}</ListItemIcon>
            <ListItemText primary={"Help Me"} />
          </ListItem>

          <ListItem button key={1} onClick={() => history.push(routes[2])}>
            <ListItemIcon>{icons[2]}</ListItemIcon>
            <ListItemText primary={"Choose Elective"} />
          </ListItem>

          <ListItem button key={1} onClick={() => history.push(routes[3])}>
            <ListItemIcon>{icons[3]}</ListItemIcon>
            <ListItemText primary={"Rate Faculty"} />
          </ListItem>

          <ListItem button key={1} onClick={() => history.push(routes[4])}>
            <ListItemIcon>{icons[4]}</ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          <div>
            <h1>Choose Elective</h1>
            <br/><br/>
            <Grid container spacing={4}>
            <Grid item xs={6}> 
            <h2>Select elective</h2>
            </Grid>
            <Grid item xs={6}> 
            <h2>Priority</h2>
            </Grid>
                 </Grid>

            <Grid container spacing={4}> 
          <Grid item xs={6}>
            <Select
                data={Subjects}
                width={300}
                label="Select"
                name="sem"
                
        
                
                //    values={formik.values.semester}
                //    onChange={formik.handleChange}
                //    onBlur={formik.handleBlur}
                //    error={formik.errors.sem}
                //    touched={formik.touched.sem}
              />
            </Grid>
            <Grid item xs={6}>
            <div>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="top"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="1"
                      labelPlacement="Bottom"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="2"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label="3"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Radio color="primary" />}
                      label="4"
                      labelPlacement="bottom"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={4}> 
           
            <Grid item xs={6}>
            <Select
                data={Subjects}
                width={300}
                label="Select"
                name="sem"
                backgroundColor="white"
                //    values={formik.values.semester}
                //    onChange={formik.handleChange}
                //    onBlur={formik.handleBlur}
                //    error={formik.errors.sem}
                //    touched={formik.touched.sem}
              />
            </Grid>
            <Grid item xs={6}>
            <div>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="position"
                    name="position"
                    defaultValue="top"
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="1"
                      labelPlacement="Bottom"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="2"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label="3"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Radio color="primary" />}
                      label="4"
                      labelPlacement="bottom"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Grid>
            </Grid>
            <br/>
            <Grid container spacing={4}> 
           
           <Grid item xs={6}>
           <Select
               data={Subjects}
               width={300}
               label="Select"
               name="sem"
               backgroundColor="white"
               //    values={formik.values.semester}
               //    onChange={formik.handleChange}
               //    onBlur={formik.handleBlur}
               //    error={formik.errors.sem}
               //    touched={formik.touched.sem}
             />
           </Grid>
           <Grid item xs={6}>
           <div>
               <FormControl component="fieldset">
                 <RadioGroup
                   row
                   aria-label="position"
                   name="position"
                   defaultValue="top"
                 >
                   <FormControlLabel
                     value="1"
                     control={<Radio color="primary" />}
                     label="1"
                     labelPlacement="Bottom"
                   />
                   <FormControlLabel
                     value="2"
                     control={<Radio color="primary" />}
                     label="2"
                     labelPlacement="bottom"
                   />
                   <FormControlLabel
                     value="3"
                     control={<Radio color="primary" />}
                     label="3"
                     labelPlacement="bottom"
                   />
                   <FormControlLabel
                     value="end"
                     control={<Radio color="primary" />}
                     label="4"
                     labelPlacement="bottom"
                   />
                 </RadioGroup>
               </FormControl>
             </div>
           </Grid>
           </Grid>
           <br/>
           <Grid container spacing={4}> 
           
           <Grid item xs={6}>
           <Select
               data={Subjects}
               width={300}
               label="Select"
               name="sem"
               backgroundColor="white"
               //    values={formik.values.semester}
               //    onChange={formik.handleChange}
               //    onBlur={formik.handleBlur}
               //    error={formik.errors.sem}
               //    touched={formik.touched.sem}
             />
           </Grid>
           <Grid item xs={6}>
           <div>
               <FormControl component="fieldset">
                 <RadioGroup
                   row
                   aria-label="position"
                   name="position"
                   defaultValue="top"
                 >
                   <FormControlLabel
                     value="1"
                     control={<Radio color="primary" />}
                     label="1"
                     labelPlacement="Bottom"
                   />
                   <FormControlLabel
                     value="2"
                     control={<Radio color="primary" />}
                     label="2"
                     labelPlacement="bottom"
                   />
                   <FormControlLabel
                     value="3"
                     control={<Radio color="primary" />}
                     label="3"
                     labelPlacement="bottom"
                   />
                   <FormControlLabel
                     value="end"
                     control={<Radio color="primary" />}
                     label="4"
                     labelPlacement="bottom"
                   />
                 </RadioGroup>
               </FormControl>
             </div>
           </Grid>
           </Grid>
           <br/> <br/>
           <BUTTON 
          //  isdisabled={!(formik.dirty && formik.isValid)}
            title="Submit"/>
              
              
                     </div>
        </Typography>
      </main>
    </div>
  );
}
