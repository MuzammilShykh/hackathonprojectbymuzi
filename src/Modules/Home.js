import Header from "../commonComponent/Header/Header";
import Carousal from '../Components/Carousal/Carousal';
import FoodCard from "../Components/foodCard/FoodCard";
import FoodProducts from "../Components/foodProducts/FoodProducts";
import FooterCard from "../Components/footerCard/FooterCard";
import FooterCard2 from "../Components/footerCard/FooterCard2";
import FoodCard2 from "../Components/foodCard2/FoodCard2";
import Footer from "../commonComponent/Footer/Footer";
import { Container,Row,Col  } from "react-bootstrap";
import Review  from "../Assets/review.png";
import Sharewithfriends from "../Assets/share-with-friends.png"
import ReferFriend from "../Assets/refer-friend.png"
import cashback from "../Assets/cashback.png"
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
import Faisalabad from "../Assets/cities & restourants/Faisalabad.jpg";
import Lahore from "../Assets/cities & restourants/Lahore.jpg";
import Karachi from "../Assets/cities & restourants/Karachi.jpg";
import Islamabad from "../Assets/cities & restourants/Islamabad.jpg";
export default function Home() {

let cityArr = [{cityName:"Faisalabad", image:Faisalabad},{cityName:"Lahore", image:Lahore },{ cityName:"Karachi" ,image:Karachi},{cityName:"Islamabad" ,image:Islamabad}]


    return (
        <>
        <Container fluid>
  {/* <Row>
    <Col><Header /></Col>
   
  </Row> */}
  <Row>
    <Col sm={12} lg={12} md={12}> <Carousal /></Col>
   
  </Row>
  <hr/>
  <Row>
      <Col lg={4} md={4}>            <FoodCard title="Upto 30% Instant CashBack" src={cashback}/></Col>
      <Col lg={4} md={4}>            <FoodCard title="Share/Review for instant cash"  src={Review}/></Col>
      <Col lg={4} md={4}>            <FoodCard title='Get instant cashback each time your friends order'  src={ReferFriend}/></Col>
  </Row>
  <hr/>
  <Row>
<Col xs={12} sm={12} md={12} lg={12} >
 <div style={{width:"auto",height:"auto",textAlign:"center"}}>
          <h1 style={{fontSize:"28px"}}>Find Us in these cities and many more!</h1> <br/> </div>
          </Col>
          </Row>
  <Row>
     
         
{
  cityArr.map((item,index)=>{
    return(
      <Col xs={12} sm={12} md={3} lg={3}>
      <FoodCard2 index={index} item={item} />
      </Col>
    )
  })
}


          {/* <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} > */}
          {/* <FoodCard2 cityName="Faisalabad" image={Faisalabad}/>  <FoodCard2 cityName="Lahore" image={Lahore}/>  <FoodCard2 cityName="Karachi" image={Karachi}/>  <FoodCard2 cityName="Islamabad" image={Islamabad}/>  */}
          {/* </div> */}
          

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
  <Col></Col>
        <Col lg={2} md={2}>< FoodProducts title="BBQ" src={img4}/> </Col>
        <Col lg={2} md={2}>< FoodProducts title="Appetizers" src={img5}/></Col>
        <Col lg={2} md={2}>< FoodProducts title="Chinese" src={img6}/></Col>
        <Col lg={2} md={2}>< FoodProducts title="Desserts" src={img7}/></Col>
        <Col lg={2} md={2}>< FoodProducts title="Drinks" src={img8}/></Col>
        <Col></Col>
       
  </Row>
  <br/>
  <Row>
  <Col></Col>
    <Col lg={2} md={2} sm={12} xs={12}>< FoodProducts title="Fast Food" src={img9}/> </Col>
    <Col lg={2} md={2} sm={12} xs={12}>< FoodProducts title="Pakistani" src={img10}/></Col>
    <Col lg={2} md={2} sm={12} xs={12}>< FoodProducts title="Pizza" src={img11}/></Col>
    <Col lg={2} md={2} sm={12} xs={12}>< FoodProducts title="Salads" src={img12}/></Col>
    <Col lg={2} md={2} sm={12} xs={12}>< FoodProducts title="Sandwish" src={img13}/></Col>
    <Col></Col>
</Row>
<hr/>

<Row>
  <Col></Col>
  
  <Col  lg={5} md={6} sm={12} xs={12}>
  <div>
    <img className="img-fluid" style={{marginTop:"10%"}} src={img14}/>
    </div>
    </Col> 
  
  <Col  lg={6} md={5} sm={12} xs={12}>
    <div style={{textAlign:"center"}}>
    <h1 style={{marginTop:"23%",}}>ORDER ONLINE</h1><p style={{}}>From hundreds of restaurants in your city</p>
    </div>
    </Col>

</Row>

<Container fluid style={{paddingLeft:"10%",paddingRight:"10%"}}>
<Row>
  <Col lg={6} md={6} sm={12}><FooterCard/> </Col>
  <Col  lg={6} md={6} sm={12}><FooterCard2/></Col>
</Row>
</Container>

{/* <Container fluid style={{backgroundColor:"black",height:"800px"}}>
  <Row>
    <Col><Footer/></Col>
  </Row>
</Container> */}

</Container>



          
           

        </>
    )
}