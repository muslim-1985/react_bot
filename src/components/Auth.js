import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../containers/login';
import Register from '../containers/register';
import Menu from '../containers/menu';
import actionOnLogin from "../actions/login";
import actionOnRegister from "../actions/register";

class Auth extends Component {
    constructor (props) {
        super(props);
        this.loginData = this.loginData.bind(this);
        this.registerData = this.registerData.bind(this);
    }

    loginData (value) {
        this.props.onLogin(value);
    }
    registerData (value) {
        this.props.onRegister(value);
    }

    render() {
        return (
            <div>
                <Menu/>
                <Login/>
                <Register/>
            </div>
        );
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
        },
        onRegister(value) {
            dispatch(actionOnRegister(value));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Auth)