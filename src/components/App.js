import React, { Component } from 'react';
import '../styles/App.css';
import About from './About';
import BaseLayout from './BaseLayout';
import Home from './Home';
import Portfolio from './Portfolio';
import {BrowserRouter,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <div className="Display">
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Portfolio" component={Portfolio} />
          </div>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
