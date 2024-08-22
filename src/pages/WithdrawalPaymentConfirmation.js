import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import ConfirmationFrame from "../components/ConfirmationFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./WithdrawalPaymentConfirmation.css";

const WithdrawalPaymentConfirmation = () => {
  return (
    <div className="withdrawal-payment-confirmatio">
      <div className="wallet-body-frame2">
        <div className="header2">
          <img className="menu-icon2" alt="" src="/menu-icon.svg" />
          <img className="notification-icon2" alt="" src="/notification.svg" />
          <div className="connect-wallet2">
            <b className="connect2">Connect</b>
          </div>
          <img className="profile-icon2" alt="" src="/profile.svg" />
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
        <div className="hgt65yt6">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions1">
          <ConfirmationFrame
            frame="/frame.svg"
            paymentConfirmed="Payment Confirmed"
            youHaveConfirmedRecipient="You have confirmed Recipient"
            yourWithdrawalWasSuccessful="Your Withdrawal was successful "
          />
          <div className="frame2">
            <div className="frame2">
              <div className="close1">
                <b className="back-to-wallet">Back to Wallet</b>
              </div>
            </div>
          </div>
          <div className="footer-start-frame1">
            <div className="footer-frame1">
              <div className="home-referral1">
                <div className="referal-frame1">
                  <div className="referal-link-frame1">
                    <div className="httpsrisingcoinxyzrefant1">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-container">
                      <div className="rectangle-div" />
                      <div className="frame-child1" />
                    </div>
                  </div>
                  <div className="referal-text1">
                    <div className="refer-friends-to1">
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
          className="solarcopy-outline-icon"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default WithdrawalPaymentConfirmation;
