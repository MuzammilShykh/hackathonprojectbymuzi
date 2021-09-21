import  img1  from "../../Assets/img1.jpg";
import  img2  from "../../Assets/img2.jpg";
import {Carousel} from 'react-bootstrap'
export default function Carousal() {
    return(
        <>
        <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-90"
      src={img1}
      alt="First slide"
      style={{ height:"720px", width:"1900px"}}
    />
    <Carousel.Caption>
      {/* <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-90"
      src={img2}
      alt="Second slide"
      style={{ height:"720px", width:"1920px"}}
    />
    <Carousel.Caption>
      {/* <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
        </>
    )
}