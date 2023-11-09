import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Headers } from "./components/headers/Headers"


const App = () => {
  return (
    <>
      <Router>
        <Headers />
        <Switch>
          <Route exact path='/' component={Home} />
         
        </Switch>
     
      </Router>
    </>
  )
}
export default App