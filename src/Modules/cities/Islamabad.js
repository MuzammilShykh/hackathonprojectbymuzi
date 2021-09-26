import Carousal from "../../Components/Carousal/Carousal";
import { Container,Row,Col  } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {FetchRestaurant} from "../../store/Actions/RestaurantAction"

import Loader from "../../Components/loader/Loader";

import { useEffect,useState } from "react";

import RestaurantCard  from "../../Components/restaurantCards/RestaurantCard";

export default function Islamabad() {

const [loading,setLoading]=useState(false)

    const res = useSelector(state => state.RestaurantReducer.restaurantsArray)
   
    
const dispatch = useDispatch()

useEffect(()=>{

dispatch(FetchRestaurant(setLoading))

},[])


    return(
        <>
        <Carousal cityName= "Islamabad"/>
        <Container>

            <Row>
                <Col xs={12} lg={12} md={12}>
<h3 style={{fontFamily:"sans-serif",fontWeight:"300",color:"#333333",marginTop:"5%",textAlign:"center"}}>POPULAR RESTAURANTS</h3>
                </Col>
            </Row>
            
            <Row>

                {
res.map((item)=>{
    if (item.cityName == "Islamabad") {
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
            <h1 style={{fontWeight:"700",fontSize:"32px",color:"#333333"}}> Food delivery in Islamabad has never been easier</h1>
            <p style={{fontWeight:"300" ,fontSize:"14px"}}>Pakistan's capital and a pulsating, energetic and cosmopolitan city, Islamabad enjoys a multicultural and diverse food scene. Thanks to its rapid urbanisation, you can find numerous international chains as well as incredibly popular local and traditional establishments, offering nearly unlimited cuisine options when it comes to dining out. What's even more exciting, food delivery in Islamabad is now made super-easy and convenient. Reason? foodpanda serves across the length and breadth of this largest city of Pakistan, enabling easy delivery from restaurants in Islamabad.</p>
       
       <h1  style={{fontWeight:"700",fontSize:"32px",color:"#333333"}}>Islamabad food delivery is just what modern fast-paced lifestyles need</h1>
      

       
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>
       Aside from health reasons, savouring great food could be a wonderful stress-buster! Especially in a thriving metropolis like Islamabad, you would be leading a very busy lifestyle where food always takes a backseat. Late to the office? No time to prepare food for lunch? Lazy to get up on a Sunday morning? Well, these are just a few of the everyday scenarios where you are most likely going to skip your meals. With food delivery in Islamabad, you never have to forgo your food. With our online portal and mobile app,
        you can quickly choose from hundreds and hundreds of restaurants, cafes, and takeaways in your city and get satisfying, healthy and delicious food right at your doorstep!


       </p>

       <h1  style={{fontWeight:"700" ,fontSize:"32px",color:"#333333"}}>What to order from Islamabad restaurants for delivery</h1>
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>
       Perhaps, you are a die-hard fan of local delicacies prepared in a traditional way. Angeethi, Andaaz, Al-Nakheel Lebanese Cuisine, and Islamabad Grill are a few of the excellent places you can consider for authentic Pakistani food prepared just like at home. If lucky, you can even snap up our fantastic food deals in Islamabad to save some decent money while indulging to your heart's content. Maybe, you are gathering together with your friends to watch that most awaited cricket match of the year. Why not order some wonderful food, desserts and drinks to spice up the moment? Fish Fingers, Chicken Strips, and Chili Fries from Incantare Cafe & Grill, or Rajasthani Chicken Malai boti with drink and Masala Fish With Naan + Drink from Humpty Dumpty are some of the best-selling options worth a try using our prompt food delivery in Islamabad. From Subway sandwiches to Johnny Rockets burgers, from Sarang Sindhi Cuisine's Chicken Briyani to Big Bites' 
       Chicken Combo, from Fruit Factory's smoothies to Chick Fillet pizzas, our impressive selection of restaurants come handy to suit every taste, mood, and occasion


       </p>


       <h1  style={{fontWeight:"700" ,fontSize:"32px",color:"#333333"}}> Famous restaurants for online food delivery in Islamabad</h1>
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>

       Looking for the best pizza places in Islamabad? Want to treat your friends to the finest sandwiches in the city? Or simply love to experiment with your food choices or need late night foode delivery in Islamabad? Well, 
       take advantage of these most popular Islamabad food delivery options, favoured by thousands of discerning foodies and casual customers alike.
       </p>




       <h1  style={{fontWeight:"700" ,fontSize:"32px",color:"#333333"}}>Top Restaurants of Islamabad include…</h1>
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>
       ✓ 14th Street Pizza: One of the best places for pizzas In Islamabad  <br/>
✓ KFC : Classic and beloved fried chicken <br/>
✓ The New Yorker Pizza – another favourite of the city’s pizza lovers <br/>
✓ McDonald's – needs no introduction and offers something for everyone <br/>
✓ Char Grill Centre(CGC): Comfort food that everyone adores! <br/>


       </p>

       <h1  style={{fontWeight:"700" ,fontSize:"32px",color:"#333333"}}>Presenting “no-cook Ramzan” only by foodpanda</h1>
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>
       Feeling tired? Don’t want to go out in this scorching hot weather? Here comes the solution to your problem. Now order food in Islamabad from your favourite restaurants through foodpanda and make your Ramzan flavorful 
       with bestest Sehri and Iftari deals with free delivery services. foodpanda fulfil your cravings by delivering food at your doorstep.


       </p>

       <h1  style={{fontWeight:"700",fontSize:"32px",color:"#333333"}}> foodpanda bringing your favourite food to your doorstep!</h1>
       <p style={{fontWeight:"300" ,fontSize:"14px"}}>foodpanda provides you ease to order through online food delivery in Islamabad. Ordering food becomes easier because foodpanda provides you free delivery with minimum order of just Rs.200/-. Want to have delicious Sehri without going out?
        Just order through foodpanda anytime. Ramzan is all about food, fasting becomes delightful when scrumptious Iftari delivered within minutes.</p>
        </Container>
        </>
    )
}