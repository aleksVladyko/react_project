import React from "react";
import { Link, useMatch } from "react-router-dom";
import styles from "./MyLink.module.css"

export const MyLink = ({children, to, ...props}) => {
    const match = useMatch(to);// проверяет совпадение что активен выбранный to

   return (
    <Link 
    to={to}
    className={
      match ?  styles.active : styles.notactive
    }       
     {...props}
      >
    {children}
    </Link>
  );
};