import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame from "../components/CoinOvervieFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./DepositFiatConfirmPay.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const DepositFiatConfirmPay = () => {
  return (
    <div className="deposit-fiat-confirm-pay">
      <Header/>
      <div className="wallet-body-frame15">
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
          <FooterStartFrame
            propHeight="193px"
            propTop="calc(50% - 53.5px)"
            propHeight1="40px"
            propLeft="calc(50% - 149px)"
            propPadding="unset"
          />
        </div>
        <SocialMediaHandle group182="/group-1821.svg" />
     <FooterSection/>
      </div>
    </div>
  );
};

export default DepositFiatConfirmPay;
