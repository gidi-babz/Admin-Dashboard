import { useContext } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.scss';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <aside className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo"> babzadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icons" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlinedIcon className="icons" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreMallDirectoryIcon className="icons" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ListAltIcon className="icons" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingRoundedIcon className="icons" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icons" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icons" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <MonitorHeartOutlinedIcon className="icons" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icons" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icons" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icons" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icons" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </aside>
  );
};

export default Sidebar;
