export default function fetchUsersReducer (state=null, action) {
    if (action.type === 'ADD_USERS') {
        return state = [
            action.payload
        ]
    } else if (action.type === 'DELETE_USERS') {
        return state = [
            action.payload
        ]
    }
    return state
}