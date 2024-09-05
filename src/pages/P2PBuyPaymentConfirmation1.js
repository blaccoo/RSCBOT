import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import ConfirmationFrame from "../components/ConfirmationFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PBuyPaymentConfirmation1.css";
import Divider from "../components/Divider";
import FooterSection from "../components/FooterSection";

const P2PBuyPaymentConfirmation1 = () => {
  return (
    <div className="p2p-buy-payment-confirmation">
      <Header/>
      <div className="wallet-body-frame5">
     <Divider/>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill1.svg"
          youArePaying="Seller"
          propWidth="36px"
          herbetpere="@herbetpere"
          propWidth1="81px"
          youArePayingHeight="unset"
          youArePayingAlignSelf="stretch"
        />
        <div className="hgt65yt61">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions4">
          <ConfirmationFrame
            propWidth="370px"
            frame="/mark.svg"
            propWidth1="115.4px"
            propOverflow="unset"
            propWidth2="370px"
            paymentConfirmed="Payment Confirmed"
            youHaveConfirmedRecipient="The Seller has confirmed your Payment"
            yourWithdrawalWasSuccessful="Your Purchase was successful Check your Wallet"
          />
          <div className="frame8">
            <div className="frame8">
              <div className="close5">
                <b className="back-to-wallet1">Back to Wallet</b>
              </div>
            </div>
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
   <FooterSection />
        <img
          className="solarcopy-outline-icon1"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default P2PBuyPaymentConfirmation1;
