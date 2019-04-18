import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({
	name,
	placeholder,
	value,
	type,
	onChange
})=>{
	return (
		<input 
		type={type}
		name={name} 
		onChange ={onChange}
		className={classnames("form-control form-control-lg")}
		/>
	);
};

TextFieldGroup.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder:PropTypes.string.isRequired,
	value : PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
};

TextFieldGroup.defaultProps = {
	type: "text"
};
export default TextFieldGroup;