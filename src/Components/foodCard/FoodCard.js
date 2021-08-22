import { Card,Button } from'react-bootstrap';
export default function FoodCard(props) {
    return(

<>

<Card style={{ width: '18rem',borderStyle:"none",marginLeft:"20%"}}>
  <Card.Img variant="top" style={{width:"180px",height:"180px"}} src={props.src} /> <br/>
  <Card.Body>
    <Card.Title style={{alignContent:"center",fontSize:"14px"}}>{props.title}</Card.Title><br/>
    <Button style={{marginLeft:"10%"}} variant="warning">Learn More</Button>
  </Card.Body>
</Card>



</>

    )
}