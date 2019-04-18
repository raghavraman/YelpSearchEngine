import React, { Component } from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux';
import Main from './main';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div>
          <div>
            <h1>Yelp Search Engine</h1>
            <p className="lead">Search Engine to search Yelp Reviews</p>
          </div>
        </div>
        <Main>
        </Main>
      </div>
      </Provider> 
    );
  }
}

export default App;
