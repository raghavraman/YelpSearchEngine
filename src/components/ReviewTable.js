import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import Review from './Review';

class ReviewTable extends Component {
	render(){
		const {reviews} = this.props;
		return reviews.map(review => <Review key={review.reviewId} review={review}/>);
	}
}

ReviewTable.propTypes = {
	reviews:PropTypes.array.isRequired
};

export default ReviewTable;