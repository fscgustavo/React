import React, {Component} from 'react'
import {connect} from 'react-redux' //importing connect
import {selectSong} from '../actions'

class SongList extends Component{//another way to extends
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            )
        })
    }
    
    render(){
        //this.props === {songs: state.songs}
        //console.log(this.props)  we gain a dispatch function
        return(
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

//convetion
const mapStateToProps = (state) => {
    return {songs: state.songs}
}

//connect()
/*
    the action needs to be dispatched
    the connect function do it for us
*/
export default connect(mapStateToProps,{selectSong})(SongList)