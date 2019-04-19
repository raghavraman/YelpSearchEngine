<<<<<<< Updated upstream
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {yelpAPI} from './apis/searchApi';
import TextFieldGroup from './components/TextFieldGroup';
import ReviewTable from './components/ReviewTable';
import Review from './components/Review';
import PropTypes from 'prop-types';
=======
import React, { Component } from "react";
import { connect } from "react-redux";
import { yelpAPI } from "./apis/searchApi";
import TextFieldGroup from "./components/TextFieldGroup";
import ReviewTable from "./components/ReviewTable";
import PropTypes from "prop-types";
>>>>>>> Stashed changes
class Main extends Component {
  constructor() {
    super();
    this.state = {
      searchkey: ""
    };
<<<<<<< Updated upstream
    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
=======
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sortResults = this.sortResults.bind(this);
>>>>>>> Stashed changes
  }

  onSubmit(e) {
    e.preventDefault();

    const key = this.state.searchkey;
    this.props.yelpAPI(key);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

<<<<<<< Updated upstream
=======
  sortResults() {
    const { yelpResults, loading } = this.props.search;
    let res = yelpResults.sort(this.sortDescending("ratings"));
    this.setState({ yelpResults: res });
  }

  sortDescending(property) {
    console.log(property);

    return function(a, b) {
      return a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    };
  }
>>>>>>> Stashed changes

  render() {
    const { yelpResults, loading } = this.props.search;
    let display = "";
<<<<<<< Updated upstream
    if(loading){
      console.log('reached if');
      display = <p className="lead text-center">"No results found"</p>;
    }
    else{
      console.log('reached else');
      display = <ReviewTable reviews = {yelpResults} />;

    }    
=======
    let sortEnable = "";
    if (loading) {
      display = <p className="lead text-center">"No results found"</p>;
      sortEnable = "";
    } else {
      sortEnable = (
        <i className="fa fa-2x fa-sort-amount-up" onClick={this.sortResults} />
      );
      display = (
        <div>
          <h3>
            <b>{yelpResults.length}</b> results are shown
          </h3>
          <ReviewTable reviews={yelpResults} />
        </div>
      );
    }
>>>>>>> Stashed changes
    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-10 md-auto">
              <TextFieldGroup
                name="searchkey"
                placeholder="Search Yelp"
                type="text"
                value={this.state.searchkey}
                onChange={this.onChange}
              />
            </div>
<<<<<<< Updated upstream
          <div className="col-md-2 md-auto">        
            <input type="submit" className="btn btn-primary btn-lg" value="Search" />
          </div>
        </div>
      </form>
      <div className="row">
      {display}
      </div>
</div>  
=======
            <div className="col-md-2 md-auto">
              <input
                type="submit"
                className="btn btn-primary btn-lg"
                value="Search"
              />
              {sortEnable}
            </div>
          </div>
        </form>
        {display}
      </div>
>>>>>>> Stashed changes
    );
  }
}

Main.propTypes = {
  yelpAPI: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  search: state.search
});

export default connect(
  mapStateToProps,
  { yelpAPI }
)(Main);
