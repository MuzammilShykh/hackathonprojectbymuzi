import { Card,Button } from'react-bootstrap';
export default function FoodCard(props) {
    return(

<>
<br/>
<Card style={{ width: '18rem',borderStyle:"none",margin:"auto",textAlign:"center"}}>
  <Card.Img variant="top" style={{width:"200px",height:"180px",marginLeft:"18%"}} src={props.src} /> <br/>
  <Card.Body>
    <Card.Title style={{alignContent:"center",fontSize:"14px"}}>{props.title}</Card.Title><br/>
    <Button variant="warning">Learn More</Button>
  </Card.Body>
</Card>



</>

    )
}