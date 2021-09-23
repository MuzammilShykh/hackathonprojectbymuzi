import React from 'react'
import {RestaurantCard} from '../restaurantCards/RestaurantCard'

export const Products = ({products}) => {

    // console.log(products);
    
    return products.map((RestaurantCard)=>(
        <RestaurantCard key = {RestaurantCard.ID} RestaurantCard={RestaurantCard}/>
    ))
}