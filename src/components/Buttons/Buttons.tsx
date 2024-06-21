//src/components/Buttons/Buttons.tsx
//'''
import React from 'react';
import { Link } from "react-router-dom";
import './Button.scss';
import { ButtonProps } from "types/types";

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, className = '', children, to, href, isExternal = false }) => {
  if (to) {
    return (
      <Link to={to} className={`button ${className}`} onClick={onClick}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} className={`button ${className}`} onClick={onClick} target={isExternal ? '_blank' : '_self'} rel={isExternal ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  } else {
    return (
      <button type={type} className={`button ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
//'''