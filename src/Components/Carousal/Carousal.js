import  img1  from "../../Assets/imgbanner3.jpg";
import  img2  from "../../Assets/imgbanner4.jpg";
import {Carousel} from 'react-bootstrap'
export default function Carousal(props) {
console.log(props.cityName);
    return(
        <>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      style={{ height:"auto", width:"auto"}}
    />
    <Carousel.Caption style={{marginBottom:"15%",textAlign:"left"}}>
      <h1 style={{fontSize:"300%",fontWeight:"300",color:"#fff"}}>Food Delivery from <span  style={{fontWeight:"700",paddingRight:"0px"}}> {props.cityName}</span>'s  Best <br/>Restaurants</h1>
      <br/><p style={{fontWeight:"500",fontSize:"24px",lineHeight:"24px",color:"#fff"}}>The meals you love, delivered with care</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      style={{ height:"auto", width:"auto"}}
    />
    <Carousel.Caption style={{marginBottom:"15%",textAlign:"left"}}>
      <h1 style={{fontSize:"300%",fontWeight:"300",color:"#fff"}}>Food Delivery from <span  style={{fontWeight:"700",paddingRight:"0px"}}> {props.cityName} </span>'s  Best <br/>Restaurants</h1>
      <br/> <p style={{fontWeight:"500",fontSize:"24px",lineHeight:"24px",color:"#fff"}}>The meals you love, delivered with care</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </>
    )
}