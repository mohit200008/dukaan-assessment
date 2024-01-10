// Payouts.jsx

import React from 'react';
import './Payouts.css';
import Help from '../../assets/Help.png'
import Right from '../../assets/Chevron Right.png'
import { FaArrowRight } from "react-icons/fa";


const Payouts = () => {
    return (
        <div className="payouts-container">
            <div className="info-container">
                <div className="info-row">
                    <div className="info-text">
                        <div className="label">Next Payout</div>
                        <div className="icon">
                            <a href='#'>
                                <img src={Help} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info-row">
                    <div className="amount">₹2,312.23</div>
                    <div className="order-info">
                        <div className="label">23 orders</div>
                        <div className="order-icon">
                             <a href='#'>
                                <img src={Right} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="payout-date-container">
                    <div className="payout-date">Next payout date:</div>
                    <div className="payout-time">Today, 04:00PM</div>
                </div>

            </div>

        </div>
    );
};

export default Payouts;
