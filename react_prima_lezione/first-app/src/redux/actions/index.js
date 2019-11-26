export const START_LOADING = 'START_LOADING '
export const STOP_LOADING = 'STOP_LOADING'
export const TOGGLE_BAR = 'TOGGLE_BAR'

export const startLoading = () => {
    return {
        type: START_LOADING
    }
}
export const stopLoading = () => {
    return {
        type: STOP_LOADING
    }
}

export const toggleBar = () => {
    return {
        type: TOGGLE_BAR
    }
}

export const getProfile = () => {
    return async dispatch => {
        
        dispatch({
            type: GET_PROFILE_PENDING,
            paylo
        })

        //const response = await ()

        dispatch({
            type: GET_PROFILE_SUCCEEDED,
            paylo
        })

        dispatch({
            type: TOGGLE_BAR,
            paylo
        })
    }
}

