export default function actionOnAddTrack (trackName) {
    return {
        type: 'ADD_TRACK',
        payload: trackName
    }
}