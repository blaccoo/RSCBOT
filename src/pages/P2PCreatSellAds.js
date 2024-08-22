import CreatAdsTitleFrame from "../components/CreatAdsTitleFrame";
import AdsFrame1 from "../components/AdsFrame1";
import AdsVolumeFrame from "../components/AdsVolumeFrame";
import MinOrder from "../components/MinOrder";
import CoinOverviewAndTransactions from "../components/CoinOverviewAndTransactions";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PCreatSellAds.css";

const P2PCreatSellAds = () => {
  return (
    <div className="p2p-creat-sell-ads">
      <div className="wallet-body-frame19">
        <div className="header22">
          <img className="menu-icon22" alt="" src="/menu-icon.svg" />
          <img className="notification-icon20" alt="" src="/notification.svg" />
          <div className="connect-wallet22">
            <b className="connect22">Connect</b>
          </div>
          <img className="profile-icon22" alt="" src="/profile.svg" />
        </div>
        <CreatAdsTitleFrame />
        <div className="method-chose-to-create-ads1">
          <div className="ads-frame2">
            <div className="i-want-to-group">
              <div className="i-want-to1">I want to</div>
              <div className="buy11">Buy</div>
              <div className="sell10">Sell</div>
            </div>
            <div className="sell-crypto-parent">
              <div className="sell-crypto">Sell Crypto</div>
              <div className="usdt28">USDT</div>
            </div>
            <div className="sell-crypto-parent">
              <div className="sell-crypto">In Exchange For Fiat Currency</div>
              <div className="ngn32">NGN</div>
            </div>
            <div className="sell-crypto-parent">
              <div className="sell-crypto">Price Type</div>
              <div className="usdt28">Float</div>
            </div>
          </div>
          <AdsFrame1 />
          <div className="ads-price-frame1">
            <div className="notification-frame5">
              <div className="market-price1">Market price:</div>
              <div className="n2">N</div>
              <div className="div99">1,421.39</div>
              <div className="per2">per</div>
              <div className="per2">1</div>
              <div className="div99">USDT</div>
            </div>
            <div className="notification-frame5">
              <div className="per2">Your Ad price:</div>
              <div className="per2">N</div>
              <div className="div99">0.00</div>
              <div className="per2">per</div>
              <div className="per2">1</div>
              <div className="div99">USDT</div>
            </div>
          </div>
          <AdsVolumeFrame volumeToBuy="Volume to sell" />
          <div className="your-balance2">
            <div className="your-balance-child">
              <div className="frame-parent7">
                <div className="your-balance-container">
                  <div className="your-balance3">Your Balance:</div>
                </div>
                <div className="your-balance-container">
                  <div className="your-balance3">45.007</div>
                </div>
                <div className="your-balance-container">
                  <div className="your-balance3">USDT</div>
                </div>
                <div className="max-container">
                  <div className="your-balance3">Max</div>
                </div>
              </div>
            </div>
          </div>
          <MinOrder prop="1600" uSDT="NGN" />
          <div className="ads-frame3">
            <div className="notification-frame7">
              <div className="div99">Payment Timeout</div>
              <div className="minutes3">15 minutes</div>
            </div>
          </div>
          <div className="frame16">
            <div className="confirm-button17">
              <div className="close12">
                <b className="continue3">Continue</b>
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

export default P2PCreatSellAds;
