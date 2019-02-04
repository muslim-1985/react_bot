export default function fetchBotUsersReducer (state=[], action) {
    if(action.type === 'GET_BOT_USERS') {
        if (typeof action.payload === 'undefined') {
            return state;
        } else {
            return state = action.payload;
        }
    } else if (action.type === 'ADD_BOT_USERS') {
        return state =  action.payload;

    } else if (action.type === 'DELETE_BOT_USERS') {
        return state = action.payload;
    }
    return state
}