import config from 'react-global-configuration';
import localStorage from 'local-storage';

export default function actionFetchAllUsers ()
{
    return async dispatch => {
        let result = await fetch(`${config.get('server')}/`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage('jwt_token').jwt.token}`
            }
        });
        let payload;
        if (result.ok) {
            payload = await result.json();
        }
        return dispatch({type: 'GET_USERS',  payload })
    }
}
