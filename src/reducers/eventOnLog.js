export default function eventOnLog (state=[], action) {
    if(action.type === 'LOG') {
        return state = [...state, action.encode];
    }
    return state
}