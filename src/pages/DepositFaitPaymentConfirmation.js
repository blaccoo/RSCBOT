import SendAndRecieveFrame4 from "../components/SendAndRecieveFrame4";
import AllOrdersFrame from "../components/AllOrdersFrame";
import BuyerSellerChat from "../components/BuyerSellerChat";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./DepositFaitPaymentConfirmation.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const DepositFaitPaymentConfirmation = () => {
  return (
    <div className="deposit-fait-payment-confirmat">
      <Header/>
      <div className="wallet-body-frame7">
     <Divider/>
        <SendAndRecieveFrame4
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="You are paying "
        />
        <div className="coin-overview-and-transactions6">
          <div className="timing-for-creation1">
            <div className="instruction-frame3">
              <div className="merchant-to-confirm">
                Merchant to confirm alert within
              </div>
            </div>
            <div className="instruction-frame3">
              <div className="merchant-to-confirm">15:00</div>
            </div>
          </div>
          <div className="instruction-frame5">
            <div className="noteif-merchant-does-container">
              <span>
                <span>
                  Note:If Merchant does not Confirm within stipulated time
                  consider Appeal or Report.
                </span>
                <span className="span">{` `}</span>
              </span>
              <span className="span">
                <span>
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <div className="coin-overvie-frame4">
            <AllOrdersFrame makePayment="Make Payment" prop="5000" />
            <BuyerSellerChat profile="/profile5.svg" profile1="/profile6.svg" />
            <div className="button-frame2">
              <div className="paid-button">
                <b className="merchant-to-confirm">Paid</b>
              </div>
            </div>
          </div>
          <div className="cancel-and-report">
            <div className="cancel-order1">
              <b className="merchant-to-confirm">Cancel Deposit</b>
            </div>
            <div className="cancel-order2">
              <b className="merchant-to-confirm">Raise Dispute</b>
            </div>
          </div>
        </div>
        <SocialMediaHandle group182="/group-1821.svg" />
     <FooterSection/>
      </div>
    </div>
  );
};

export default DepositFaitPaymentConfirmation;
