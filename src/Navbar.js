import React from "react";
import './App.css';
import Mycomponent1 from "./Opentab1";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar=()=>{
    return(
<div>
<div class="container-fluid nav bg">
  <div class="row">
    <div class="col-10 mx-auto">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <div class="d-flex justify-content-between align-items-center ">
    <a class="navbar-brand col-6 mx-2" href="/">PrisonEd</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto row-1 col-1 my-6 mx-6 my-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/services">Services</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="http://localhost:5501/register.html" target="_blank">Register</a>
        </li>
      </ul>
    </div>
  </div>
</div>

      </nav>
    </div>
  </div>
</div>


</div>
    );
};

export default Navbar;