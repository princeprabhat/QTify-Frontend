import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, onClick, variant }) => {
  const btnVariant = variant === "text" ? "text" : "contained";

  return (
    <>
      <button className={styles[btnVariant]} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
