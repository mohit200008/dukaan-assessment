import React from 'react';
import './SideBar.css';
import logo from '../assets/1494ed3109e53ab9db09579cd5d8839e.png'
import { IoIosSquareOutline } from "react-icons/io";
import Home from '../assets/Home.svg'
import Orders from '../assets/Orders.svg'
import Products from '../assets/Products.svg'
import Delivery from '../assets/Delivery.svg'
import Marketing from '../assets/Marketing.svg'
import Analytics from '../assets/Analytics.svg'
import Payouts from '../assets/Payouts.svg'
import Discounts from '../assets/Discounts.svg'
import Audience from '../assets/Audience.svg'
import Plugins from '../assets/Plugins.svg'
import Appearance from '../assets/Appearance.svg'
import Wallet from '../assets/wallet.png'

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="user-section">
                <div className="user-info">
                    <div className="user-avatar"></div>
                    <img className="user-image" src={logo} alt="User Avatar" />
                    <div className="user-details">
                        <div className="user-name">Nishyan</div>
                        <div className="user-link">Visit store</div>
                    </div>
                </div>
                <div className="nav-links">
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Home} />
                            </a>
                        </div>
                        <div className="link-text">Home</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Orders} />
                            </a>
                        </div>
                        <div className="link-text">Orders</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Products} />
                            </a>
                        </div>
                        <div className="link-text">Products</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Delivery} />
                            </a>
                        </div>
                        <div className="link-text">Delivery</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Marketing} />
                            </a>
                        </div>
                        <div className="link-text">Marketing</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Analytics} />
                            </a>
                        </div>
                        <div className="link-text">Analytics</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Payouts} />
                            </a>
                        </div>
                        <div className="link-text">Payouts</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Discounts} />
                            </a>
                        </div>
                        <div className="link-text">Discounts</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Audience} />
                            </a>
                        </div>
                        <div className="link-text">Audience</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Appearance} />
                            </a>
                        </div>
                        <div className="link-text">Appearance</div>
                    </div>
                    <div className="nav-link">
                        <div className="link-icon">
                            <a href='#'>
                                <img src={Plugins} />
                            </a>
                        </div>
                        <div className="link-text">Plugins</div>
                    </div>
                </div>
                <div className="credits-section">
                <div className="credits-info">
                    <div className="credits-icon">
                        <img src={Wallet} alt="Credits Icon" />
                    </div>
                    <div className="credits-details">
                        <div className="credits-label">Available credits</div>
                        <div className="credits-amount">222.10</div>
                    </div>
                </div>
            </div>
            </div>
       
        </div>
    );
};

export default SideBar;
