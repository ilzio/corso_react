import {
    REQUEST_PENDING,
    REQUEST_SUCCEEDED,
    REQUEST_FAILED,
} from '../actions/users' //probabilmente necessario crearne un altro


const requestReducer = (
    state = {
        isLoading: false,
        error: null
    }, action) => {
    switch (action.type) {
        case REQUEST_PENDING:
            return Object.assign({}, state, {
                isLoading: true
            })
        case REQUEST_SUCCEEDED:
            return Object.assign({}, state, {
                isLoading: false
            })
        case REQUEST_FAILED:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload
            })
        
        default:
            return state;
    }
}

export default requestReducer