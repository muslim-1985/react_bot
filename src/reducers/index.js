import { combineReducers } from 'redux';
import tracks from './tracks'
import users from './users'
import auth from './auth'

export default  combineReducers({
    tracks,
    users,
    auth
})