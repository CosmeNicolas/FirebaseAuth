import { Routes, Route } from "react-router-dom"
import SingUp from './SingUp'
import Login from "./Login"

const Rout = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SingUp/>} ></Route>
      <Route path='/Login' element={<Login/>} ></Route>
    </Routes>
    </>
  )
}

export default Rout