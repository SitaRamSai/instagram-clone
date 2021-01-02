const initialState = {
    cureentUser: null
}

export const user = (state = initialState, action) => {
    return{
        ...state,
        cureentUser: action.cureentUser
    }
}

