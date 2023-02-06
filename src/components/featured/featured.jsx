import React from 'react';
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={89} text={'70%'} strokeWidth={1} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          {' '}
          Previous transaction progress. Last payment may not be included.
        </p>

        <div className="summary">
          <div className="item">
            <div className="itemResult positive">
              <div className="itemTitle">Target</div>
              <KeyboardArrowUpIcon />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemResult negative ">
              <div className="itemTitle">Last Week</div>
              <KeyboardArrowDownIcon />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemResult positive ">
              <div className="itemTitle">Last Mount</div>
              <KeyboardArrowUpIcon />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
