import React, {Component} from 'react'

export default class Register extends Component {
    constructor (props) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);
    }
    btnOnClick () {
        //передаем родителю значение поля
        this.props.registerData (
                {
                    username: this.usernameRegister.value,
                    email: this.emailRegister.value,
                    password: this.passwordRegister.value,
                    repeatPassword: this.repeatPasswordRegister.value
                }
            );
        this.usernameRegister.value = '';
        this.emailRegister.value = '';
        this.passwordRegister.value = '';
        this.repeatPasswordRegister.value = '';
    }
    render () {
        return (
            <div>
                <input type="text" ref={(input) => { this.usernameRegister = input; }} />
                <input type="email" ref={(input) => { this.emailRegister = input; }} />
                <input type="password" ref={(input) => { this.passwordRegister = input; }} />
                <input type="password" ref={(input) => { this.repeatPasswordRegister = input; }} />
                <button onClick={this.btnOnClick}>Register</button>
            </div>
        )
    }
}