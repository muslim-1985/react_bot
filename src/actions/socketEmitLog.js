import socket from 'socket.io-client';
const io = socket('http://localhost:3012/log');

export default function eventOnLog ()
{
    return dispatch => {
        io.on('log', (payload=[]) => {
            console.log(payload)
            return dispatch({type: 'LOG',  payload })
        });
    }
}