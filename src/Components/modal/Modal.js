import modalimg1 from "../../Assets/modalimg1.jpg";
import modalimg2 from "../../Assets/modalimg2.png";
import { Container,Row,Col,Button  } from "react-bootstrap";
export default function Modal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Using Grid in Modal
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
              <img src={modalimg2}/>
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
  
            <Row>
              <Col xs={12} md={12}>
                <img src={modalimg1}/>
              </Col>
            
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  