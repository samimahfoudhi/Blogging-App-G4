import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import {Header } from "./components/headers/Headers"
import { Details} from "./pages/details/Details.jsx";



const App = () => {
  return (
    <>
      <Router>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/details/:id' component={Details} />
        </Switch>
     
      </Router>
    </>
  )
}
export default App