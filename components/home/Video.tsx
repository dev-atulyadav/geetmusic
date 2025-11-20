import React from 'react'

const Video = () => {
  return (
    <video className='w-full h-full object-cover absolute top-0 left-0' autoPlay loop muted >
      <source src="https://cdn.pixabay.com/video/2023/08/11/175594-853887904_large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>    
  )
}

export default Video