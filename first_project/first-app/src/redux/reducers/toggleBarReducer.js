const toggleBarReducer = (state = true, action) => {
    switch (action.type) {
        case 'TOGGLE_BAR':
            return !state           
        default:
            return state
    }
}

export default toggleBarReducer