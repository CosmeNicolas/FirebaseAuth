import {Form, Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

const Login = () => {
  return (
    <>
    <Container className='mt-5 container-login' >
       <h1 className='py-2 text-light'>Sing up</h1>
       <Form>
        {/* userName */}
       <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>

        {/* email */}
      <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

        {/* password */}
      <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button className='my-2' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </>
  )
}

export default Login