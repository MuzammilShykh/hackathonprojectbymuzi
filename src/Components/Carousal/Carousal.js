import  img1  from "../../Assets/imgbanner3.jpg";
import  img2  from "../../Assets/imgbanner4.jpg";
import {Carousel} from 'react-bootstrap'
import "./Carousal.css"
export default function Carousal(props) {

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
    <Carousel.Caption   className="carousal-caption">
      <h1 className="carousal-caption-h1">Food Delivery from <span  style={{fontWeight:"700",paddingRight:"0px"}}> {props.cityName}</span>'s  Best <br/>Restaurants</h1>
      <p  className="carousal-caption-p" >The meals you love, delivered with care</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
      style={{ height:"auto", width:"auto"}}
    />
    <Carousel.Caption  className="carousal-caption">
      <h1 className="carousal-caption-h1">Food Delivery from <span  style={{fontWeight:"700",paddingRight:"0px"}}> {props.cityName} </span>'s  Best <br/>Restaurants</h1>
       <p  className="carousal-caption-p">The meals you love, delivered with care</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </>
    )
}