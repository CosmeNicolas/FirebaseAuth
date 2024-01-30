import { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import firebase from '../config/FirebaseConfig'




const SingUp = () => {

 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')




  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    try
    {
      const user  = await firebase.auth().createUserWithEmailAndPassword(email, password)
      if(user)
      {
        alert('Account Created Succesfully ')
      }
    } 
    catch (error) 
    {
      alert(error)
    }
  }

  return (
    <>
    <Container className='mt-5 container-login' >
       <h1 className='py-2 text-light'>SingUp</h1>
       <Form>
        {/* userName */}
       <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control 
        className='py-2'
         type="text" 
         placeholder="Enter User Name"
          value={name} 
          onChange={(e)=>setName(e.target.value)}/>
      </Form.Group>

        {/* email */}
      <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        className='py-2'
         type="email" 
         placeholder="Enter email" 
         value={email}
         onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

        {/* password */}
      <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        className='py-2'
         type="password"
          placeholder="Password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>

      {/* formText */}
      <Form.Text className=" text-light">
          Have an Account <Link to="./Login" >Login Now</Link>
        </Form.Text>
      
      <Button onClick={handleSubmit} className='my-2' variant="warning" type="submit">
        SingUp
      </Button>
    </Form>
    </Container>
    </>
  )
}

export default SingUp