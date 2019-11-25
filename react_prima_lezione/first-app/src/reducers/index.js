// imports all reducers 
import counter from  './counter'
import logged from  './isLogged'

// import class that combines all reducers
import {combineReducers} from 'redux'

// combine them here 
const allReducers = combineReducers({
    counter, 
    logged
})


// export all of them
export default allReducers
