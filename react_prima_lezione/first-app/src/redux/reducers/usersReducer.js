import {
    GET_USERS_REQUEST_PENDING,
    GET_USERS_REQUEST_SUCCEEDED,
    GET_USERS_REQUEST_FAILED,
    ADD_USER_REQUEST_PENDING,
    ADD_USER_REQUEST_SUCCEEDED,
    ADD_USER_REQUEST_FAILED
} from '../actions/users'

const usersReducer = (
    state = {
        isLoading: false,
        users: [],
        error: {}
    }, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST_PENDING:
            return {
                ...state,
                isLoading: true

            }
        case ADD_USER_REQUEST_PENDING:
            return {
                ...state,
                isLoading: true

            }
        case GET_USERS_REQUEST_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                users: action.payload,

            }
        case GET_USERS_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,

            }
        case ADD_USER_REQUEST_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload,

            }
        case ADD_USER_REQUEST_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                users: [...state.users, action.payload]

            }

        default:
            return state;
    }
}

export default usersReducer