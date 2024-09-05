import ConfirmationFrame from "../components/ConfirmationFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PSellerPaymentConfirmation1.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PSellerPaymentConfirmation1 = () => {
  return (
    <div className="p2p-seller-payment-confirmatio1">
      <Header/>
      <div className="wallet-body-frame25">
     <Divider/>
        <div className="send-and-recieve-frame6">
          <div className="withdraw1">
            <div className="mingcuteuser-4-fill">
              <img
                className="group-icon1"
                alt=""
                src="/mingcuteuser4fill.svg"
              />
            </div>
            <div className="buyer">Buyer</div>
            <div className="herbetpere6">@herbetpere</div>
          </div>
        </div>
        <div className="hgt65yt63">#908hgt65Yt6</div>
        <div className="coin-overview-and-transactions18">
          <ConfirmationFrame
            propWidth="370px"
            frame="/mark.svg"
            propWidth1="115.4px"
            propOverflow="unset"
            propWidth2="370px"
            paymentConfirmed="You Confirmed Payment"
            youHaveConfirmedRecipient="From the buyer"
            yourWithdrawalWasSuccessful="Your Coin Sales was successful "
          />
          <div className="frame19">
            <div className="frame19">
              <div className="close15">
                <b className="back-to-wallet5">Back to Wallet</b>
              </div>
            </div>
          </div>
          <FooterStartFrame
            propHeight="193px"
            propTop="calc(50% - 49.5px)"
            propHeight1="unset"
            propLeft="calc(50% - 149px)"
            propPadding="unset"
          />
        </div>
        <SocialMediaHandle group182="/group-1822.svg" />
      <FooterSection/>
        <img
          className="solarcopy-outline-icon3"
          alt=""
          src="/solarcopyoutline.svg"
        />
      </div>
    </div>
  );
};

export default P2PSellerPaymentConfirmation1;
