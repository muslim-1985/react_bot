import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux';
import actionOnLogin from "../actions/login";
import Menu from '../containers/menu';

class Login extends Component {
    constructor (props) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);
    }
    btnOnClick () {
        this.props.onLogin({username: this.username.value, password: this.password.value}, this.props.history);
        this.username.value = '';
        this.password.value = '';
    }
    render () {
        return (
            <Fragment>
                <Menu/>
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputUsername">Username</label>
                                    <input type="text" className="form-control" id="exampleInputUsername"
                                           aria-describedby="emailHelp" placeholder="Enter username" ref={(input) => { this.username = input; }} />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password" ref={(input) => { this.password = input; }} />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                            </form>
                            <button className="btn btn-primary" onClick={this.btnOnClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        tracks: state.tracks
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onLogin (value, history) {
            dispatch(actionOnLogin(value, history))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Login)