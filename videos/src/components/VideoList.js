import React from 'react'
import VideoItem from './VideoItem'
import { unstable_batchedUpdates } from 'react-dom'

const VideoList = ({videos}) => {

    const renderedList = videos.map((video)=>{
        return(
            <VideoItem video = {video}/>
        );
    })


    return <div>{renderedList}</div>
   
}

export default VideoList