import API from '../../utils/API'
export const GET_USERS_REQUEST_PENDING = 'GET_USERS_REQUEST_PENDING';
export const GET_USERS_REQUEST_SUCCEEDED = 'GET_USERS_REQUEST_SUCCEEDED';
export const GET_USERS_REQUEST_FAILED = 'GET_USERS_REQUEST_FAILED';
export const ADD_USER_REQUEST_PENDING = 'ADD_USER_REQUEST_PENDING';
export const ADD_USER_REQUEST_SUCCEEDED = 'ADD_USER_REQUEST_SUCCEEDED';
export const ADD_USER_REQUEST_FAILED = 'ADD_USER_REQUEST_FAILED';
export const DELETE_USER_REQUEST_PENDING = 'DELETE_USER_REQUEST_PENDING';
export const DELETE_USER_REQUEST_SUCCEEDED = 'DELETE_USER_REQUEST_SUCCEEDED';
export const DELETE_USER_REQUEST_FAILED = 'DELETE_USER_REQUEST_FAILED';

export const retrieveUsers = () => {
    return async dispatch => {
        try {
            dispatch({
                type: GET_USERS_REQUEST_PENDING
            })
            const response = await API.get("/users");
            dispatch({
                type: GET_USERS_REQUEST_SUCCEEDED,
                payload: response.data
            })
        } catch (error) {
            dispatch({
                type: GET_USERS_REQUEST_FAILED,
                payload: error
            });
        } finally {

        }
    }
}

export const addUser = (user) => {
    return async dispatch => {
        try {
            dispatch({
                type: ADD_USER_REQUEST_PENDING
            })
            const response = await API.post("/users", { user });
            console.log(response)
            // dispatch(getUsersSucceeded())
            if (response.status === 201) {
                dispatch({
                    type: ADD_USER_REQUEST_SUCCEEDED,
                    payload: response.data.user
                })
            }
        } catch (error) {
            console.log('add user error: ', error)
            dispatch({
                type: ADD_USER_REQUEST_FAILED,
                payload: error
            })
        } finally {
        }
    }
}


