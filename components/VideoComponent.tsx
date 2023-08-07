import React from 'react';
import { Video } from '../types'


type VideoProps = {
  video: Video;
};

const VideoComponent: React.FC<VideoProps> = ({ video }) => {
  return (
    <div className='video-container'>
      <iframe
        width='560'
        height='315'
        src={video.video}
        title={video.title}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoComponent;
