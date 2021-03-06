import React from 'react'
import SongList from './SongList'
import SongDetail from './SongDetail'
// if it is a named export, you need the curly braces
//import {selectSong} from '../actions'


const App = () => {
    return(
        <div className="ui container grid" style={{padding:'20px'}}>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>            
        </div>
    )
}
        
export default App