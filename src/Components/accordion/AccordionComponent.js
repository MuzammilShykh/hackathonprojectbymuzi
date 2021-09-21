import  {Accordion} from "react-bootstrap";
 export default function AccordionComponent(props) {
    return(
        <>
         <Accordion flush>
          <Accordion.Item eventKey = {props.eventKey}>
    <Accordion.Header >{props.Header}</Accordion.Header>
    <Accordion.Body>
     {props.Body}
    </Accordion.Body>
  </Accordion.Item>

   
</Accordion>

    </>
   
 )
      
}