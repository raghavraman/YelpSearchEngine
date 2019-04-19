import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { Button, Collapse } from "react-bootstrap";

class Review extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    };
  }
  render() {
    const { open } = this.state;
    const { review } = this.props;
    let stars = [];
    let value = parseInt(review.ratings);
    for (let j = 0; j < value; j++) {
      stars.push(<i className="fa fa-star" />);
    }
    if (value !== review.ratings) {
      stars.push(<i className="fa fa-star-half" />);
    }
    return (
     <div className="card mt-3 card-header">
      <div className="row bg-light p-2">
        <div className="col-md-10" onClick={()=> this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}>
            <h4>{review.businessName}</h4>
        </div>
        <div className="col-md-2">
            <div>{stars}</div>
        </div>
      </div>
      <div className="row tab-content">
        <Collapse in={this.state.open}>
            <div id={review.reviewId}>
                <div className='h6 p-4 text-left'>
                  <p className="review-text">{review.text}</p>
                  <p><span className="h5">City:</span>{review.city}</p>
                  <p><span className="h5">State:</span>{review.state}</p>
                  <p><span className="h5">Ratings:</span>{review.ratings}</p>
                </div>
            </div>
        </Collapse>
      </div>
    </div>
    );
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired
};

export default Review;
