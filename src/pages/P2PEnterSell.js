import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame1 from "../components/CoinOvervieFrame1";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PEnterSell.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PEnterSell = () => {
  return (
    <div className="p2p-enter-sell">
      <Header/>
      <div className="wallet-body-frame30">
      <Divider/>
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
          <FooterStartFrame
            propHeight="193px"
            propTop="calc(50% - 53.5px)"
            propHeight1="40px"
            propLeft="calc(50% - 149px)"
            propPadding="unset"
          />
        </div>
        <SocialMediaHandle group182="/group-182.svg" />
      <FooterSection/>
      </div>
    </div>
  );
};

export default P2PEnterSell;
