import { actionTypes } from 'redux-resource';
import Axios from 'axios';

export const getBooks =  () => {
    return async function (dispatch) {
        try {
            dispatch({
                type: actionTypes.CREATE_RESOURCES_PENDING,
                resourceType: 'books',
                requestKey: 'getBook',
            });
            const response = await Axios.get('http://localhost:2000/posts')
            console.log("stabbene", response.data)
            dispatch({
                type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
                resourceType: 'books',
                requestKey: 'getBook',
                resources: response.data,
                requestProperties: {
                  statusCode: response.status  
                }
              });
        } catch (error) {
            dispatch({
            type: actionTypes.CREATE_RESOURCES_FAILED,
            resourceType: 'books',
            requestKey: 'getBook',
            requestProperties: {
              statusCode: error.status
            }
        })
        } finally {
            
        }
    }
}

