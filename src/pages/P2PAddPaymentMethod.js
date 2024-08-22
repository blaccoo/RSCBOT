import SendAndRecieveFrame1 from "../components/SendAndRecieveFrame1";
import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PAddPaymentMethod.css";

const P2PAddPaymentMethod = () => {
  return (
    <div className="p2p-add-payment-method">
      <div className="wallet-body-frame18">
        <div className="header21">
          <img className="menu-icon21" alt="" src="/menu-icon.svg" />
          <img className="notification-icon19" alt="" src="/notification.svg" />
          <div className="connect-wallet21">
            <b className="connect21">Connect</b>
          </div>
          <img className="profile-icon21" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame1
          sendAndRecieveFrameHeight="93px"
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          trade="@username"
        />
        <div className="current-balance-frame3">
          <div className="title6">
            <div className="title-instruction-frame5">
              <div className="add-your-payment1">Add your payment methods</div>
            </div>
          </div>
          <div className="payment-banks-added1">
            <div className="added-payment-methods-wrapper">
              <div className="added-payment-methods">Added Payment Methods</div>
            </div>
            <div className="frame-parent4">
              <div className="first-bank-of-nigeria-group">
                <div className="added-payment-methods">
                  First Bank of Nigeria
                </div>
                <div className="remove4">REMOVE</div>
              </div>
              <div className="wrapper4">
                <div className="added-payment-methods">3110888763567</div>
              </div>
              <div className="wrapper4">
                <div className="added-payment-methods">User NAme</div>
              </div>
            </div>
            <div className="frame-parent4">
              <div className="first-bank-of-nigeria-group">
                <div className="added-payment-methods">Opy</div>
                <div className="remove4">REMOVE</div>
              </div>
              <div className="wrapper4">
                <div className="added-payment-methods">3110888763567</div>
              </div>
              <div className="wrapper4">
                <div className="added-payment-methods">User NAme</div>
              </div>
            </div>
            <div className="frame-parent4">
              <div className="first-bank-of-nigeria-group">
                <div className="added-payment-methods">GTBank</div>
                <div className="remove4">REMOVE</div>
              </div>
              <div className="wrapper4">
                <div className="added-payment-methods">3110888763567</div>
              </div>
              <div className="wrapper4">
                <div className="added-payment-methods">User NAme</div>
              </div>
            </div>
          </div>
        </div>
        <CoinOverviewAndTransactions propHeight="211px" propHeight1="193px" />
        <SocialMediaHandle group182="/group-182.svg" />
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

export default P2PAddPaymentMethod;
