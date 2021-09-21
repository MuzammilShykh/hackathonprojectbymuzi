import React from 'react';
import {
     NavLink
  } from "react-router-dom";
  import { useState } from 'react';
  
export default function FoodCard2(props) {
const [to,setTo] = useState("")
    
    const ctaHandler= ()=>{

        if (props.cityName == "Faisalabad") {
      setTo("city/faisalabad")
        } 
        else if (
            props.cityName == "Lahore"
        )
        {
            setTo ("city/lahore")
        }
        else if (
            props.cityName == "Karachi"
        )
        {
            setTo ("city/karachi")
        }
        else
           
        {
            setTo ("city/islamabad")
        }
    }
   
  return (
    
    <div className='bg-image hover-zoom' style={{ maxWidth: '22rem',padding:"10px",margin:"100px auto" }}>
       <NavLink onClick={ctaHandler} to={to} >
           <figure className='figure' style={{ maxWidth: '22rem' }}>
      <img src={props.image} className='w-100  img-fluid' />
      <figcaption className='figure-caption' style={{position:"relative",bottom:"40px",color:"#fff",fontFamily:"sans-serif",fontWeight:"700",fontSize:"24px",paddingLeft:"3%"}}>{props.cityName}</figcaption>
      
      </figure>
      </NavLink>
    </div>
  
  );
}