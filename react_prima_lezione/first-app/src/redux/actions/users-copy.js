// syncronous action creators
import API from '../../utils/API'
export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCEEDED = 'GET_USERS_SUCCEEDED';
export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export function getUsersRequest() {
    console.log('request made')
    return {
        type: GET_USERS_REQUEST
    }
}

export function getUsersFailed(error) {
    console.log('request failed')
    console.log(error)
    return {
        type: GET_USERS_FAILED,
        payload: error
    }
}
export function getUsersSucceeded() {
    return {
        type: GET_USERS_SUCCEEDED,
    }
}


export function receiveUsers(response) {
    console.log("request successful")
    console.log(response)
    return {
        type: RECEIVE_USERS,
        payload: response
    }
}

// Asyncronous action creators


export const retrieveUsers = () => {
    return async dispatch => {
        try {
            dispatch(getUsersRequest())
            const response = await API.get("/users");
            dispatch(getUsersSucceeded());
            dispatch(receiveUsers(response.data));
        }
        catch (error) {
            dispatch(getUsersFailed(error));
        }

        return 'done';
    }
}

// SCRITTO DA ERIKA AL VOLO 
// scrive i dispatch invece di dispatchare syncronous action creators: meglio, peggio, a stissa cosa???

// export const getProfile = () => {
//     return async dispatch => {

//         dispatch({
//             type: GET_PROFILE_PENDING,
//             paylo
//         })

//         //const response = await ()

//         dispatch({
//             type: GET_PROFILE_SUCCEEDED,
//             paylo
//         })

//         dispatch({
//             type: TOGGLE_BAR,
//             paylo
//         })
//     }