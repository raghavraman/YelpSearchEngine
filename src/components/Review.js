import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

class Review extends Component {
  render() {
    const { review } = this.props;
    let stars = [];
    let value = parseInt(review.ratings);
    console.log(value);
    for (let j = 0; j < value; j++) {
      stars.push(<i className="fas fa-star" />);
    }
    console.log(review.ratings);
    if (value !== review.ratings) {
      stars.push(<i className="fas  fa-star-half" />);
    }
    return (
      <div className="card">
        <div className="row">
          <div className="col-md-10">
            <h3>{review.businessName}</h3>
            <p>{review.text}</p>
          </div>
          <div className="col-md-2">
            <div>{stars}</div>
          </div>
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
