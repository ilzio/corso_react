// imports all reducers 
import showBar from  './toggleBarReducer'
import isLoading from  './loadingReducer'
// import fetchUsers from  './fetchUsersReducer'

// import class that combines all reducers
import {combineReducers} from 'redux'

// combine them here 
const rootReducers = combineReducers({
    showBar,
    isLoading,
    // fetchUsers
})


// export all of them
export default rootReducers
