import { InputPasswordProps } from "types/types";
import "../Input.scss";
import { forwardRef } from "react";

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <div className="div-form">
        <label>{label}</label>
        <div>
          <input type="password" ref={ref} {...rest} />
        </div>
        {error ? <p>{error.message}</p> : null}
      </div>
    );
  }
);

InputPassword.displayName = "InputPassword";
