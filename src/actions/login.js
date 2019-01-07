import config from 'react-global-configuration';

export default function actionOnLogin ()
{
    return async dispatch => {
        let result = await fetch(`${config.get('server')}/getGood`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let payload;
        if (result.ok) {
            payload = await result.json();
        }
        return dispatch({type: 'LOGIN',  payload })
    }
}