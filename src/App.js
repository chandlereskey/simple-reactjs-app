import React, { Component } from 'react';
import './App.css';
import { Tab, Tabs } from 'react-bootstrap';
import Home from './Tabs/Home/Home';
import Calculator from './Tabs/Calculator/Calculator';
import ImageUploader from './Tabs/ImageStuff/ImageUploader'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
              <Home/>
            </Tab>
            <Tab eventKey="calculator" title="Calculator">
              <Calculator/>
            </Tab>
            <Tab eventKey="imageai" title="ImageAI">
              <ImageUploader/>
            </Tab>
          </Tabs>
        </div>
    );
  }
}

export default App;
