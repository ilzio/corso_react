export const increment = (payload) => {
    return {
        type: 'INCREMENT',
    }
}
export const incrementBy = (payload) => {
    return {
        type: 'INCREMENT_BY',
        payload
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const login = () => {
    return {
        type: 'SIGN_IN'
    }
}

