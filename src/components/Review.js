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
          </div>
          <div className="col-md-2">
            <div>{stars}</div>
          </div>
          <Button
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Read More
          </Button>
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
              <p>{review.text}</p>
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
