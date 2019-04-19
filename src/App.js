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
            <img src="https://s3-media1.fl.yelpcdn.com/assets/srv0/yelp_design_web/48792dd29811/assets/img/logos_desktop/default.png" alt="Yelp logo"/>
            <span className="font-weight-bold"> Search Engine</span>
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
