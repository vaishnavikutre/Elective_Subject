import React, { useState } from 'react'
import Heading from "../reusableComponent/Heading";
import TextField from "../reusableComponent/TextField.jsx"
import errorToast from "../reusableComponent/errorToast";
import successToast from "../reusableComponent/successToast";

import Button from  "@material-ui/core/Button";
import "../Pages/style.css"
import { BrowserRouter as Router, Link, Switch, Route, withRouter } from "react-router-dom";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Container from '@material-ui/core/Container';
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Loader from "../reusableComponent/Button";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
//import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));



function Login() {
  const history = useHistory();
  const [state, setState] = useState(false);
  var variable1;
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const schema = yup.object().shape({
    email: yup.string().required('This field is required'),
    password: yup.string().required().min(4, 'Create a strong password'),

  });
  const formik = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: schema,
      onSubmit: (data) => {
        
        setState(true);
        axios({
          url: 'http://192.168.43.242:8000/users/login/',
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          data: data
        }).then((response) => {
          console.log(response)
          setState(false)

          
          if (response.status === 200) {
            
            variable1 = localStorage.setItem("refresh",response.data.refresh);
            console.log(localStorage.getItem(variable1));
            localStorage.setItem("access",response.data.access);
            localStorage.setItem("username",response.data.username);
            localStorage.setItem("email",response.data.email);
            localStorage.setItem("dob",response.data.dob);
            localStorage.setItem("gender",response.data.gender);
            localStorage.setItem("role",response.data.role);
          
          if (response.data.role === "none") {
            errorToast("You are neither a student nor a faculty member");
            //history.push("/");
          }
          if (response.data.role === "student") {
            successToast("successfully login");
            history.push("/dashboard");
          }
          if (response.data.role === "faculty") {
            successToast("successfully login");
            history.push("/Faculty/FacultyDash");
          }
        }


        }).catch((error) => {
          console.log(error.response)
          if(error.response.status === 401) {
            errorToast(error.response.data.detail);
          }
         
        })
      },
    }
  )


  return (
     
    <div>
      {state ?
       <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
<CircularProgress color="inherit" />
</Backdrop>
     :
        <div className="app" >

          <div className="log-div" >

            <Heading
              data="Login"

            />
            <br />
            
            <form onSubmit={formik.handleSubmit}>


              <TextField
                label="email"
                name="email"
                handleChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <br/><br></br>

              <TextField
                label="Password"
                name="password"
                handleChange={formik.handleChange}
                values={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                touched={formik.touched.password}
              //   type="password"
              />
              <br />
              <a href='forgotpasslink ' style={{ float: "right" }}>Forgot Password?</a><br /><br />

              <Button
                 variant="contained"
                 color="primary"
                 title="Login"
                 type="submit"
                onClick={()=>{setState(); handleToggle();}} disabled={!(formik.dirty && formik.isValid) ? true : false} >Login</Button>
              <Link to="/Signup"><h5>Don't have account? SignUp</h5></Link>

             
            </form>

            
          </div>
          
        </div>
        
}
      
    </div>
   
)
}

export default Login
