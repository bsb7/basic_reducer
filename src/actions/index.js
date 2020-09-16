export const increment = n => {
    return {
        type: 'INCREMENT',
        payload: n
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}