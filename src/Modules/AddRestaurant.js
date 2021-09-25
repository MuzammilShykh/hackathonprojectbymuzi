import { useState } from "react"
import {storage} from "../config/Firebase"
import {db} from "../config/Firebase"

export default function AddRestaurant() {
const [restaurantName,setRestaurantName] = useState('')
const [categories,setCategories] = useState('')
const [ownerName,setOwnerName] = useState('')
const [cityName,setCityName] = useState('')
const [successMsg,setSuccessMsg] = useState('')
const [uploadError,setUploadError] = useState('')
const [imageError,setImageError] = useState('')
const [image,setImage] = useState(null)
const types=['image/jpg','image/jpeg','image/png','image/PNG']
const handleRestaurantImg=(e)=>{
let selectedFile = e.target.files[0];
if(selectedFile){
    if(selectedFile&&types.includes(selectedFile.type)){
        setImage(selectedFile);
        setImageError('');
    }
    else{
        setImage(null);
        setImageError('Please select a valid image file type (png or jpg)')

    }
}
else{
    console.log('please select your file');
}
}
const handleAddRestaurant =(e)=>{
    e.preventDefault();
    // console.log(restaurantName,categories);
    // console.log(image);
    const uploadTask = storage.ref(`restaurant-images/${image.name}`).put(image);
    uploadTask.on('state_changed',snapshot=>{
        const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
    console.log(progress);
    },error=>setUploadError(error.message),()=>{
        storage.ref('restaurant-images').child(image.name).getDownloadURL().then(url=>{
            db.collection('Restaurants').add({
                restaurantName,
                categories,
                cityName,
                ownerName,
                url
            }).then(()=>{
                setSuccessMsg('Product added successfully')
                setRestaurantName('');
                setCategories('');
                setCityName('');
                setOwnerName('');
                document.getElementById("file").value='';
                setImageError('');
                setUploadError('')
                setTimeout(()=>{
                    setSuccessMsg('')
                },3000)
            }).catch(error=>setUploadError(error.message));
        })
    
    })
}




    return(
      
        <div className='container'>
            <br></br>
            <br></br>
            <h1>Add Restaurant</h1>
            <hr></hr>        
            {successMsg&&<>
                <div className='success-msg' style={{backgroundColor:"lightgreen"}}>{successMsg}</div>
                <br></br>
            </>} 
            <form autoComplete="off" className='form-group' onSubmit={handleAddRestaurant} >
                <label>Restaurant Name</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setRestaurantName(e.target.value)} value={restaurantName}></input>
                <br></br>
                <label>Owner Name</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setOwnerName(e.target.value)} value={ownerName}></input>
                <br></br>

                {/* <label>City</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setCategories(e.target.value)} value={city}></input> */}

<label for="cities">Choose a City:</label> 
<select style={{marginLeft:"2%"}} required  id="cities" name="cities" value={cityName}  onChange={(e)=>setCityName(e.target.value)}>
 <option  selected disabled value="Select City">Select City</option>
  <option    value="Faisalabad">Faisalabad</option>
  <option  value="Lahore">Lahore</option>
  <option  value="Islamabad">Islamabad</option>
  <option  value="Karachi">Karachi</option>
</select>



                <br/>  <br/>
                <label>Food Categories</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setCategories(e.target.value)} value={categories}></input>
                <br></br>
                {/* <label>Product Price</label>
                <input type="number" className='form-control' required
                onChange={(e)=>setPrice(e.target.value)} value={price}></input> */}
                <br></br>
                <label>Upload Restaurant Image</label>
                <input type="file" id="file" className='form-control' required
                onChange={handleRestaurantImg}></input>
                
                {imageError&&<>
                    <br></br>
                    <div style={{backgroundColor:"red"}} className='error-msg'>{imageError}</div>
                   
                </>}
                <br></br>           
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>
                    
                </>}

        </div>
        
    )
}