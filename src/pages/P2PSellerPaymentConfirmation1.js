import ConfirmationFrame from "../components/ConfirmationFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PSellerPaymentConfirmation1.css";

const P2PSellerPaymentConfirmation1 = () => {
  return (
    <div className="p2p-seller-payment-confirmatio1">
      <div className="wallet-body-frame25">
        <div className="header29">
          <img className="menu-icon29" alt="" src="/menu-icon.svg" />
          <img className="notification-icon26" alt="" src="/notification.svg" />
          <div className="connect-wallet29">
            <b className="connect29">Connect</b>
          </div>
          <img className="profile-icon29" alt="" src="/profile.svg" />
        </div>
        <div className="send-and-recieve-frame6">
          <div className="withdraw1">
            <div className="mingcuteuser-4-fill">
              <img
                className="group-icon1"
                alt=""
                src="/mingcuteuser4fill.svg"
              />
            </div>
            <div className="buyer">Buyer</div>
            <div className="herbetpere6">@herbetpere</div>
          </div>
        </div>
        <div className="hgt65yt63">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions18">
          <ConfirmationFrame
            propWidth="370px"
            frame="/mark.svg"
            propWidth1="115.4px"
            propOverflow="unset"
            propWidth2="370px"
            paymentConfirmed="You Confirmed Payment"
            youHaveConfirmedRecipient="From the buyer"
            yourWithdrawalWasSuccessful="Your Coin Sales was successful "
          />
          <div className="frame19">
            <div className="frame19">
              <div className="close15">
                <b className="back-to-wallet5">Back to Wallet</b>
              </div>
            </div>
          </div>
          <div className="footer-start-frame15">
            <div className="footer-frame15">
              <div className="home-referral15">
                <div className="referal-frame15">
                  <div className="referal-link-frame15">
                    <div className="httpsrisingcoinxyzrefant15">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent18">
                      <div className="frame-child32" />
                      <div className="frame-child33" />
                    </div>
                  </div>
                  <div className="referal-text15">
                    <div className="refer-friends-to15">
                      Refer friends to get 3 RSC or 5% every time they mine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SocialMediaHandle group182="/group-1822.svg" />
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
          className="solarcopy-outline-icon3"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default P2PSellerPaymentConfirmation1;
