import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import actionFetchBotUsers from '../actions/botUsers';
import eventOnMessages from '../actions/socketEmitMessages';
import Menu from "../containers/menu";
import LeftSidebar from "../containers/usersMessages";

class UserMessages extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.onFetchBotUsers();
        this.props.onMessage(this.props.users[0]);
    }

    render() {
        console.log(this.props)
        const { users } = this.props;

        return (
            <div>
                <Menu/>
                <LeftSidebar users={users}/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        users: state.fetchBotUsersReducer,
        messages: state.onMessages,
        isConnected: state.isConnected
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onFetchBotUsers() {
            dispatch(actionFetchBotUsers());
        },
        onMessage() {
            dispatch(eventOnMessages());
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UserMessages)