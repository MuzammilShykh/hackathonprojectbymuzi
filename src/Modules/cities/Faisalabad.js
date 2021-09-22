import Carousal from "../../Components/Carousal/Carousal";
import { Container,Row,Col  } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {FetchRestaurant} from "../../store/Actions/RestaurantAction"
import { useEffect } from "react";
export default function Faisalabad(params) {

    const res = useSelector(state => state.RestaurantReducer.restaurantsArray)
    console.log(res);
const dispatch = useDispatch()

useEffect(()=>{
console.log("call action in component");

dispatch(FetchRestaurant)

},[])

    return(
        <>
        <Carousal/>
        <Container>

            <Row>
                <Col xs={12} lg={12} md={12}>
<h3 style={{fontFamily:"sans-serif",fontWeight:"300",color:"#333333"}}>POPULAR RESTAURANTS</h3>
                </Col>
            </Row>
            
            <Row>
                <Col xs={12} sm={12} lg={3} md={3}>

                </Col>
            </Row>
        </Container>
        </>
    )
}