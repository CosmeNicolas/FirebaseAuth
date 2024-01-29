import { Routes, Route } from "react-router-dom"
import SingUp from './SingUp'

const Rout = () => {
  return (
    <Routes>
      <Route path="/" element={<SingUp/>} ></Route>
    </Routes>
  )
}

export default Rout