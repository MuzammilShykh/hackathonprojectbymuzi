import React from 'react'
import {

    NavLink
  } from "react-router-dom";
export default function About() {
    return (
        <div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <span class="display-1 d-block">404</span>
                <div class="mb-4 lead">The page you are looking for was not found.</div>
                <NavLink style={{textDecoration:"none",color:"#937754"}} to="/" class="btn btn-link">Back to Home </NavLink>
            </div>
        </div>
    </div>
</div>
            
        
    )
}
