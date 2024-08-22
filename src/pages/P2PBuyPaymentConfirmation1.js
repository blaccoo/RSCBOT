import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import ConfirmationFrame from "../components/ConfirmationFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PBuyPaymentConfirmation1.css";

const P2PBuyPaymentConfirmation1 = () => {
  return (
    <div className="p2p-buy-payment-confirmation">
      <div className="wallet-body-frame5">
        <div className="header7">
          <img className="menu-icon7" alt="" src="/menu-icon.svg" />
          <img className="notification-icon7" alt="" src="/notification.svg" />
          <div className="connect-wallet7">
            <b className="connect7">Connect</b>
          </div>
          <img className="profile-icon7" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill1.svg"
          youArePaying="Seller"
          propWidth="36px"
          herbetpere="@herbetpere"
          propWidth1="81px"
          youArePayingHeight="unset"
          youArePayingAlignSelf="stretch"
        />
        <div className="hgt65yt61">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions4">
          <ConfirmationFrame
            propWidth="370px"
            frame="/mark.svg"
            propWidth1="115.4px"
            propOverflow="unset"
            propWidth2="370px"
            paymentConfirmed="Payment Confirmed"
            youHaveConfirmedRecipient="The Seller has confirmed your Payment"
            yourWithdrawalWasSuccessful="Your Purchase was successful Check your Wallet"
          />
          <div className="frame8">
            <div className="frame8">
              <div className="close5">
                <b className="back-to-wallet1">Back to Wallet</b>
              </div>
            </div>
          </div>
          <div className="footer-start-frame4">
            <div className="footer-frame4">
              <div className="home-referral4">
                <div className="referal-frame4">
                  <div className="referal-link-frame4">
                    <div className="httpsrisingcoinxyzrefant4">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent5">
                      <div className="frame-child8" />
                      <div className="frame-child9" />
                    </div>
                  </div>
                  <div className="referal-text4">
                    <div className="refer-friends-to4">
                      Refer friends to get 3 RSC or 5% every time they mine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
        <img
          className="solarcopy-outline-icon1"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default P2PBuyPaymentConfirmation1;
