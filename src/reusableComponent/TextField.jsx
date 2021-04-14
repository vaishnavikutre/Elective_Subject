import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles';
import "../Pages/style.css"

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        height:"20px",
      },
    },
  }));

function TextFieldComponent(props) {
    const Classes=useStyles()
    return (
        
        < >
            <TextField id="outlined-basic" 
            style={{width:props.width,backgroundColor:'white',}}
            
           
            label={props.label}
             name={props.name} 
            onChange={props.onChange}
            value={props.value}
            onBlur={props.onBlur}
            error={props.touched && props.error ? true :false}
            helperText={props.touched && props.error ?props.error : ""}
            
           
            variant="outlined" />
        </>
    )
}


export default TextFieldComponent

