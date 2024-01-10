import React from 'react';
import './Transaction.css';
import { FaSearch } from "react-icons/fa";
import Download from '../../assets/Download.png'
import Sort from '../../assets/Sort.png'


const Transaction = () => {
    return (
        <div className="transaction-container">
            <div className="input-container">
                <div className="input-box">
                    <div className="icon">
                        <FaSearch style={{ background: "white", color: "black" }} />
                    </div>
                    <input
                        type="text"
                        placeholder="Order ID or transaction ID"
                        className="input-text"
                    />
                </div>
            </div>
            <div className="actions-container">
                <div className="sort-action">
                    <div className="sort-text">Sort</div>
                    <div className="sort-icon">
                        <img src={Sort} style={{ cursor: "pointer" }}  />
                    </div>
                </div>
                <div className="filter-action">
                    <div className="filter-icon">
                        <img src={Download} style={{ cursor: "pointer" }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transaction;
