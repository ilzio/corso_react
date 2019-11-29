import { resourceReducer } from 'redux-resource';


// imports all reducers 
import usersReducer from  './usersReducer'

// import class that combines all reducers
import {combineReducers} from 'redux'

// combine them here 
const rootReducers = combineReducers({
    users: usersReducer,
    posts: resourceReducer('posts')
})


// export all of them
export default rootReducers
