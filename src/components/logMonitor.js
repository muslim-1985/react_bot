import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import eventOnLog from '../actions/socketEmitLog';
import actionGetApacheLogs from '../actions/getLogs';
import {actionSetUserData} from '../actions/getLogs';
import Menu from "../containers/menu";
import localStorage from 'local-storage';

class LogMonitor extends Component {
    constructor(props) {
        super(props);
        this.setSecretUserData = this.setSecretUserData.bind(this);
        this.setServerState = this.setServerState.bind(this);
        this.state = {
          serverState: '',
      };
    }

    // componentDidMount() {
    //   //  this.props.getLog(localStorage('jwt_token').jwt.userId)
    //     this.props.onLog();
    // }
    setSecretUserData () {
      this.props.setUserData(
        {
          username: this.username.value,
          passpharse: this.passpharse.value,
          ip: this.ip.value,
          privateKey: this.key.value,
          userId: localStorage('jwt_token').jwt.userId
        }
      );
      this.passpharse.value = '';
      this.ip.value = '';
      this.key.value = '';
    }
    setServerState (e) {
      console.log(e.target.checked)
      if (e.target.checked) {
        this.props.getLog({userId: localStorage('jwt_token').jwt.userId, watch: true})
      } else {
        this.props.getLog({userId: localStorage('jwt_token').jwt.userId, watch: false})
      }
      this.props.onLog(e.target.checked);
    }

    render() {
        const logs = this.props.logs;
        return (
           <div>
              <Menu/>
              <div className="container">
                <div className="row">
                  <div className="col-2">
                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">Add server</button>
                  </div>
                  <div className="col-2">
                    <p><small>watch server</small></p>
                    <label className="switch">
                      <input type="checkbox" onChange={this.setServerState}/>
                      <span className="slider round" />
                    </label>
                  </div>
                  <div className="col-2">
                    <i className="fas fa-cog fa-2x"></i>
                  </div>
                 
                  
              <div className="col-12">
               {/* The Modal */}
               <div className="modal fade" id="myModal">
                 <div className="modal-dialog">
                   <div className="modal-content">
                     {/* Modal Header */}
                     <div className="modal-header">
                       <h4 className="modal-title">Remote server connection</h4>
                       <button type="button" className="close" data-dismiss="modal">×</button>
                     </div>
                     {/* Modal body */}
                     <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername"
                                           aria-describedby="emailHelp" placeholder="Enter username" ref={(input) => { this.username = input; }} />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Passpharse</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Passpharse" ref={(input) => { this.passpharse = input; }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">IP adress or domain</label>
                                    <input type="text" className="form-control" id="exampleInputUsername"
                                           aria-describedby="emailHelp" placeholder="Enter IP adress or domain" ref={(input) => { this.ip = input; }} />

                                </div>
                                <div className="form-group">
                                  <label htmlFor="exampleFormControlTextarea1">Secret key</label>
                                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} ref={(input) => { this.key = input; }} />
                                </div>
                            </form>
                     </div>
                     {/* Modal footer */}
                     <div className="modal-footer">
                       <button className="btn btn-primary" onClick={this.setSecretUserData}>Submit</button>
                       <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <ul>
               {logs.map((log, index) => {
                 return <li key={index}>{log}</li>
               })}   
             </ul>
           </div>
          </div>
        </div>
          
        );
    }
}

function mapStateToProps (state) {
    return {
        logs: state.onLog
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onLog(check) {
            dispatch(eventOnLog(check));
        },
        getLog (userId) {
            dispatch(actionGetApacheLogs(userId))
        },
        setUserData (data) {
          dispatch(actionSetUserData(data))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (LogMonitor)