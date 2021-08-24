import { Container,Row,Col  } from "react-bootstrap";

export default function Footer() {
    return(
        <>
<Container style={{marginTop:"20%"}}>
    <Row>
        <Col></Col>
        <Col lg={2} md={2}><h5 style={{color:"#FFDD33"}}>Supermeal</h5>
         <hr style={{width:"70%",color:"#FFDD33",height:"1%",opacity:"100%"}}/>
         <ul style={{listStyle:"none",marginLeft:"0px",paddingLeft:"0px",color:"white"}}>
             <li> <a href="#" style={{textDecoration:"none",color:"#fff"}}>Home</a>

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>I am a Restaurant</a> 

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Blog</a>
             </li>
         </ul>
         </Col>
        <Col  lg={2} md={2}> <h5 style={{color:"#FFDD33"}}>Need Help?</h5> 
        <hr style={{width:"70%",color:"#FFDD33",height:"1%",opacity:"100%"}}/>
        <ul style={{listStyle:"none",marginLeft:"0px",paddingLeft:"0px",color:"white"}}>
             <li> <a href="#" style={{textDecoration:"none",color:"#fff"}}>Contact Us</a>

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Refferal FAQs</a> 

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>FAQs</a>
             </li>
         </ul>
        </Col>

        <Col  lg={2} md={2}> <h5 style={{color:"#FFDD33"}}>Popular Restaurants</h5>
         <hr style={{width:"70%",color:"#FFDD33",height:"1%",opacity:"100%"}}/>



         <ul style={{listStyle:"none",marginLeft:"0px",paddingLeft:"0px",color:"white"}}>
             <li> <a href="#" style={{textDecoration:"none",color:"#fff"}}>Golden Apple Bahadurabad</a>

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Red Apple DHA</a> 

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Red Apple DHA</a>
             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Student Biryani</a>
             </li>
             
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza Max</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza Max</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza Max</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza Max</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza Max</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza Max</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza Max</a>
             </li>


         </ul>




         </Col>
        <Col  lg={2} md={2}> <h5 style={{color:"#FFDD33"}}>Popular Cuisines</h5> 
        <hr style={{width:"70%",color:"#FFDD33",height:"1%",opacity:"100%"}}/>
        <ul style={{listStyle:"none",marginLeft:"0px",paddingLeft:"0px",color:"white"}}>
             <li> <a href="#" style={{textDecoration:"none",color:"#fff"}}>Drinks</a>

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Appetizers</a> 

             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Fast Food</a>
             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Sandwich</a>
             </li>
             
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pizza</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>BBQ</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Pakistani</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Desserts</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Salads</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Chinese</a>
             </li>
               
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Chinese</a>
             </li>
             <li>
             <a href="#" style={{textDecoration:"none",color:"#fff"}}>Italian</a>
             </li>

         </ul>
        </Col>
        <Col  lg={2} md={2}> <h5 style={{color:"#FFDD33"}}>Order Food Online</h5>
         <hr style={{width:"70%",color:"#FFDD33",height:"1%",opacity:"100%"}}/>
         <p style={{color:"#fff"}}>An online food ordering website for delivery, collection and executive dine-in. Order your favorite meal online from hundreds of restaurants in Pakistan.</p>
        </Col>
        <Col></Col>
    </Row>

</Container>
<hr style={{color:"#fff",opacity:"100%"}}/>
<Container>
    <Row>
        <Col><p style={{color:"#fff"}}>© 2021 Company Name. All rights reserved. Terms and Conditions- Privacy Policy</p></Col>

    </Row>
</Container>
        </>
    )
}