import React from 'react'
import './Feed.css'

const Feed = () => {
  return (
    <div className='feed'>
        <div className='card'>
            <img src={pic1} alt=""/>
            <h2>Video title</h2>
            <h3>Channel name</h3>
            <p>Total view &bull; upload time</p>
        </div>

        <div className='card'>
            <img src={pic2} alt=""/>
            <h2>Video title</h2>
            <h3>Channel name</h3>
            <p>Total view &bull; upload time</p>
        </div>

    </div>
  )
 
}

export default Feed;