import "./Inputs.scss";
import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
    const inputProps = Object.keys(rest).reduce((props, key) => {
        if (key !== 'children' && key !== 'dangerouslySetInnerHTML') {
            props[key] = rest[key];
        }
        return props;
    }, {});

    return (
        <div className="div-form">
            <label>{label}</label>
            <input ref={ref} {...inputProps} />
            {error ? <p>{error.message}</p> : null}
        </div>
    );
});