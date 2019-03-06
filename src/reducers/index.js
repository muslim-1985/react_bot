import { combineReducers } from 'redux';
import users from './users'
import auth from './auth'
import fetchBotUsersReducer from './botUsers'
import onMessages from './eventOnMessages';
import isConnected from './isConnected';
import onLog from './eventOnLog';
import queryLog from './queryLog';

export default  combineReducers({
    users,
    auth,
    fetchBotUsersReducer,
    onMessages,
    onLog,
    isConnected,
    queryLog
})