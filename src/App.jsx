import { Outlet } from "react-router-dom"

import Nav from "./components/NavBar/Nav"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <>
      
     
    <Nav></Nav>
    
    <Outlet></Outlet>
    <Footer></Footer>
    
    </>
  )
}

export default App
