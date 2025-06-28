import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Nav from './pages/Nav.jsx';

function App() {


  return (
    <BrowserRouter>
      <Nav/>
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


