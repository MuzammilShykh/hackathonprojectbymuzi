
    import { Card,Button } from'react-bootstrap';
export default function FoodProducts(props) {
    return(

<>

<Card style={{ width: '18rem',borderStyle:"none",marginLeft:"30%"}}>
<Card.Title style={{marginLeft:"20%",fontSize:"24px",marginBottom:"0px",paddingBottom:"0px"}}>{props.title}</Card.Title>

  <Card.Body>
   
    <Card.Img variant="bottom" style={{width:"200px",height:"200px"}} src={props.src} />
  </Card.Body>
</Card>



</>

    )
}
