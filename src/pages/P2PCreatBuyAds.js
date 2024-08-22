import CreatAdsTitleFrame from "../components/CreatAdsTitleFrame";
import AdsFrame1 from "../components/AdsFrame1";
import AdsVolumeFrame from "../components/AdsVolumeFrame";
import MinOrder from "../components/MinOrder";
import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PCreatBuyAds.css";

const P2PCreatBuyAds = () => {
  return (
    <div className="p2p-creat-buy-ads">
      <div className="wallet-body-frame17">
        <div className="header20">
          <img className="menu-icon20" alt="" src="/menu-icon.svg" />
          <img className="notification-icon18" alt="" src="/notification.svg" />
          <div className="connect-wallet20">
            <b className="connect20">Connect</b>
          </div>
          <img className="profile-icon20" alt="" src="/profile.svg" />
        </div>
        <CreatAdsTitleFrame />
        <div className="method-chose-to-create-ads">
          <div className="ads-frame">
            <div className="i-want-to-parent">
              <div className="i-want-to">I want to</div>
              <div className="buy10">Buy</div>
              <div className="buy-crypto">Sell</div>
            </div>
            <div className="buy-crypto-parent">
              <div className="buy-crypto">Buy Crypto</div>
              <div className="float">USDT</div>
            </div>
            <div className="buy-crypto-parent">
              <div className="buy-crypto">In Exchange For Fiat Currency</div>
              <div className="ngn30">NGN</div>
            </div>
            <div className="buy-crypto-parent">
              <div className="buy-crypto">Price Type</div>
              <div className="float">Float</div>
            </div>
          </div>
          <AdsFrame1 />
          <div className="ads-price-frame">
            <div className="notification-frame2">
              <div className="market-price">Market price:</div>
              <div className="n">N</div>
              <div className="payment-timeout">1,421.39</div>
              <div className="per">per</div>
              <div className="per">1</div>
              <div className="payment-timeout">USDT</div>
            </div>
            <div className="notification-frame2">
              <div className="per">Your Ad price:</div>
              <div className="per">N</div>
              <div className="payment-timeout">0.00</div>
              <div className="per">per</div>
              <div className="per">1</div>
              <div className="payment-timeout">USDT</div>
            </div>
          </div>
          <AdsVolumeFrame volumeToBuy="Volume to buy" />
          <div className="your-balance">
            <div className="your-balance-inner">
              <div className="frame-parent3">
                <div className="your-balance-wrapper">
                  <div className="max">Your Balance:</div>
                </div>
                <div className="your-balance-wrapper">
                  <div className="max">45,000</div>
                </div>
                <div className="your-balance-wrapper">
                  <div className="max">NGN</div>
                </div>
                <div className="max-wrapper">
                  <div className="max">Max</div>
                </div>
              </div>
            </div>
          </div>
          <MinOrder prop="2" uSDT="USDT" />
          <div className="ads-frame1">
            <div className="notification-frame4">
              <div className="payment-timeout">Payment Timeout</div>
              <div className="minutes2">15 minutes</div>
            </div>
          </div>
          <div className="frame13">
            <div className="confirm-button14">
              <div className="close10">
                <b className="continue2">Continue</b>
              </div>
            </div>
          </div>
        </div>
        <CoinOverviewAndTransactions propHeight="200px" propHeight1="173px" />
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

export default P2PCreatBuyAds;
