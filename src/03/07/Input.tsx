import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
}

const Input = ({label, ...props} : InputProps) => {
  return (
  <div style={{marginBottom: "1rem"}}>
    <label htmlFor={props.id}>{label}</label>
    <input type="text" id={props.id} name={props.id} {...props} />
  </div>
  );
};

export default Input;
