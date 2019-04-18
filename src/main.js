import React, { Component } from 'react';
import {connect} from 'react-redux';
import {yelpAPI} from './apis/searchApi';
import TextFieldGroup from './components/TextFieldGroup';
import ReviewTable from './components/ReviewTable';
import Review from './components/Review';
import PropTypes from 'prop-types';
class Main extends Component {
  constructor(){
    super();
    this.state = {
      searchkey: "",
    };
    this.onChange= this.onChange.bind(this);
    this.onSubmit= this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();

    const key = this.state.searchkey;
    this.props.yelpAPI(key);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }


  render() {
    const  {yelpResults,loading} =this.props.search;
    let display = "";
    if(loading){
      console.log('reached if');
      display = <p className="lead text-center">"No results found"</p>;
    }
    else{
      console.log('reached else');
      display = <ReviewTable reviews = {yelpResults} />;

    }    
    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-10 md-auto">        
              <TextFieldGroup name="searchkey" placeholder="Search Yelp" type="text" value={this.state.searchkey} onChange={this.onChange} />
            </div>
          <div className="col-md-2 md-auto">        
            <input type="submit" className="btn btn-primary btn-lg" value="Search" />
          </div>
        </div>
      </form>
      <div className="row">
      {display}
      </div>
</div>  
    );
  }
}

Main.propTypes = {
  yelpAPI: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  search: state.search
})

export default connect(
  mapStateToProps,
  {yelpAPI}
  )(Main);