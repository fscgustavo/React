import { combineReducers } from 'redux'


const songsReducer = () => {
    return[
        {title: 'Already Over', duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'Rockstar', duration: '3:15'},
        {title: 'Shadow on the sun', duration: '1:45'}
    ]
}

 
const  selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    } 

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer

})