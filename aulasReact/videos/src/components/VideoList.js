import React from 'react'
import VideoItem from './VideoItem'
import { unstable_batchedUpdates } from 'react-dom'

const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map((video)=>{
        return(
            <div className="ui relaxed divided list">
                <VideoItem 
                    key={video.id.videoId} 
                    onVideoSelect={onVideoSelect} 
                    video = {video}
                />
            </div>
        );
    })


    return <div>{renderedList}</div>
   
}

export default VideoList