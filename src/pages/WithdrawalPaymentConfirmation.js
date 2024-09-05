import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import ConfirmationFrame from "../components/ConfirmationFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./WithdrawalPaymentConfirmation.css";
import Header from "../components/Header";
import Divider from "../components/Divider";
import FooterSection from "../components/FooterSection";

const WithdrawalPaymentConfirmation = () => {
  return (
    <div className="withdrawal-payment-confirmatio">
        <Header/>
      <div className="wallet-body-frame2">
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
        <div className="hgt65yt6">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions1">
          <ConfirmationFrame
            frame="/frame.svg"
            paymentConfirmed="Payment Confirmed"
            youHaveConfirmedRecipient="You have confirmed Recipient"
            yourWithdrawalWasSuccessful="Your Withdrawal was successful "
          />
          <div className="frame2">
            <div className="frame2">
              <div className="close1">
                <b className="back-to-wallet">Back to Wallet</b>
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
          className="solarcopy-outline-icon"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default WithdrawalPaymentConfirmation;
