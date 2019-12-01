import { actionTypes } from 'redux-resource';
import Axios from 'axios';

export const getPosts =  () => {
    return async function (dispatch) {
        try {
            dispatch({
                type: actionTypes.CREATE_RESOURCES_PENDING,
                resourceType: 'posts',
                requestKey: 'getPosts',
            });
            const response = await Axios.get('http://localhost:2000/posts')
            dispatch({
                type: actionTypes.CREATE_RESOURCES_SUCCEEDED,
                resourceType: 'posts',
                requestKey: 'getPosts',
                resources: response.data,
                requestProperties: {
                  statusCode: response.status  
                }
              });
        } catch (error) {
            dispatch({
            type: actionTypes.CREATE_RESOURCES_FAILED,
            resourceType: 'posts',
            requestKey: 'getPosts',
            requestProperties: {
              statusCode: error.status
            }
        })
        } finally {
            
        }
    }
}

