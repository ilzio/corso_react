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

