import React from 'react'
import './Sidebar.css'

{/*import picture for use*/ }
import home from '../../assets/home.png'
import shorts from '../../assets/shorts.png'
import subscription from '../../assets/subscription.png'
import history from '../../assets/history.png'
import playlist from '../../assets/playlist.png'
import watchLater from '../../assets/watchLater.png'
import like from '../../assets/like.png'
import seventeen from '../../assets/seventeen.png'
import scoups from '../../assets/scoups.jpg'
import toram from '../../assets/toram.jpg'
import shua from '../../assets/shua.jpg'
import prevailing from '../../assets/prevailing.jpg'
import music from '../../assets/music.png'
import game_icon from '../../assets/game_icon.png'
import news from '../../assets/news.png'
import sports from '../../assets/sports.png'
import setting from '../../assets/setting.png'
import report from '../../assets/report.png'
import help from '../../assets/help.png'
import sendFeedback from '../../assets/sendFeedback.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sortcut-links'>

                <div className='side-link'>
                    <img src={home} alt="" /> <p>Home</p>
                </div>

                <div className='side-link'>
                    <img src={shorts} alt="" /> <p>Shorts</p>
                </div>

                <div className='side-link'>
                    <img src={subscription} alt="" /> <p>Subscribe Channel</p>
                </div>

                <hr />
            </div>

            {/*Friend side bar*/}
            <div className='your-list'>
                <h3>You</h3>

                <div className="side-link">
                    <img src={history} alt="" /> <p>History</p>
                </div>

                <div className="side-link">
                    <img src={playlist} alt="" /> <p>Playlist</p>
                </div>

                <div className="side-link">
                    <img src={watchLater} alt="" /> <p>Watch later</p>
                </div>

                <div className="side-link">
                    <img src={like} alt="" /> <p>Liked</p>
                </div>

                <hr />
            </div>

            {/* subscribe channel side bar*/}
            <div className="subscribe-list">
                <h3>Subscribe Channel</h3>

                <div className="personal-channel">
                    <img src={seventeen} alt="" /> <p>SEVENTEEN</p>
                </div>


                <div className="personal-channel">
                    <img src={scoups} alt="" /> <p>S.Coups</p>
                </div>

                <div className="personal-channel">
                    <img src={toram} alt="" /> <p>JeongHan</p>
                </div>

                <div className="personal-channel">
                    <img src={shua} alt="" /> <p>Joshua</p>
                </div>

                <hr />
            </div>

            {/* discover side bar */}
            <div className='discover-list'>

                <h3>Discover</h3>

                <div className="side-link">
                    <img src={prevailing} alt="" /> <p>Prevailing</p>
                </div>

                <div className="side-link">
                    <img src={music} alt="" /> <p>Music</p>
                </div>

                <div className="side-link">
                    <img src={game_icon} alt="" /> <p>Game</p>
                </div>

                <div className="side-link">
                    <img src={news} alt="" /> <p>News</p>
                </div>

                <div className="side-link">
                    <img src={sports} alt="" /> <p>Sports</p>
                </div>

                <hr />
            </div>

            {/* other sortcut list */}
            <div className='other-sortcut-links'>

                <div className='side-link'>
                    <img src={setting} alt="" /> <p>Setting</p>
                </div>

                <div className='side-link'>
                    <img src={report} alt="" /> <p>Report</p>
                </div>

                <div className='side-link'>
                    <img src={help} alt="" /> <p>Help</p>
                </div>

                <div className='side-link'>
                    <img src={sendFeedback} alt="" /> <p>SendFeedback</p>
                </div>

                <hr />
            </div>

        </div>
    )
}

export default Sidebar