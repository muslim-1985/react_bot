import React, {Component, Fragment} from 'react';
import { sendMessage } from '../actions/socketEmitMessages';

export default class leftSidebar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            message: '',
        };
        this.onChangeMessageForm = this.onChangeMessageForm.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
    }
    onChangeMessageForm (e) {
       this.setState({ message : e.target.value });
    }
    onSendMessage ({chatId, message=this.state.message, userId}) {
        sendMessage({chatId, message, userId});
        this.setState({ message : '' });
    }
    render () {
        const { users, message } = this.props;
        return (
           <Fragment>
               <div className="row">
                   <div className="col-2">
                       <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                           {users.map(user => {
                               return <a key={user._id} className="nav-link" id={`v-pills-${user._id}-tab`} data-toggle="pill" href={`#v-pills-${user._id}`}
                                         role="tab" aria-controls={`v-pills-${user._id}`} aria-selected="true">{user.firstName}</a>
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
                                           if (typeof mes.id !== 'undefined' && mes.chatId === user.chatId) {
                                               return <p key={index} color="red">{mes.message}</p>
                                           } else if (mes.chatId === user.chatId) {
                                               return <p key={index}>{mes.message}</p>
                                           }
                                           })}
                                   <form>
                                       <div className="form-group">
                                           <textarea className="form-control" value={this.state.message} rows="5" id="message" placeholder="Enter message" onChange={this.onChangeMessageForm}></textarea>
                                       </div>
                                   </form>
                                   <button className="btn btn-primary" onClick={() => this.onSendMessage({chatId: user.chatId, userId: user._id})}>Submit</button>
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