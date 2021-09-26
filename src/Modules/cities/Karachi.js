import Carousal from "../../Components/Carousal/Carousal";
import { Container,Row,Col  } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {FetchRestaurant} from "../../store/Actions/RestaurantAction"

import Loader from "../../Components/loader/Loader";

import { useEffect,useState } from "react";

import RestaurantCard  from "../../Components/restaurantCards/RestaurantCard";

export default function Karachi() {

const [loading,setLoading]=useState(false)

    const res = useSelector(state => state.RestaurantReducer.restaurantsArray)
   
    
const dispatch = useDispatch()

useEffect(()=>{

dispatch(FetchRestaurant(setLoading))

},[])


    return(
        <>
        <Carousal cityName= "Karachi"/>
        <Container>

            <Row>
                <Col xs={12} lg={12} md={12}>
<h3 style={{fontFamily:"sans-serif",fontWeight:"300",color:"#333333",marginTop:"5%",textAlign:"center"}}>POPULAR RESTAURANTS</h3>
                </Col>
            </Row>
            
            <Row>

                {
res.map((item)=>{
    if (item.cityName == "Karachi") {
        return(
        
            <Col xs={12} sm={12} lg={3} md={3}>
            <RestaurantCard key = {item.ID} item={item}/>
           
            
            </Col>
                
        ) 
    
    }
       
    
})
}

{loading && <div style={{textAlign:"center"}}><Loader/></div>}



</Row>





        </Container>



        <Container style={{marginTop:"5%",marginBottom:"5%"}}>
            <h1 style={{fontWeight:"700",fontSize:"32px",color:"#333333"}}>Food Delivery in Karachi From Only The Best Restaurants</h1>
            <p style={{fontWeight:"300" ,fontSize:"14px"}}>For those who like good food, exciting new options are now available in Karachi. Whether you live in Karachi, or are simply enjoying a holiday in the area, culinary delights aplenty are now just a simple online order away. The Karachi food delivery service has enjoyed a culinary renaissance in recent years, with a blossoming of new restaurants and take away eateries on almost every street; in fact, there are now literally hundreds of restaurants in Karachi, and foodpanda.com is the fastest, easiest and most reliable way of locating and ordering from the outlet of your choice. And whether you're in the mood for some comfortably familiar flavours, or fancy sampling some excitingly exotic dish,
             the meal of your choice is now just a few button clicks away, delivered fresh and piping hot to your door.</p>
       
       <h1  style={{fontWeight:"700",fontSize:"32px",color:"#333333"}}>Why food delivery from foodpanda?</h1>
      

       
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>
       Our team of experts have paid a visit to every restaurant you’ll find here, and checked they’re up to our strict standards -
        only Karachi's most beloved spots are here to order from. Quickly place and pay for your order online, and find your food delivered straight to your door in no time at all.


       </p>

       <h1  style={{fontWeight:"700" ,fontSize:"32px",color:"#333333"}}>Discover the Best Restaurants in Karachi</h1>
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>
       Let us do the hard part of entertaining and bring the food right to you and your friends. Alternatively if you need to organize some 
       catering for your co-workers, are working late, or want to treat the team, you can conveniently order straight to your office.
       </p>


      
        </Container>




















        </>
    )
}