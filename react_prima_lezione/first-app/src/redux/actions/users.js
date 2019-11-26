import API from '../../utils/API'
// syncronous action creators
// export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
// export const GET_USERS_SUCCEEDED = 'GET_USERS_SUCCEEDED';
// export const GET_USERS_FAILED = 'GET_USERS_FAILED';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const REQUEST_PENDING = 'REQUEST_PENDING';
export const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
export const REQUEST_FAILED = 'REQUEST_FAILED';



export function receiveUsers(response) {
    return {
        type: RECEIVE_USERS,
        payload: response
    }
}


// Asyncronous action dispatching syncronous actions


export const retrieveUsers = () => {
    return async dispatch => {
        try {
            dispatch({
                type: REQUEST_PENDING
            })
            const response = await API.get("/users");
            dispatch({
                type: REQUEST_SUCCEEDED
            }) 
            dispatch({
                type: RECEIVE_USERS,
                payload: response.data
            })
        }
        catch (error) {
            console.log('user retrieve error:', error)
            dispatch({
                type: REQUEST_FAILED,
                payload: error
            });
        }

        return 'done';
    }
}






export const addUser = (user) => {
    return async dispatch => {
        try {
            dispatch({
                type: REQUEST_PENDING
            })
            const response = await API.post("/users", {user});
            // dispatch(getUsersSucceeded())
            if(response.status === 201) console.log("okkei", response) 
            dispatch({
                type: ADD_USER,
                payload: response.data.user
            })
            dispatch({
                type: REQUEST_SUCCEEDED
            })
        }
        catch (error) {
            console.log('add user error: ', error)
            dispatch({
                type: REQUEST_FAILED,
                payload: error
            })

        }

        return 'done';
    }
}

export const removeUser = (id) => {
    return async dispatch => {
        try {
            dispatch({
                type: REQUEST_PENDING
            })
            const response = await API.delete(`/users/${id}`);
            // dispatch(getUsersSucceeded())
            if (response.status === 201) console.log("okkei", response)
            dispatch({
                type: ADD_USER,
                payload: response.data.user
            })
            dispatch({
                type: REQUEST_SUCCEEDED
            })
        }
        catch (error) {
            console.log('add user error: ', error)
            dispatch({
                type: REQUEST_FAILED,
                payload: error
            })

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
//             payload
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