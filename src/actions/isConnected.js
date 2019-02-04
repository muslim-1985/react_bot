import socket from 'socket.io-client';
const io = socket('http://localhost:3012');

export default function isConnected ()
{
    return dispatch => {
        io.once('connect', (data) => dispatch({type: 'IS_CONNECTED', data}));
    }
}