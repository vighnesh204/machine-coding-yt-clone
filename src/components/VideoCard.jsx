import React from 'react'

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const { viewCount } = statistics;
  return (
    <div className='p-2 m-2 w-60 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-gray-300 shadow-sm'>
      <div className='rounded-xl overflow-hidden aspect-video bg-gray-200'>
        <img className='w-full h-full object-cover' src={thumbnails.medium.url} alt={title} />
      </div>
      <h2 className='font-semibold text-sm mt-2 line-clamp-2'>{title}</h2>
      <p className='text-xs text-gray-500 mt-1'>{channelTitle}</p>
      <p className='text-xs text-gray-500'>{viewCount} views</p>
    </div>
  )
}
{/* Higher Order Component */}
export const AdVideoCard = ({ info}) => {
  return (
   <div className='rounded-2xl *:bg-yellow-100 border border-yellow-300 shadow-sm'>
     <VideoCard info={info} />
   </div>
  )
}

export default VideoCard