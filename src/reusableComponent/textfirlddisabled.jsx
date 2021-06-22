import React from 'react'
import TextField from '@material-ui/core/TextField'
//import { makeStyles } from '@material-ui/core/styles';
import "../Pages/style.css"

const disabledClassNameProps = { className: "Mui-disabled" };

function TextFieldComponent(props) {
    
    return (
        
        < >
            <TextField id="outlined-basic" 
            style={{width:props.width,backgroundColor:'white',}}
           type={props.type}
           rowsMax={props.rowsMax}
            label={props.label}
             name={props.name} 
            value={props.values}
            onBlur={props.onBlur}
            error={props.touched && props.error ? true :false}
            helperText={props.touched && props.error ?props.error : ""}
            onChange={props.handleChange}
            variant="outlined" 

            {...disabledClassNameProps}
        inputProps={{ readOnly: true }}
        
            />
        </>
    )
}
export default TextFieldComponent