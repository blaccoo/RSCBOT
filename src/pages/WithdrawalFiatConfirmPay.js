import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame3 from "../components/CoinOvervieFrame3";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./WithdrawalFiatConfirmPay.css";

const WithdrawalFiatConfirmPay = () => {
  return (
    <div className="withdrawal-fiat-confirm-pay">
      <div className="wallet-body-frame24">
        <div className="header28">
          <img className="menu-icon28" alt="" src="/menu-icon.svg" />
          <img className="notification-icon25" alt="" src="/notification.svg" />
          <div className="connect-wallet28">
            <b className="connect28">Connect</b>
          </div>
          <img className="profile-icon28" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill1.svg"
          youArePaying="You are Receiving "
          propWidth="118px"
          herbetpere="@herbetpere"
          propWidth1="81px"
          youArePayingHeight="23px"
          youArePayingAlignSelf="unset"
        />
        <div className="coin-overview-and-transactions17">
          <div className="timing-for-creation7">
            <div className="instruction-frame22">
              <div className="merchant-to-pay1">Merchant to Pay within</div>
            </div>
            <div className="instruction-frame22">
              <div className="merchant-to-pay1">15:00</div>
            </div>
          </div>
          <div className="instruction-frame24">
            <div className="merchant-to-pay1">
              <span>
                <span>Note:</span>
              </span>
              <span className="do-not-click-on-confirm-receiv">
                <span>{` Do not click on confirm Receive if you have not yet seen payment in your bank account. `}</span>
                <span className="do-not-answer1">
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <CoinOvervieFrame3 />
          <div className="cancel-order7">
            <b className="chat-merchant">Chat Merchant</b>
          </div>
          <div className="footer-start-frame14">
            <div className="footer-frame14">
              <div className="home-referral14">
                <div className="referal-frame14">
                  <div className="referal-link-frame14">
                    <div className="httpsrisingcoinxyzrefant14">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent17">
                      <div className="frame-child30" />
                      <div className="frame-child31" />
                    </div>
                  </div>
                  <div className="referal-text14">
                    <div className="refer-friends-to14">
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
      </div>
    </div>
  );
};

export default WithdrawalFiatConfirmPay;
