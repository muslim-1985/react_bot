import React, {Component} from 'react'

export default class Login extends Component {
    constructor (props) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);
    }
    btnOnClick () {
        //передаем родителю значение поля
        this.props.loginData({username: this.username.value, email: this.email.value});
        this.username.value = '';
        this.email.value = '';
    }
    render () {
        return (
            <div>
                <input type="text" ref={(input) => { this.username = input; }} />
                <input type="email" ref={(input) => { this.email = input; }} />
                <button onClick={this.btnOnClick}>Login</button>
            </div>
        )
    }
}