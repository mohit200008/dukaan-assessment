import React from 'react';
import './NextPay.css';
import Help from '../../assets/Help2.png'
import Right from '../../assets/ChevronRight2.png'
import { FaArrowRight } from "react-icons/fa";

const NextPay = () => {
    return (
        <div className="next-pay-container">
            <div className="info-container">
                <div className="info-row">
                    <div className="info-text">
                        <div className="label">Amount Pending</div>
                        <div className="icon">
                            <a href='#'>
                                <img src={Help} className='img' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info-row">
                    <div className="amount">₹92,312.20</div>
                    <div className="order-info">
                        <div className="label">13 orders</div>
                        <div className="order-icon">
                        <a href='#'>
                                <img src={Right} className='img' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NextPay;