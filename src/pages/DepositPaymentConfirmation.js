import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import ConfirmationFrame from "../components/ConfirmationFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./DepositPaymentConfirmation.css";

const DepositPaymentConfirmation = () => {
  return (
    <div className="deposit-payment-confirmation">
      <div className="wallet-body-frame10">
        <div className="header12">
          <img className="menu-icon12" alt="" src="/menu-icon.svg" />
          <img className="notification-icon11" alt="" src="/notification.svg" />
          <div className="connect-wallet12">
            <b className="connect12">Connect</b>
          </div>
          <img className="profile-icon12" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="Merchant"
          propWidth="61px"
          herbetpere="@herbetpere"
          propWidth1="81px"
          youArePayingHeight="unset"
          youArePayingAlignSelf="stretch"
        />
        <div className="hgt65yt62">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions9">
          <ConfirmationFrame
            propWidth="370px"
            frame="/mark.svg"
            propWidth1="115.4px"
            propOverflow="unset"
            propWidth2="370px"
            paymentConfirmed="Payment Confirmed"
            youHaveConfirmedRecipient="The Merchant has confirmed your Payment"
            yourWithdrawalWasSuccessful="Your Deposit was successful Check your Wallet"
          />
          <div className="frame11">
            <div className="frame11">
              <div className="close8">
                <b className="back-to-wallet3">Back to Wallet</b>
              </div>
            </div>
          </div>
          <div className="footer-start-frame8">
            <div className="footer-frame8">
              <div className="home-referral8">
                <div className="referal-frame8">
                  <div className="referal-link-frame8">
                    <div className="httpsrisingcoinxyzrefant8">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent9">
                      <div className="frame-child16" />
                      <div className="frame-child17" />
                    </div>
                  </div>
                  <div className="referal-text8">
                    <div className="refer-friends-to8">
                      Refer friends to get 3 RSC or 5% every time they mine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <img
          className="solarcopy-outline-icon2"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default DepositPaymentConfirmation;
