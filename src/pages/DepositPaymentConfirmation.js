import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import ConfirmationFrame from "../components/ConfirmationFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./DepositPaymentConfirmation.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const DepositPaymentConfirmation = () => {
  return (
    <div className="deposit-payment-confirmation">
      <Header/>
      <div className="wallet-body-frame10">
      <Divider/>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="Merchant"
          propWidth="61px"
          herbetpere="@herbetpere"
          propWidth1="81px"
          youArePayingHeight="unset"
          youArePayingAlignSelf="stretch"
        />
        <div className="hgt65yt62">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions9">
          <ConfirmationFrame
            propWidth="370px"
            frame="/mark.svg"
            propWidth1="115.4px"
            propOverflow="unset"
            propWidth2="370px"
            paymentConfirmed="Payment Confirmed"
            youHaveConfirmedRecipient="The Merchant has confirmed your Payment"
            yourWithdrawalWasSuccessful="Your Deposit was successful Check your Wallet"
          />
          <div className="frame11">
            <div className="frame11">
              <div className="close8">
                <b className="back-to-wallet3">Back to Wallet</b>
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
        <SocialMediaHandle group182="/group-1821.svg" />
  <FooterSection/>
        <img
          className="solarcopy-outline-icon2"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default DepositPaymentConfirmation;
