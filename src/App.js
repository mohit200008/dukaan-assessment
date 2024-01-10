import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Tab from './components/Tab';
import Payouts from './components/Dashboard/Payouts';
import NextPay from './components/Dashboard/NextPay';
import Transaction from './components/Dashboard/Transaction';
import History from './components/Dashboard/History';
import Processed from './components/Dashboard/Processed';

function App() {
  return (
    <>
      <div className='container'>
        <div className='left-container'>
          <SideBar />
        </div>
        <div className='right-container'>
          <div>
            <TopBar />
          </div>
          <div>
            <Tab />
          </div>
          <div>
            <div className='amounts'>
              <Payouts />
              <NextPay />
              <Processed />
            </div>
            <div className="transaction-header">
              Transactions | This Month
            </div>

            <div>
              <div className="payout-box" style={{ cursor: "pointer" }}>
                <div className="payout-text">Payouts (22)</div>
              </div>
              <div className="payout-box-b" style={{ cursor: "pointer" }}>
                <div className="payout-text-b">Refunds (6)</div>
              </div>
            </div>

            <div>
              <Transaction />
            </div>

            <div>
                <History />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
