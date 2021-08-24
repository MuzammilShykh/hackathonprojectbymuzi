import { Button } from "react-bootstrap";
import { Container,Row,Col,NavLink} from "react-bootstrap";

export default function FooterCard2(){
    return(
<>
<Container style={{backgroundColor:"#FFDD33",height:"250px",width:"100%"}}>
    <Row>
        
        <Col lg={12} md={12} sm={12}>
<h4 style={{marginTop:"10%",color:"#37300B"}} >SUBSCRIBE TO THE FOODIES NEWSPAPER</h4>
<h4 style={{color:"#37300B"}} >GET UPDATES ON GREAT OFFERS,DEALS AND DISCOUNTS </h4>
<Button style={{fontWeight:"bold",borderRadius:"0px"}} variant="danger">SUBSCRIBE</Button>
        </Col>
    </Row>
</Container>
</>
    )
}