import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
    const videoItems = props.videos.map((video) =>{
        //each video will have the same etag.
        return <VideoListItem key = {video.etag} video = {video}/>
    });
    return (
        <ul className ="col-md-4 list group">
           {videoItems} 
        </ul>
    );
};

export default VideoList;