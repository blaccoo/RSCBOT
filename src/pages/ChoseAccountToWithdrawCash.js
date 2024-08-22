import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./ChoseAccountToWithdrawCash.css";

const ChoseAccountToWithdrawCash = () => {
  return (
    <div className="chose-account-to-withdraw-cash">
      <div className="wallet-body-frame23">
        <div className="header27">
          <img className="menu-icon27" alt="" src="/menu-icon.svg" />
          <img className="notification-icon24" alt="" src="/notification.svg" />
          <div className="connect-wallet27">
            <b className="connect27">Connect</b>
          </div>
          <img className="profile-icon27" alt="" src="/profile.svg" />
        </div>
        <div className="send-and-recieve-frame4">
          <div className="p2p5">
            <div className="trade10">
              From Which Account do you want to receive your cash?
            </div>
          </div>
        </div>
        <div className="send-and-recieve-frame5">
          <div className="p2p5">
            <div className="trade11">
              Note: Only add payment account that is in your legal name that
              also correspond to what you have in the app
            </div>
          </div>
        </div>
        <div className="current-balance-frame4">
          <div className="title8">
            <div className="title-instruction-frame6">
              <div className="add-your-payment2">Add your payment methods</div>
            </div>
          </div>
          <div className="payment-banks-added2">
            <div className="select-one-container">
              <div className="select-one1">Select one</div>
            </div>
            <div className="frame-parent9">
              <div className="first-bank-of-nigeria-container">
                <div className="select-one1">First Bank of Nigeria</div>
                <div className="remove7">REMOVE</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">3110888763567</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">User NAme</div>
              </div>
            </div>
            <div className="frame-parent9">
              <div className="first-bank-of-nigeria-container">
                <div className="select-one1">Opy</div>
                <div className="remove7">REMOVE</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">3110888763567</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">User NAme</div>
              </div>
            </div>
            <div className="frame-parent9">
              <div className="first-bank-of-nigeria-container">
                <div className="select-one1">GTBank</div>
                <div className="remove7">REMOVE</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">3110888763567</div>
              </div>
              <div className="wrapper8">
                <div className="select-one1">User NAme</div>
              </div>
            </div>
          </div>
        </div>
        <CoinOverviewAndTransactions propHeight="211px" propHeight1="193px" />
        <SocialMediaHandle group182="/group-1821.svg" />
        <BottomTabs
          propHeight="unset"
          walletIcon="/wallet-icon.svg"
          wallet="Wallet"
          fluenthome48Filled="/fluenthome48filled.svg"
          home="Home"
          tradeIcon="/trade-icon.svg"
          trade="Trade"
        />
      </div>
    </div>
  );
};

export default ChoseAccountToWithdrawCash;
