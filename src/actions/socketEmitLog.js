import socket from 'socket.io-client';
const io = socket('http://localhost:3012/log');

export default function eventOnLog ()
{
    return dispatch => {
        io.on('log', (payload=[]) => {
            let encode = JSON.parse(payload);
            console.log(encode)
            return dispatch({type: 'LOG',  encode })
        });
    }
}