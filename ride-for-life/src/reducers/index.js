import { combineReducers } from 'redux';
import { driverReducer } from './driverReducer';
import { driversReducer } from './driversReducer';
import { reviewReducer } from './reviewReducer';

export default combineReducers({
    driverReducer,
    driversReducer,
    reviewReducer
});