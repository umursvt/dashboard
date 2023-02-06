import React from 'react';
import './widgets.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widgets = ({ type }) => {
  let data;
  // temoorary
  let amount = 100;
  let diff = 20;

  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        isMoney: false,
        link: 'See all users',
        icon: (
          <PersonIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(259,0,180,0.3',
            }}
          />
        ),
      };
      break;

    case 'order':
      data = {
        title: 'ORDERS',
        isMoney: false,
        link: 'See all orders',
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0,128,0,0.3',
            }}
          />
        ),
      };
      break;
    case 'earning':
      data = {
        title: 'EARNING',
        isMoney: true,
        link: 'View net earnings',
        icon: (
          <PaidOutlinedIcon
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128,0,128,0.3',
            }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        isMoney: true,
        link: 'See details',
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              color: 'orangered',
              backgroundColor: 'rgba(700,0,0,0.3',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && '$'} {amount}
        </span>

        <span className="link">
          {data.link} {}
        </span>
      </div>
      <div className="right">
        <span className="percentage positive ">
          <KeyboardArrowUpIcon />
          {diff}
        </span>

        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
