import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame1 from "../components/CoinOvervieFrame1";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PEnterBuy.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PEnterBuy = () => {
  return (
    <div className="p2p-enter-buy">
      <Header/>
      <div className="wallet-body-frame20">
     <Divider/>
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

export default P2PEnterBuy;
