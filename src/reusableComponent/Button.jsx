import React from "react";
import Button from "@material-ui/core/Button";

const ButtonComponent = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        type={props.type}
        style={{width:props.width}}
        disabled={props.isdisabled}
      >
        {props.title}
      </Button>
    </div>
  );
};

export default ButtonComponent;
