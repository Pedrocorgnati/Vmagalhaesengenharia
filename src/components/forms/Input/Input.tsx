//src/components/forms/Input/index.jsx
//'''
import { InputProps } from "types/types";
import "./Input.scss";
import { forwardRef } from "react";


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="div-form">
        <label>{label}</label>
        <input ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);
Input.displayName = "Input"; 
//'''