import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame from "../components/CoinOvervieFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PBuyConfirmPay.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PBuyConfirmPay = () => {
  return (
    <div className="p2p-buy-confirm-pay">
      <Header/>
      <div className="wallet-body-frame8">
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

export default P2PBuyConfirmPay;
