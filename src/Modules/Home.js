import Header from "../commonComponent/Header/Header";
import Carousal from './../Components/Carousal/Carousal';
import FoodCard from "../Components/foodCard/FoodCard";
import FoodProducts from "../Components/foodProducts/FoodProducts";
import { Container,Row,Col  } from "react-bootstrap";
import Review  from "../Assets/review.png";
import Sharewithfriends from "../Assets/share-with-friends.png"
import ReferFriend from "../Assets/refer-friend.png"
import img4 from "../Assets/img4.jpg"
import img5 from "../Assets/img5.jpg"
import img6 from "../Assets/img6.jpg"
import img7 from "../Assets/img7.jpg"
import img8 from "../Assets/img8.jpg"
import img9 from "../Assets/img9.jpg"
import img10 from "../Assets/img10.jpg"
import img11 from "../Assets/img11.jpg"
import img12 from "../Assets/img12.jpg"
import img13 from "../Assets/img13.jpg"
import img14 from "../Assets/img14.png"


export default function Home() {
    return (
        <>
        <Container fluid>
  <Row>
    <Col><Header /></Col>
   
  </Row>
  <Row>
    <Col> <Carousal /></Col>
   
  </Row>
  <hr/>
  <Row>
      <Col lg={4} md={4}>            <FoodCard title="Upto 30% Instant CashBack" src={Review}/></Col>
      <Col lg={4} md={4}>            <FoodCard title="Share/Review for instant cash"  src={Sharewithfriends}/></Col>
      <Col lg={4} md={4}>            <FoodCard title='Get instant cashback each time your friends order'  src={ReferFriend}/></Col>
  </Row>
  <hr/>
  <Row>
      <Col> <div style={{textAlign:"center"}}> 
          <h1>ORDER IT AGAIN</h1> <br/>
          <p style={{fontSize:"24px",color:"grey"}}><a href="#login" style={{color:"red",textDecoration:"none"}}>Login</a> to see recently ordered restaurants</p>
          </div></Col>

  </Row>
  <hr/>
  <h1 style={{textAlign:"center"}}>POPULAR CUISINES</h1> <br/>
  <Row>
    
        <Col lg={2} md={2}>< FoodProducts title="BBQ" src={img4}/> </Col>
        <Col lg={2} md={2}>< FoodProducts title="Appetizers" src={img5}/></Col>
        <Col lg={2} md={2}>< FoodProducts title="Chinese" src={img6}/></Col>
        <Col lg={2} md={2}>< FoodProducts title="Desserts" src={img7}/></Col>
        <Col lg={2} md={2}>< FoodProducts title="Drinks" src={img8}/></Col>
       
  </Row>
  <br/>
  <Row>
    
    <Col lg={2} md={2}>< FoodProducts title="Fast Food" src={img9}/> </Col>
    <Col lg={2} md={2}>< FoodProducts title="Pakistani" src={img10}/></Col>
    <Col lg={2} md={2}>< FoodProducts title="Pizza" src={img11}/></Col>
    <Col lg={2} md={2}>< FoodProducts title="Salads" src={img12}/></Col>
    <Col lg={2} md={2}>< FoodProducts title="Sandwish" src={img13}/></Col>
   
</Row>
<hr/>
<Row>
  <Col lg={6} md={6}><img style={{width:"400px",height:"250px",marginLeft:"20%",marginTop:"10%"}} src={img14}/></Col>
  <Col  lg={6} md={6}><h1 style={{marginTop:"23%"}}>ORDER ONLINE</h1><p>From hundreds of restaurants in your city</p></Col>
</Row>

</Container>
          
           

        </>
    )
}