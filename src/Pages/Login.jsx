import React from 'react'
import Heading from "../reusableComponent/Heading";
import TextField from "../reusableComponent/TextField"
import Button from "../reusableComponent/Button"
import "../Pages/style.css"
import {BrowserRouter as Router, Link, Switch, Route, withRouter } from "react-router-dom";
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import Container from '@material-ui/core/Container';
import { useFormik } from "formik";
// import axios from "axios";
import * as yup from "yup";

function Login() {
    const schema = yup.object().shape({
        usn: yup.string().required('This field is required'),
        password: yup.string().required().min(4, 'Create a strong password'),
       
      });
    const formik = useFormik(
        {
            initialValues:{
                usn:"",
                password:"",
            },
            validationSchema:schema,
            onSubmit:(data) =>{
                console.log(data)
            }
        }
    )
    return (
        console.log(formik),
        <div className="app" >
       
          <div className="log-div" >

<Heading 
            data="Login"
         
            />
            <br/>
    
            <form onSubmit={formik.handleSubmit}>
           
            
          <TextField 
          label="usn"
          name="usn"
          onChange={formik.handleChange}
          value={formik.values.usn}
          onBlur={formik.handleBlur}
          error={formik.errors.usn}
          touched={formik.touched.usn}
          />
          <br/>

           <TextField 
          label="Password"
          name="password"
          onChange={formik.handleChange}
          values={formik.values.password}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
        //   type="password"
          />
          <br/>
           <a href='forgotpasslink ' style={{float:"right"}}>Forgot Password?</a><br/><br/>

          <Button 
          //  isdisabled={!(formik.dirty && formik.isValid)}
            title="Login"/>
      <Link to="/Signup"><h5>Don't have account? SignUp</h5></Link>      
        

            </form>
            
            
        </div>
     </div>
    )
}

export default Login
