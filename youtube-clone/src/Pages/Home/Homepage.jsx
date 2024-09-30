import React from 'react'
import './Homepage.css'
import Sidebar from'../../Components/Sidebar/Sidebar'

const Homepage = () => {
  return (
    <>
      {/*mount sidebar file into homepage*/}
      <Sidebar/>

      { /* ghi lại lí do tại sao có dòng nì 
      <div className={'container' $ {sidebar?"" :large-container}}>
        <Feed/>
      </div>
      */}

    </>
  )
}

export default Homepage
