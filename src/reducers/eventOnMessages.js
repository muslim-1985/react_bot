export default function eventOnMessage (state=[], action) {
    if(action.type === 'MESSAGE') {
        return state = action.payload;
    } else if (action.type === 'MESSAGE_BOT_USER') {
        return state =  action.payload;

    } else if (action.type === 'DELETE_BOT_USERS') {
        return state = action.payload;
    }
    return state
}