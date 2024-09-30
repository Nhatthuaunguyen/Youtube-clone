import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Homepage from './Pages/Home/Homepage';
import Videopage from './Pages/Video/Videopage';

const App = () => {
  return (
    <div>

      {/* mount home page and video page into app by using react router
      to implement react router, use main.jsx file  */}

      <Navbar />

      <Routes>
        {/* create route for homepage
        Home page doesn't need to have path to access */}
        <Route path='/' element={<Homepage />} />

        {/* create route for video page
        Video need to has path to access */}
        <Route path='/video/:categoryId/:videoId' element={<Videopage />} />

      </Routes>

    </div>
  )
}

export default App
