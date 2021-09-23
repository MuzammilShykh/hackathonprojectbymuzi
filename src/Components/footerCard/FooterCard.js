import { Button } from "react-bootstrap";
import { Container,Row,Col  } from "react-bootstrap";
import Sharewithfriends from "../../Assets/share-with-friends.png"
export default function FooterCard(){
    return(
<>

<Container style={{backgroundColor:"red",height:"250px",width:"100%",position:"relative",top:"100px"}}>
    <Row>
        <Col lg={4} md={4} sm={6} xs={6}>
<img style={{marginTop:"10%"}} src={Sharewithfriends}/>
        </Col>
        <Col lg={7} md={7}  sm={6} xs={6}>
<h2 style={{marginTop:"15%",color:"#fff"}} >SHARE YOUR ORDER AND EARN CASH</h2>
<Button style={{fontWeight:"bold",borderRadius:"0px",marginTop:"5%"}} variant="warning">ENQUIRE</Button>
        </Col>
    </Row>
</Container>
</>
    )
}