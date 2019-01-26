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
        this.props.onLogin({username: this.username.value, email: this.email.value});
        this.username.value = '';
        this.email.value = '';
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
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" placeholder="Enter email" ref={(input) => { this.username = input; }} />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your
                                            email with anyone else.
                                        </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password" ref={(input) => { this.email = input; }} />
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={this.btnOnClick}>Submit</button>
                            </form>
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
        onLogin (value) {
            dispatch(actionOnLogin(value))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Login)