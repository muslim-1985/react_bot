
import socket from 'socket.io-client';
const io = socket('http://localhost:3012');

export default function eventOnMessages ()
{
    return dispatch => {
        io.on('MESSAGE', (payload=[]) => {
            return dispatch({type: 'MESSAGE',  payload })
        });
        io.on('MESSAGE_BOT_USER', (payload=[]) => {
            return dispatch({type: 'MESSAGE_BOT_USER',  payload })
        });
    }
}

export function sendMessage ({chatId, message, userId})
{
    io.emit('SEND_MESSAGE', {chatId, message, userId});
}