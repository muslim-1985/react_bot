import config from 'react-global-configuration';
import localStorage from 'local-storage';

export default function actionOnRegister (value, history)
{
    return async dispatch => {
        let val = JSON.stringify(value);
        let result = await fetch(`${config.get('server')}/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: val
        });
        let payload = 'some error';
        if (result.ok) {
            payload = await result.json();
            await localStorage('jwt_token', payload.token);
            await history.push('/');
        }

        return dispatch({type: 'REGISTER',  payload })
    }
}