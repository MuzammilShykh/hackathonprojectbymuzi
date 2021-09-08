// import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UseLogin from './UseLogin'

export default function Login() {
  const [setEmail,setPassword,doLoginUser] = UseLogin()

    return(
      <div style={{backgroundColor:"#212529"}}>

     
        <div style={{paddingTop:"5%",marginLeft:"40%",height:"700px",width:"20%",borderStyle:"groove",borderColor:"#E89E22",borderRadius:"5%"}}>
        <h1 style={{color:"#E89E22",textAlign:"center"}}>LOGIN</h1>
<Form style={{paddingLeft:"5%",paddingRight:"5%"}}>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{color:"#B2B4B5"}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label style={{color:"#B2B4B5"}}>Password</Form.Label>  <Form.Text className="text-muted">
      Forgot?
      </Form.Text>
    <Form.Control type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check style={{color:"#B2B4B5"}} type="checkbox" label="Check me out" />
  </Form.Group>
  <Button onClick={doLoginUser} style={{width:"100%",backgroundColor:"#E28D04"}} variant="primary" size="lg">
Login
  </Button> <br/>
  <Form.Text className="text-muted">
      Not a member? <Link style={{color:"#E89E22"}} to="/signup">Sign up now</Link> 
      </Form.Text>
</Form>

 
        </div>
        </div>
    )
}