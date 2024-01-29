import { Routes, Route } from "react-router-dom"
import Login from './Login'

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} ></Route>
    </Routes>
  )
}

export default Rout