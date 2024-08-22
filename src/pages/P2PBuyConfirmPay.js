import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame from "../components/CoinOvervieFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PBuyConfirmPay.css";

const P2PBuyConfirmPay = () => {
  return (
    <div className="p2p-buy-confirm-pay">
      <div className="wallet-body-frame8">
        <div className="header10">
          <img className="menu-icon10" alt="" src="/menu-icon.svg" />
          <img className="notification-icon9" alt="" src="/notification.svg" />
          <div className="connect-wallet10">
            <b className="connect10">Connect</b>
          </div>
          <img className="profile-icon10" alt="" src="/profile.svg" />
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
        <div className="coin-overview-and-transactions7">
          <div className="timing-for-creation2">
            <div className="instruction-frame6">
              <div className="make-payment-within">Make Payment within</div>
            </div>
            <div className="instruction-frame6">
              <div className="make-payment-within">15:00</div>
            </div>
          </div>
          <div className="instruction-frame8">
            <div className="make-payment-within">
              <span>
                <span>
                  Note:Seller has accepted your buy order Make payment to
                  Seller.
                </span>
              </span>
              <span className="do-not-answer-or-perform-trade1">
                <span>{` `}</span>
                <span>
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <CoinOvervieFrame oleaseEnsureYouPayFastIAppro="Olease ensure you pay fast. I approve instantly when i get alert dont waste time here.Dont withold my coin or i rport youn and you are get kicked out" />
          <div className="cancel-order3">
            <b className="cancel-buy-order1">Cancel Buy Order</b>
          </div>
          <div className="footer-start-frame6">
            <div className="footer-frame6">
              <div className="home-referral6">
                <div className="referal-frame6">
                  <div className="referal-link-frame6">
                    <div className="httpsrisingcoinxyzrefant6">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent7">
                      <div className="frame-child12" />
                      <div className="frame-child13" />
                    </div>
                  </div>
                  <div className="referal-text6">
                    <div className="refer-friends-to6">
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
      </div>
    </div>
  );
};

export default P2PBuyConfirmPay;
