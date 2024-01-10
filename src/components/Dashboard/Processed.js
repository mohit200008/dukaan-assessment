import React from 'react';
import './NextPay.css';
import Help from '../../assets/Help2.png'
import Right from '../../assets/ChevronRight2.png'
import { FaArrowRight } from "react-icons/fa";

const Processed = () => {
    return (
        <div className="next-pay-container">
            <div className="info-container">
                <div className="info-row">
                    <div className="info-text">
                        <div className="label">Amount Processed</div>
                        <div className="icon">
                            <a href='#'>
                                <img src={Help} className='img' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="info-row">
                    <div className="amount">₹23,92,312.19</div>
                </div>
            </div>
        </div>
    );
};

export default Processed;