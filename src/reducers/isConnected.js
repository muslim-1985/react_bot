export default function isConnected (state=null, action) {
    if(action.type === 'IS_CONNECTED') {
        return state = true;
    }
    return state
}