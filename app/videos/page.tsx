import React from 'react';
import Link from 'next/link';
import VideoComponent from '../../components/VideoComponent';
import videoData from '../../data/videos.json';


function Videos() {

  const arrow = '<=';

  return (
    <div className='flex min-h-screen flex-col items-center p-4 bg-gray-800 text-white h-full font-mono'>
      <h1 className='text-2xl py-16'>Página en desarrollo</h1>
      
      <Link href={'/'}>
        <p className='text-3xl py-16 hover:text-sky-500'>
          {arrow}
        </p>
      </Link>
    </div>
  )
}

export default Videos

/**
 * 
 * <div className='container'>
        {videoData.map((video )=> (
          <VideoComponent key={video.id} video={video}/>
        ))}
      </div>
 * 
 */
