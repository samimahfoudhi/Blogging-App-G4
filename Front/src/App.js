import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {Header } from "./components/headers/Headers"
import { Details} from "./pages/details/Details.jsx";
import { Account } from "./pages/account/Account.jsx";
import { Login } from "./pages/login/Login.jsx";
import { Register } from "./pages/login/Register.jsx";
import { Create } from "./components/create/Create.jsx";
import { Footer } from "./components/footer/Footer"

const App = () => {
    
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          
          <Route exact path='/details/:id' element={<Details/>} />
          <Route exact path='/account' element={<Account/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/create' element={<Create/>} />
        
        </Routes>
        <Footer />
      </Router>
    </>
  )
}
export default App