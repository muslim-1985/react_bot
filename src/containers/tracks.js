import React, {Component} from 'react'

export default class Track extends Component {
    render () {
        return (
            <ul>
                {this.props.tracks.map((track, index) =>
                    <li key={index}> {track} </li>
                )}
            </ul>
        )
    }
}