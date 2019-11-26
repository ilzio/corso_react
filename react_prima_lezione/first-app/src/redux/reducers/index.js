// imports all reducers 
import loadingReducer from  './loadingReducer'
import usersReducer from  './usersReducer'

// import class that combines all reducers
import {combineReducers} from 'redux'
import requestReducer from './requestReducer'

// combine them here 
const rootReducers = combineReducers({
    isLoading: loadingReducer,
    users: usersReducer,
    request: requestReducer,
})


// export all of them
export default rootReducers
