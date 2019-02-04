import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import actionFetchBotUsers from '../actions/botUsers';
import eventOnMessages from '../actions/socketEmitMessages';
import isConnected from '../actions/isConnected';
import Menu from "../containers/menu";
import LeftSidebar from "../containers/usersMessages";

class UserMessages extends Component {
    constructor (props) {
        super(props);
      this.onMessage = this.onMessage.bind(this);
    }

    componentDidMount() {
        this.props.onFetchBotUsers();
        this.props.isConnected();
    }
    onMessage (userChatId) {
        this.props.onMessage(userChatId);
    }

    render() {
        const { users } = this.props;
        const onMessage = this.onMessage;
        const { messages } = this.props;

        return (
            <div>
                <Menu/>
                <LeftSidebar users={users} onMessage={onMessage} message={messages}/>
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
        isConnected () {
            dispatch(isConnected())
        },
        onMessage(userChatId) {
            dispatch(eventOnMessages(userChatId));
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (UserMessages)