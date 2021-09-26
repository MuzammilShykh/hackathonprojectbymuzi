import React from 'react';
import {
     NavLink
  } from "react-router-dom";
  import { useState } from 'react';
  
export default function FoodCard2(item) {
const [to,setTo] = useState("")
    console.log(item.item.cityName);
    const ctaHandler= ()=>{
      
switch (item.item.cityName) {
  case "Faisalabad":
    setTo("/faisalabad")
    break;
    case "Lahore":
      setTo("/lahore")
      break;
      case "Karachi":
        setTo("/karachi")
        break;
        case "Islamabad":
          setTo("/islamabad")
          break;
  default:
    break;
}



    //     if (item.item.cityName == "Faisalabad") {
    //   setTo("/faisalabad")
    //     } 
    //     else if (
    //       item.item.cityName == "Lahore"
    //     )
    //     {
    //         setTo ("/lahore")
    //     }
    //     else if (
    //       item.item.cityName == "Karachi"
    //     )
    //     {
    //         setTo ("/karachi")
    //     }
    //     else
           
    //     {
    //         setTo ("/islamabad")
    //     }
     }
   
  return (
    
    <div className='bg-image hover-zoom' style={{ maxWidth: '22rem',padding:"10px",margin:"100px auto" }}>
       <NavLink onClick={ctaHandler} to={to} >
           <figure className='figure' style={{ maxWidth: '22rem' }}>
      <img src={item.item.image} className='w-100  img-fluid' />
      <figcaption className='figure-caption' style={{position:"relative",bottom:"40px",color:"#fff",fontFamily:"sans-serif",fontWeight:"700",fontSize:"24px",paddingLeft:"3%"}}>{item.item.cityName}</figcaption>
      
      </figure>
      </NavLink>
    </div>
  
  );
}