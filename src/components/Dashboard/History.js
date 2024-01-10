import React from 'react'
import './History.css'

const History = () => {
  return (
    <div className="history-container">
      {[1, 2,3,4,5].map((item) => (
        <div className="history-row" key={item}>
          <div className="column">
            <div className="column-item">{`#28120${item}`}</div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="status success">
              <div className="status-icon"></div>
              <div className="status-text">Successful</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="column-item">131634495747</div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="column-item">Today,08:45 PM</div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="column-item amount">₹1,125.00</div>
          </div>
        </div>
      ))}
      <div className="history-row">
          <div className="column">
            <div className="column-item">#281208</div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="status success">
              <div className="status-icon-f"></div>
              <div className="status-text">Processing</div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="column-item">131634495747</div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="column-item">Yesterday, 07:45 PM</div>
          </div>
          <div className="divider"></div>
          <div className="column">
            <div className="column-item amount">₹1,145.00</div>
          </div>
        </div>
    </div>
  )
}

export default History