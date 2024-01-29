import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
    <Container className="main text-center">
     <h1>Auth with Firebase </h1>
    </Container>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
