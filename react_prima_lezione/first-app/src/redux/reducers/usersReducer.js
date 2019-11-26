import {
    
    RECEIVE_USERS,
    ADD_USER
} from '../actions/users'

// Object.assign(target, ...sources)
// copia tutte le proprietà enumerabili da uno o più oggetti di origine in un oggetto di destinazione e restituisce l'oggetto di destinazione 
// -> in questo caso un oggetto vuoto riempito con lo stato precedente e l'oggetto passato come parametro (???) che diventa il nuovo stato?????

const usersReducer = (
    state = {
        isLoading: false,
        users: []
    }, action) => {
    switch (action.type) {
        
        case RECEIVE_USERS:
            return Object.assign({}, state, {
                isLoading: false,
                users: action.payload,

            })
        case ADD_USER:
            const newArray = [...state.users, action.payload];
            console.log(newArray)
            return Object.assign({}, state, {
                isLoading: false,
                users: newArray

            })

        default:
            return state;
    }
}

export default usersReducer