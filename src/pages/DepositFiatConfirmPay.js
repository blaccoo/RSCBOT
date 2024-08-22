import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame from "../components/CoinOvervieFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./DepositFiatConfirmPay.css";

const DepositFiatConfirmPay = () => {
  return (
    <div className="deposit-fiat-confirm-pay">
      <div className="wallet-body-frame15">
        <div className="header18">
          <img className="menu-icon18" alt="" src="/menu-icon.svg" />
          <img className="notification-icon16" alt="" src="/notification.svg" />
          <div className="connect-wallet18">
            <b className="connect18">Connect</b>
          </div>
          <img className="profile-icon18" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="You are paying "
          propWidth="93px"
          herbetpere="@herbetpere"
          propWidth1="81px"
          youArePayingHeight="23px"
          youArePayingAlignSelf="unset"
        />
        <div className="coin-overview-and-transactions14">
          <div className="timing-for-creation5">
            <div className="instruction-frame15">
              <div className="note-do-not-container">Make Payment within</div>
            </div>
            <div className="instruction-frame15">
              <div className="note-do-not-container">15:00</div>
            </div>
          </div>
          <div className="instruction-frame17">
            <div className="note-do-not-container">
              <span>
                <span>Note:</span>
              </span>
              <span className="do-not-click-on-confirm-paymen">
                <span>{` Do not click on confirm payment if you have not yet made payment. `}</span>
                <span>
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <CoinOvervieFrame oleaseEnsureYouPayFastIAppro="Please ensure you pay fast. I approve instantly when i get alert dont waste time here.Dont withold my coin or i report your account and you are get kicked out" />
          <div className="cancel-order4">
            <b className="cancel-deposit1">Cancel Deposit</b>
          </div>
          <div className="footer-start-frame12">
            <div className="footer-frame12">
              <div className="home-referral12">
                <div className="referal-frame12">
                  <div className="referal-link-frame12">
                    <div className="httpsrisingcoinxyzrefant12">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent13">
                      <div className="frame-child24" />
                      <div className="frame-child25" />
                    </div>
                  </div>
                  <div className="referal-text12">
                    <div className="refer-friends-to12">
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

export default DepositFiatConfirmPay;
