import React, {useState, useEffect} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/banner';
import AppNavbar from './components/navbar';

import './App.css';

import Home from './routes/Home';
import cal1 from './routes/cal1';
import cal2 from './routes/cal2';
import comp from './routes/comp';
import commu from './routes/commu';


const App = (
    <div className="App">
      <Container>
        <Row>
          <Col>
          <AppNavbar/>
          </Col>
        </Row>
      </Container>
      <Container>
      <h1>age, sex</h1>
      </Container>
      <Container>
        <Router>
          <div>
            <Switch>
              
              <Route path = "/cal1" component={cal1}/>
              
            </Switch>
          </div>
        </Router>
      </Container>
    </div>
)

export default App;
