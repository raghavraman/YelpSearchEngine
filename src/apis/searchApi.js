import axios from 'axios';
import {GET_REVIEWS, LOAD_REVIEWS} from './types';
export const yelpAPI = (key) => dispatch =>{
	axios
	.get(`/search/`,{
		params:{
			searchkey:key
		}
	})
	.then(res => dispatch({
			type:GET_REVIEWS,
			payload:res.data.yelpResults
		})
	)
	.catch(res => console.log(res))
};

export const searchReviewLoading = () =>{
	return{
		type: LOAD_REVIEWS
	};
}
