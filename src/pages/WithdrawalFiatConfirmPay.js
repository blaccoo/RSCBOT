import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import CoinOvervieFrame3 from "../components/CoinOvervieFrame3";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";

import "./WithdrawalFiatConfirmPay.css";
import Divider from "../components/Divider";
import FooterSection from "../components/FooterSection";
import Header from "../components/Header";

const WithdrawalFiatConfirmPay = () => {
  return (
    <div className="withdrawal-fiat-confirm-pay">
      <Header/>
      <div className="wallet-body-frame24">
        <Divider/>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill1.svg"
          youArePaying="You are Receiving "
          propWidth="118px"
          herbetpere="@herbetpere"
          propWidth1="81px"
          youArePayingHeight="23px"
          youArePayingAlignSelf="unset"
        />
        <div className="coin-overview-and-transactions17">
          <div className="timing-for-creation7">
            <div className="instruction-frame22">
              <div className="merchant-to-pay1">Merchant to Pay within</div>
            </div>
            <div className="instruction-frame22">
              <div className="merchant-to-pay1">15:00</div>
            </div>
          </div>
          <div className="instruction-frame24">
            <div className="merchant-to-pay1">
              <span>
                <span>Note:</span>
              </span>
              <span className="do-not-click-on-confirm-receiv">
                <span>{` Do not click on confirm Receive if you have not yet seen payment in your bank account. `}</span>
                <span className="do-not-answer1">
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <CoinOvervieFrame3 />
          <div className="cancel-order7">
            <b className="chat-merchant">Chat Merchant</b>
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

export default WithdrawalFiatConfirmPay;
