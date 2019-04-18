import {GET_REVIEWS, LOAD_REVIEWS} from '../apis/types';
const initialState = {
	yelpResults: [],
	loading: true
}

export default function(state = initialState, action){
	console.log(action.payload);
	switch(action.type){
		case LOAD_REVIEWS: 
			return {
				...state,
				loading:true
			};
		case GET_REVIEWS:
			return {
				...state,
				yelpResults: action.payload,
				loading:false
			};
		default:
		return state;
	}
}