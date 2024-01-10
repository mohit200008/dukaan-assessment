// Tab.js
import React from 'react';
import './Tab.css';

const Tab = () => {
  return (
    <div className="tab-container">
      <div className="tab-title">Overview</div>
      <div className="tab-content">
        <div className="tab-option">
          <div className="tab-background"></div>
          <div className="tab-label">This Month</div>
          <div className="tab-indicator"></div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
