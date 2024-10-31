import React from "react";
import "./Button.css";

const Button = ({ className, children, ...props }) => {
  return (
    <button className={`join-btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
