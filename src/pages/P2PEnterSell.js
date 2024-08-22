import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame1 from "../components/CoinOvervieFrame1";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PEnterSell.css";

const P2PEnterSell = () => {
  return (
    <div className="p2p-enter-sell">
      <div className="wallet-body-frame30">
        <div className="header35">
          <img className="menu-icon34" alt="" src="/menu-icon.svg" />
          <img className="notification-icon31" alt="" src="/notification.svg" />
          <div className="connect-wallet35">
            <b className="connect35">Connect</b>
          </div>
          <img className="profile-icon35" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="@herbetpere"
          propWidth="81px"
          herbetpere="Is paying you"
          propWidth1="93px"
          youArePayingHeight="24px"
          youArePayingAlignSelf="unset"
        />
        <div className="coin-overview-and-transactions21">
          <div className="instruction-frame31">
            <div className="enter-amount-of1">
              Enter amount of either the currency you want to sell or the amount
              of crypto you want to sell and click on sell to processed creating
              your order
            </div>
          </div>
          <CoinOvervieFrame1
            buyMax="Sell Max"
            buy="Sell"
            cancelBuyOrder="Cancel Sell Order"
          />
          <div className="footer-start-frame18">
            <div className="footer-frame18">
              <div className="home-referral18">
                <div className="referal-frame18">
                  <div className="referal-link-frame18">
                    <div className="httpsrisingcoinxyzrefant18">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent21">
                      <div className="frame-child38" />
                      <div className="frame-child39" />
                    </div>
                  </div>
                  <div className="referal-text18">
                    <div className="refer-friends-to18">
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

export default P2PEnterSell;
