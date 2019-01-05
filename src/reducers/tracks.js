const initialStore = [
    'smells',
    'async'
];

export default  function asyncReducer (state=initialStore, action) {
    if (action.type === 'ADD_TRACK') {
        return state = [
            ...state,
            action.payload
        ]
    } else if (action.type === 'DELETE_TRACK') {
        return state = [
            ...state,
            action.payload
        ]
    }
    return state
}