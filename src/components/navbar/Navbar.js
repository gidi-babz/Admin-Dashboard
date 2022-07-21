import { useContext } from 'react';
import './navbar.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="search-icon" />
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item" onClick={() => dispatch({ type: 'TOGGLE' })}>
            {!darkMode && <DarkModeOutlinedIcon className="icon" />}
            {darkMode && <LightModeOutlinedIcon className="icon" />}
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/12640456/pexels-photo-12640456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="woman standing alone"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
