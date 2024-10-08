import SendAndRecieveFrame4 from "../components/SendAndRecieveFrame4";
import AllOrdersFrame from "../components/AllOrdersFrame";
import BuyerSellerChat from "../components/BuyerSellerChat";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./WithdrawFaitPaymentConfirmation.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const WithdrawFaitPaymentConfirmation = () => {
  return (
    <div className="withdraw-fait-payment-confirma">
      <Header/>
      <div className="wallet-body-frame22">
       <Divider/>
        <SendAndRecieveFrame4
          mingcuteuser4Fill="/mingcuteuser4fill1.svg"
          youArePaying="You are Receiving"
          propWidth="118px"
        />
        <div className="coin-overview-and-transactions16">
          <div className="timing-for-creation6">
            <div className="instruction-frame19">
              <div className="merchant-to-pay">Merchant to Pay within</div>
            </div>
            <div className="instruction-frame19">
              <div className="merchant-to-pay">15:00</div>
            </div>
          </div>
          <div className="instruction-frame21">
            <div className="noteif-you-did-container">
              <span>
                <span>
                  Note:If you did not receive payment within stipulated time
                  consider Appeal or Report.
                </span>
                <span className="span4">{` `}</span>
              </span>
              <span className="span4">
                <span>
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <div className="coin-overvie-frame9">
            <AllOrdersFrame
              propHeight="160px"
              propHeight1="29px"
              makePayment="Make Payment"
              propWidth="129px"
              propDisplay="inline-block"
              propHeight2="4px"
              prop="9400"
            />
            <BuyerSellerChat
              propHeight="375px"
              propTop="59.5px"
              propLeft="0px"
              propTop1="calc(50% - 188px)"
              propTop2="0px"
              profile="/profile5.svg"
              profile1="/profile6.svg"
              propTop3="calc(50% + 156.5px)"
            />
            <div className="button-frame5">
              <div className="paid-button2">
                <b className="merchant-to-pay">Confirm Recipient</b>
              </div>
            </div>
          </div>
          <div className="cancel-and-report1">
            <div className="cancel-order5">
              <b className="merchant-to-pay">Cancel Deposit</b>
            </div>
            <div className="cancel-order6">
              <b className="merchant-to-pay">Raise Dispute</b>
            </div>
          </div>
        </div>
        <SocialMediaHandle group182="/group-1821.svg" />
   <FooterSection/>
      </div>
    </div>
  );
};

export default WithdrawFaitPaymentConfirmation;
