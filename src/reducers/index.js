import { combineReducers } from 'redux';
import users from './users'
import auth from './auth'
import fetchBotUsersReducer from './botUsers'
import onMessages from './eventOnMessages';
import isConnected from './isConnected';

export default  combineReducers({
    users,
    auth,
    fetchBotUsersReducer,
    onMessages,
    isConnected
})