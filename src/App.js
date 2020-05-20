import React, {Component, useState, useEffect} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/banner';
import AppNavbar from './components/navbar';
import Agesex from './components/Agesex';

import './App.css';

import Home from './routes/Home';
import cal1 from './routes/cal1';
import cal2 from './routes/cal2';
import comp from './routes/comp';


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
        <div>
          <Agesex />
        </div>
      </Container>
      <Container>
        <Router>
          <div>
            <Switch>
              
              <Route exact path = "/" component={Home}/>
              <Route path = "/cal1" component={cal1}/>
              <Route path = "/cal2" component={cal2}/>
              <Route path = "/comp" component={comp}/>

            </Switch>
          </div>
        </Router>
      </Container>
    </div>
)

export default App;
