import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'
import Rout from './components/Rout';

function App() {


  return (
    <>
    <BrowserRouter>
    <Container className="main text-center">
     <Rout/>
    </Container>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
