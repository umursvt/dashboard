import React from 'react';
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search" name="" id="" />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListIcon className="icon" />
            <div className="avatar">
              <AccountCircleOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
