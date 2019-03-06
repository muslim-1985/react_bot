export default function eventOnQueryLog (state=[], action) {
    if (action.type === 'GET_APACHE_LOGS') {
        return state = [...state, 'sert'];
    } else if (action.type === 'SET_LOGS') {
        return state = [...state, 'wombat'];
    }
    return state
}