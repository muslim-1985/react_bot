import React, { Component } from 'react';
import { connect } from 'react-redux';
import Track from '../containers/tracks';
import TrackInput from '../containers/tracks_input';
import '../App.css';
import actionOnAddTrack from '../actions/track'

class App extends Component {
    constructor (props) {
        super(props);
        //биндим метод так как вызываем его из дочернего класса
        this.addTrack = this.addTrack.bind(this);
    }
    addTrack (value) {
        this.props.onAddTrack(value);
    }
  render() {
    return (
        <div>
            <TrackInput addTrack={this.addTrack}/>
            <Track tracks={this.props.tracks}/>
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
        onAddTrack (trackName) {
            dispatch(actionOnAddTrack(trackName))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (App)
