import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route } from "react-router-dom"

import ProductPage from './components/Products'
const Home = () => <h1>HOME!!!</h1>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/products' component={ProductPage} />
        </div>

      </Router>
    );
  }
}

export default App;
