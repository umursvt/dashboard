import React from 'react';
import './sidebar.scss';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HealingIcon from '@mui/icons-material/Healing';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo">AnubisCode</span>
        </Link>
      </div>

      <hr />

      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <GridViewIcon className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>

          <p className="title">LIST</p>
          <li>
            <PersonIcon className="icon" />
            <Link to="/users" style={{ textDecoration: 'none' }}>
              <span>Users</span>
            </Link>
          </li>
          <li>
            <StoreIcon className="icon" />
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <AirportShuttleIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">USEFULL</p>
          <li>
            <HealingIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <SyncAltIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <ContactPageIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
