import React from "react";

const Button = ({ name, style }) => {
  return <button className={`block rounded-md ${style}`}>{name}</button>;
};

export default Button;
