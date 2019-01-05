import React, {Component} from 'react'

export default class TrackInput extends Component {
    constructor (props) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);
    }
    btnOnClick () {
        //передаем родителю значение поля
        this.props.addTrack(this.trackInput.value);
        this.trackInput.value = '';
    }
    render () {
        return (
            <div>
                <input type="text" ref={(input) => { this.trackInput = input; }} />
                <button onClick={this.btnOnClick}>Add track</button>
            </div>
        )
    }
}