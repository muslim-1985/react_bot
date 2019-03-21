import socket from 'socket.io-client';
import localStorage from 'local-storage';
const io = socket('http://localhost:3012/log');

export default function eventOnLog (check)
{
    return dispatch => {
        if(check) {
            io.emit('create', localStorage('jwt_token').jwt.userId);
        } else {
            io.emit('leav', localStorage('jwt_token').jwt.userId)
        }
        console.log('connection room')
        io.on('log', (payload = []) => {
            let encode = JSON.parse(payload);
            console.log(encode)
            return dispatch({
                type: 'LOG',
                encode
            })
        });

    }
}