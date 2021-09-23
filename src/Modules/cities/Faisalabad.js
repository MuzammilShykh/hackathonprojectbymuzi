import Carousal from "../../Components/Carousal/Carousal";
import { Container,Row,Col  } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {FetchRestaurant} from "../../store/Actions/RestaurantAction"

import Loader from "../../Components/loader/Loader";

import { useEffect,useState } from "react";

import RestaurantCard  from "../../Components/restaurantCards/RestaurantCard";

export default function Faisalabad() {

const [loading,setLoading]=useState(false)

    const res = useSelector(state => state.RestaurantReducer.restaurantsArray)
    console.log("data in component",res);
const dispatch = useDispatch()

useEffect(()=>{
console.log("call action in component");

dispatch(FetchRestaurant(setLoading))

},[])


//  // state of products
//  const [products, setProducts]=useState([]);

//  // getting products function
//  const getProducts = async ()=>{
//      const products = await db.collection('Restaurants').get();
//      const productsArray = [];
//      for (var snap of products.docs){
//          var data = snap.data();
//          data.ID = snap.id;
//          productsArray.push({
//              ...data
//          })
//          if(productsArray.length === products.docs.length){
//              setProducts(productsArray);
//          }
//      }
//  }

//  useEffect(()=>{
//      getProducts();
//  },[])


    return(
        <>
        <Carousal/>
        <Container>

            <Row>
                <Col xs={12} lg={12} md={12}>
<h3 style={{fontFamily:"sans-serif",fontWeight:"300",color:"#333333",marginTop:"5%",textAlign:"center"}}>POPULAR RESTAURANTS</h3>
                </Col>
            </Row>
            
            <Row>

                {
res.map((item)=>{
    return(
        
        <Col xs={12} sm={12} lg={3} md={3}>
        <RestaurantCard key = {item.ID} item={item}/>
        
        </Col>
            
    )
})
}

{loading && <div style={{textAlign:"center"}}><Loader/></div>}



</Row>


                {/* {products.length > 0 && (
                <div className='container-fluid'>
                    <h1 className='text-center'>Products</h1>
                    <div className='products-box'>
                        <Products products={products}/>
                    </div>
                </div>
            )}
            {products.length < 1 && (
                <div className='container-fluid'>Please wait....</div>
            )} */}




        </Container>
        </>
    )
}