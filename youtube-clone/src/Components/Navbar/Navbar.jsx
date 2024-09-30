import React from 'react'
import './Navbar.css'

{/*thêm hình ảnh*/ }
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import voice_icon from '../../assets/voice.png'
import create_icon from '../../assets/create.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/profile.jpg'

const Navbar = () => {
  return (
    <nav className='flex-div'>

      {/* Tạo ra thanh icon và logo ở góc trái phía trênđầu*/}
      <div className='nav-left flex-div'>
        <img className='menu_icon' src={menu_icon} alt="" />
        <img className='logo' src={logo} alt="" />
      </div>

      {/* tạo thanh search của youtube ở giữa trang*/}
      <div className='nav-middle flex-div'>
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="" />
        </div>
        <img className = "voice_icon" src={voice_icon} alt="" />
      </div>

      {/*tạo hồ sơ người dùng, nút tạo video, nút thông báo ở bên phải*/}
      <div className='nav-right flex-div'>
        <img className="create_icon" src={create_icon} alt="" />
        <img className="notification_icon" src={notification_icon} alt="" />
        <img className="profile_icon" src={profile_icon} alt="" />
      </div>

    </nav>
  )
}

export default Navbar

