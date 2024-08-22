import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame1 from "../components/CoinOvervieFrame1";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PEnterBuy.css";

const P2PEnterBuy = () => {
  return (
    <div className="p2p-enter-buy">
      <div className="wallet-body-frame20">
        <div className="header23">
          <img className="menu-icon23" alt="" src="/menu-icon.svg" />
          <img className="notification-icon21" alt="" src="/notification.svg" />
          <div className="connect-wallet23">
            <b className="connect23">Connect</b>
          </div>
          <img className="profile-icon23" alt="" src="/profile.svg" />
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
        <div className="coin-overview-and-transactions15">
          <div className="instruction-frame18">
            <div className="enter-amount-of">
              Enter amount of either the currency you want to pay the sell or
              the amount of crypto you want to buy and click on buy to processe
              creating your order
            </div>
          </div>
          <CoinOvervieFrame1
            buyMax="Buy Max"
            buy="Buy"
            cancelBuyOrder="Cancel Buy Order"
          />
          <div className="footer-start-frame13">
            <div className="footer-frame13">
              <div className="home-referral13">
                <div className="referal-frame13">
                  <div className="referal-link-frame13">
                    <div className="httpsrisingcoinxyzrefant13">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent16">
                      <div className="frame-child28" />
                      <div className="frame-child29" />
                    </div>
                  </div>
                  <div className="referal-text13">
                    <div className="refer-friends-to13">
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

export default P2PEnterBuy;
