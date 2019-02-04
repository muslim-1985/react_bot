import React, {Component, Fragment} from 'react';

export default class leftSidebar extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const { users } = this.props;
        return (
           <Fragment>
               <div className="row">
                   <div className="col-2">
                       <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                            aria-orientation="vertical">
                           {users.map(user => {
                               return <a key={user._id} className="nav-link" id={`v-pills-${user._id}-tab`} data-toggle="pill" href={`#v-pills-${user._id}`}
                                         role="tab" aria-controls={`v-pills-${user._id}`} aria-selected="true">{user.username}</a>
                           })}
                           <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-profile"
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
                                   <form>
                                       <div className="form-group">
                                           <textarea className="form-control" rows="5" id="message" placeholder="Enter message"></textarea>
                                       </div>
                                   </form>
                                   <button className="btn btn-primary">Submit</button>
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