import rootReducer from '../reducers/index';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function consfigurateStore(initialState){
	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
	return store;
}