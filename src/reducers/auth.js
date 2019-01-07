export default function auth (state=null, action) {
    if (action.type === 'LOGIN') {
        return state = [
            action.payload
        ]
    } else if (action.type === 'REGISTER') {
        return state = [
            action.payload
        ]
    }
    return state
}