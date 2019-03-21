import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import actionFetchAllUsers from '../actions/users';
import Menu from "../containers/menu";

class App extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.onFetchUsers();
    }

  render() {
        const { users } = this.props;
    return (
        <div>
            <Menu/>
            <ul>
                {users.map(user => {
                    return <li key={user.id}>{user.name}</li>
                })}
            </ul>
        </div>
    );
  }
}

function mapStateToProps (state) {
    return {
        users: state.users
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onFetchUsers() {
            dispatch(actionFetchAllUsers());
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (App)
