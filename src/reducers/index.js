import counterReducer from './counter';
import loggedReducer from './isLogged';

import { combineReducers } from 'redux'; //-- combineReducer to combine all the reducers


const allReducer = combineReducers({
    counterReducer,
    loggedReducer
})


export default allReducer;