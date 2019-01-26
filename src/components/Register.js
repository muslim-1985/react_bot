import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import actionOnRegister from "../actions/register";
import Menu from '../containers/menu';

class Register extends Component {
    constructor (props) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);
    }
    btnOnClick () {
        this.props.onRegister (
                {
                    username: this.usernameRegister.value,
                    email: this.emailRegister.value,
                    password: this.passwordRegister.value,
                    repeatPassword: this.repeatPasswordRegister.value
                },
                this.props.history
            );
        this.usernameRegister.value = '';
        this.emailRegister.value = '';
        this.passwordRegister.value = '';
        this.repeatPasswordRegister.value = '';
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
                                           aria-describedby="emailHelp" placeholder="Enter username" ref={(input) => { this.usernameRegister = input; }} />

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail"
                                           placeholder="Email" ref={(input) => { this.emailRegister = input; }} />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your
                                        email with anyone else.
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Password" ref={(input) => { this.passwordRegister = input; }} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleRepeatPassword">Repeat Password</label>
                                    <input type="password" className="form-control" id="exampleRepeatPassword"
                                           placeholder="Repeat Password" ref={(input) => { this.repeatPasswordRegister = input; }} />
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
        onRegister(value, history) {
            dispatch(actionOnRegister(value, history));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Register)