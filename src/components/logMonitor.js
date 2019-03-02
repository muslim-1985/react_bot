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
        const onLog = this.onLog;
        //console.log(onLog);
        return (
            <div>
                <Menu/>
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