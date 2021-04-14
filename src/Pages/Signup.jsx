import React from 'react'
import Heading from "../reusableComponent/Heading";
import TextField from "../reusableComponent/TextField"
import Button from "../reusableComponent/Button"
import Select from "../reusableComponent/DropDown"
import "../Pages/style.css"
import { useFormik } from "formik";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as yup from "yup";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
function Signup() {
    const phoneRegExp=/^\d{10}$/;
    const branch = [
        "Computer Science",
        "Electronics and Communication",
        "Civil",
        "Electrical",
      ];
      const Colleges=[
          "Jain College of Engineering",
          "GIT",
          "SGBIT",
          "KLE,Sheshgiri"
      ];
    const semester = [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seven",
        "Eight",
      ];




     const schema =yup.object().shape({
name:yup.string().required('This field is required'),
usn:yup.string().required('This field is required'),
email: yup.string().required("This field is required").email("Invalid Email address"),
password: yup.string().required().min(4, 'Create a strong password'),
mobile: yup.string().matches(phoneRegExp,"Invalid phone number"),
confirm_password:   yup.string().required("This field is required"),      
});
    
    const formik=useFormik({
        initialValues:{
            name:"",
            sem:"",
            mobile:"",
            email:"",
            branch:"",
            usn:"",
            sgpa:"",
            password:"",
            college:"",
            confirm_password:"",

        },
        validationSchema:schema,
        onSubmit:(data) =>{
            console.log(data)
        }

    })

    return (
        console.log(formik),
        <div className="app">
            <div className="signup-div">

                <form onSubmit={formik.handleSubmit}>
                <Heading data="Sign up?"/> 
                <br/><br/> 
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                 width={200}
                    label="Name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    error={formik.errors.name}
                    touched={formik.touched.name}
                    />
        </Grid>
    
        <Grid item xs={6}>
        <TextField 
        
                    label="Usn"
                    width={200}
                    name="usn"
                    onChange={formik.handleChange}
                    value={formik.values.usn}
                    onBlur={formik.handleBlur}
                    error={formik.errors.usn}
                    touched={formik.touched.usn}
                    />
        </Grid>

                </Grid>
                <br/><br/>
                  

                <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                 width={200}
                    label="Mobile"
                    name="mobile"
                    onChange={formik.handleChange}
                    value={formik.values.mobile}
                    onBlur={formik.handleBlur}
                    error={formik.errors.mobile}
                    touched={formik.touched.mobile}
                    />
        </Grid>
        <Grid item xs={6}>
        <TextField 
        
                    label="Email"
                    name="email"
                    width={200}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    error={formik.errors.email}
                    touched={formik.touched.email}
                    />
        </Grid>

                </Grid>
                <br/><br/>
                
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <Select
                width={200}
                    label="College"
                    data={Colleges}
                    name="college"
                    values={formik.values.college}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.college}
                    touched={formik.touched.college}
                  />
               
        </Grid>
        <Grid item xs={6}>
        <Select
                width={200}
                    label="Branch"
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
                  
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <Select
                    label="Semester"
                    data={semester}
                    width={200}
                    name="sem"
                    values={formik.values.semester}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.errors.sem}
                    touched={formik.touched.sem}
                  />
               
        </Grid>
        <Grid item xs={6}>
        <TextField
                 width={200}
                    label="SGPA"
                    name="sgpa"
                    onChange={formik.handleChange}
                    value={formik.values.sgpa}
                    onBlur={formik.handleBlur}
                    error={formik.errors.sgpa}
                    touched={formik.touched.sgpa}
                    />
        </Grid>

                </Grid>
               <br/>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                <TextField
                 width={200}
                    label="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    error={formik.errors.password}
                    touched={formik.touched.password}
                    />
        </Grid>
        <Grid item xs={6}>
        <TextField 
                    width={200}      
                    label="confirm_Password"
                    name="confirm_password"
                    onChange={formik.handleChange}
                    value={formik.values.confirm_password}
                    onBlur={formik.handleBlur}
                    error={formik.errors.confirm_password}
                    touched={formik.touched.confirm_password}
                    />
        </Grid>

                </Grid>
                <br/><br/> <br/>
                <Button 
          //  isdisabled={!(formik.dirty && formik.isValid)}
            title="Signup"/>
            <a href="">
            <h5>Already Registered? Signin here</h5>
            </a>
           
                </form>
            </div>
        </div>
    )
}

export default Signup
