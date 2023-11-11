import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {Header } from "./components/headers/Headers"


const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
         
        </Switch>
     
      </Router>
    </>
  )
}
export default App