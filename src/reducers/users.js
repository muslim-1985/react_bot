export default function fetchUsersReducer (state=[], action) {
    if(action.type === 'GET_USERS') {
        if (typeof action.payload === 'undefined') {
            return state;
        } else {
            return state = action.payload;
        }
    } else if (action.type === 'ADD_USERS') {
        return state =  action.payload;

    } else if (action.type === 'DELETE_USERS') {
        return state = action.payload;
    }
    return state
}