import React from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Install from "./Components/Install";
import Signup from "./Components/Signup";
import { Container } from "react-bootstrap";
import Signin from "./Components/Signin";
import TalentoGrid from "./Components/TalentoGrid";
import Hire from "./Components/Hire";
import userprofile from "./Components/userprofile";

function App() {
  return (
      <>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/install" component={Install}/>
              <Route path="/TalentoGrid" component={TalentoGrid}/>
              <Route path="/Hire/:params" component={Hire} />
              <Route path="/userprofile/:params" component={userprofile}/>
                <Container className="d-flex  justify-center" style={{minHeight:"100vh"}}>
                  <div className="w-100" >
                    <Route path="/Signup" component={Signup}/>
                    <Route path="/Signin" component={Signin}/>
                  </div>
                </Container>
          </Switch>
        </Router>
       </>
  );
}

export default App;
