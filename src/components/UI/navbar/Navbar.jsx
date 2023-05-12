import React from "react";
import "./NavbarStyles.css"
import { MyLink } from "../CustomLink/MyLink";
import { Outlet } from "react-router-dom";

export const Navbar = () => {


  return (
    <div className="container-fluid">

      <header className="navbar_form">

        <MyLink to="/" >Home</MyLink>
        <MyLink to="/login" >Login</MyLink>
        <MyLink to="/register" >Register</MyLink>
        <MyLink to="/login/id"  >UserPage</MyLink>

      </header>


      <Outlet />



      <footer className="fotter mt-auto py-8 fixed-bottom">
        <div className="container text-end">
          <span className="text-muted fs-5 ">designed by Vladyko Alexander.</span>
        </div>
      </footer>
    </div>


  );
};