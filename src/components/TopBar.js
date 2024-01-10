import React from 'react';
import './TopBar.css';
import { FaSearch } from "react-icons/fa";
import Group from '../assets/Group.png'
import Menu from '../assets/Menu.png'


const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="title-section">
                <div className="title" style={{ cursor: "pointer" }}>Payouts</div>
                <div className="info-section">
                    <div className="info-icon"></div>
                    <div className="info-text" style={{ cursor: "pointer" }}>How it works</div>
                </div>
            </div>
            <div className="search-section">
                <div className="search-icon">
                    <FaSearch />
                </div>
                <input
                    type="text"
                    placeholder="Search features, tutorials, etc."
                    className="search-input"
                />
            </div>
            <div className="user-section-top">
                <div className="user-avatar">
                    <div className="avatar-circle">
                        <div className="avatar-inner">
                            <img src={Group} />
                        </div>
                        <div className="avatar-inner-m">
                            <img src={Menu} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
