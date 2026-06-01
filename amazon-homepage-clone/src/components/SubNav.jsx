import React from 'react';
import './SubNav.css';

function SubNav() {
  return (
    <div className="subnav">
      <div className="subnav_left">
        <div className="subnav_item subnav_menu">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
          <span>All</span>
        </div>
        <span className="subnav_item">Fresh</span>
        <span className="subnav_item">Amazon miniTV</span>
        <span className="subnav_item">Sell</span>
        <span className="subnav_item">Best Sellers</span>
        <span className="subnav_item">Today's Deals</span>
        <span className="subnav_item subnav_itemDesktop">Mobiles</span>
        <span className="subnav_item subnav_itemDesktop">Electronics</span>
        <span className="subnav_item subnav_itemDesktop">Prime</span>
        <span className="subnav_item subnav_itemDesktop">Customer Service</span>
      </div>

      <div className="subnav_right">
        <span className="subnav_item subnav_bold">New Launches from Brands</span>
      </div>
    </div>
  );
}

export default SubNav;