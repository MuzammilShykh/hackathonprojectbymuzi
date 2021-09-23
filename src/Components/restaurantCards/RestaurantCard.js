
export default function RestaurantCard({item}) {
    

    console.log("data in restaurant card",item);
    return (
       

//         <div className='product'>
//             <div className='product-img'>
//                 <img src={item.url} alt="product-img"/>
//             </div>
//             <div className='product-text title'>{item.restaurantName}</div>
//             <div className='product-text description'>{item.categories}</div>
           
// </div>
<div className="container">
<section className="mx-auto my-5" style={{maxWidth: "23rem"}}>
    
  <div className="card">
    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
      <img src={item.url} class="img-fluid " />
      <a href="#!">
        <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
      </a>
    </div>
    <div className="card-body">
      <h5 className="card-title font-weight-bold"><a>{item.restaurantName}</a></h5>
      <ul className="list-unstyled list-inline mb-0">
        <li className="list-inline-item me-0">
          <i className="fas fa-star text-warning fa-xs"> </i>
        </li>
        <li className="list-inline-item me-0">
          <i className="fas fa-star text-warning fa-xs"></i>
        </li>
        <li className="list-inline-item me-0">
          <i className="fas fa-star text-warning fa-xs"></i>
        </li>
        <li className="list-inline-item me-0">
          <i className="fas fa-star text-warning fa-xs"></i>
        </li>
        <li className="list-inline-item">
          <i className="fas fa-star-half-alt text-warning fa-xs"></i>
        </li>
        <li className="list-inline-item">
          <p className="text-muted">4.5 (413)</p>
        </li>
      </ul>
      <p className="mb-2">$ •{item.categories}</p>
     
      
        
  
  
     
    </div>
  </div>
  
</section>
</div>
    




)


}