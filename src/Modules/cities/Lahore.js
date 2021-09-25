import Carousal from "../../Components/Carousal/Carousal";
import { Container,Row,Col  } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {FetchRestaurant} from "../../store/Actions/RestaurantAction"

import Loader from "../../Components/loader/Loader";

import { useEffect,useState } from "react";

import RestaurantCard  from "../../Components/restaurantCards/RestaurantCard";

export default function Lahore() {

const [loading,setLoading]=useState(false)

    const res = useSelector(state => state.RestaurantReducer.restaurantsArray)
   
    
const dispatch = useDispatch()

useEffect(()=>{
console.log("call action in component");

dispatch(FetchRestaurant(setLoading))

},[])


    return(
        <>
        <Carousal/>
        <Container>

            <Row>
                <Col xs={12} lg={12} md={12}>
<h3 style={{fontFamily:"sans-serif",fontWeight:"300",color:"#333333",marginTop:"5%",textAlign:"center"}}>POPULAR RESTAURANTS</h3>
                </Col>
            </Row>
            
            <Row>

                {
res.map((item)=>{
    if (item.cityName == "Lahore") {
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
        </>
    )
}