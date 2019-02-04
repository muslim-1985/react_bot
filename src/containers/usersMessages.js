import React, {Component, Fragment} from 'react';
import { sendMessage } from '../actions/socketEmitMessages';

export default class leftSidebar extends Component {
    constructor (props) {
        super(props);
        this.onEventMessage = this.onEventMessage.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
    }

    onEventMessage(userChatId) {
        this.props.onMessage(userChatId)
    }
    onSendMessage ({chatId, message, userId}) {
        sendMessage({chatId, message, userId});
        this.mess.value = '';
    }
    render () {
        const { users, message } = this.props;
       // console.log(message);
        return (
           <Fragment>
               <div className="row">
                   <div className="col-2">
                       <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                           {users.map(user => {
                               return <a key={user._id} className="nav-link" id={`v-pills-${user._id}-tab`} data-toggle="pill" href={`#v-pills-${user._id}`}
                                         role="tab" aria-controls={`v-pills-${user._id}`} aria-selected="true" onClick={() => this.onEventMessage(user.chatId)}>{user.username}</a>
                           })}
                           <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-profile"
                              role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                       </div>
                   </div>
                   <div className="col-4">
                       <div className="tab-content" id="v-pills-tabContent">
                           {users.map(user => {
                               return <div key={user._id} className="tab-pane fade" id={`v-pills-${user._id}`} data-toggle="pill" role="tabpanel"
                                          aria-labelledby={`v-pills-${user._id}-tab`} aria-selected="true">{user.userMessages.map( (message, index) => {
                                              return <p key={index}>{message.subject}</p>
                               })}
                                       {message.map((mes, index) => {
                                           if (typeof mes.id !== 'undefined') {
                                               return <p key={index} color="red">{mes.message}</p>
                                           } else {
                                               return <p key={index}>{mes.message}</p>
                                           }
                                           })}
                                   <form>
                                       <div className="form-group">
                                           <textarea className="form-control" rows="5" id="message" placeholder="Enter message" ref={(input) => { this.mess = input; }}></textarea>
                                       </div>
                                   </form>
                                   <button className="btn btn-primary" onClick={() => this.onSendMessage({chatId: user.chatId, message: this.mess.value, userId: user._id })}>Submit</button>
                               </div>
                           })}
                           <div className="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                aria-labelledby="v-pills-profile-tab">..2
                           </div>
                       </div>
                   </div>
               </div>
           </Fragment>
        )
    }
}