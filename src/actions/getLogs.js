import config from 'react-global-configuration';
import localStorage from 'local-storage';

export default function actionGetApacheLogs(userId) {
    return async dispatch => {
        let val = await JSON.stringify(userId);
        let result = await fetch(`${config.get('server')}/apacheLogs`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage('jwt_token').jwt.token}`
            },
            body: val
        });
        let payload;
        if (result.ok) {
            payload = await result.json();
        }
        return dispatch({ type: 'GET_APACHE_LOGS', userId })
    }

}

export function actionSetUserData (data) {
    return async dispatch => {
        let val = await JSON.stringify(data);
        let result = await fetch(`${config.get('server')}/setLogs`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage('jwt_token').jwt.token}`
            },
            body: val
        });
        let payload = 12;
        // if (result.ok) {
        //     payload = await result.json();
        // }
        
        return dispatch({type: 'SET_LOGS',  payload })
    }
}