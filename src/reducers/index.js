import { IS_LOADING, IS_ACCESS, IS_ERROR } from '../actions/request';

export default function rootReducer(state = { isLoading : false}, action){
	switch (action.type) {
		case IS_LOADING:
			return {
				isLoading : true
			};
		case IS_ACCESS : 
			return {
				pairs : action.payload
			}
		case IS_ERROR : 
			return {
				error : action.payload
			}
		default:
			return state;
	}
}