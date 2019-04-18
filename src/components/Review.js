import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Review extends Component {
	render(){
		const {review} = this.props;

		return (<div>
			<p>THe buisness is: {review.businessName}</p>
			<p>THe Rating is: {review.ratings}</p>
			<p>THe Review is: {review.text}</p>
			</div>
		);
	}
};

Review.propTypes = {
	review:PropTypes.object.isRequired
};

export default Review;