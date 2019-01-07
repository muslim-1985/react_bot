import config from 'react-global-configuration';

export default function actionFetchAllUsers ()
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
        return dispatch({type: 'ADD_USERS',  payload })
    }
}

// (async () => {
//     const rawResponse = await fetch('https://httpbin.org/post', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({a: 1, b: 'Textual content'})
//     });
//     const content = await rawResponse.json();
//
//     console.log(content);
// })();