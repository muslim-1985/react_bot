import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import eventOnLog from '../actions/socketEmitLog';
import Menu from "../containers/menu";

class LogMonitor extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLog();
    }

    render() {
        const logs = this.props.logs;
        return (
            <div>
                <Menu/>
                <ul>
                    {logs.map((log, index) => {
                        return <li key={index}>{log}</li>
                    })}
                </ul>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        logs: state.onLog,
    }
}
function mapDispatchToProps (dispatch) {
    return {
        onLog() {
            dispatch(eventOnLog());
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (LogMonitor)