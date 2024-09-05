import SendAndRecieveFrame4 from "../components/SendAndRecieveFrame4";
import BuyerSellerChat from "../components/BuyerSellerChat";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PBuyPaymentConfirmation.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PBuyPaymentConfirmation = () => {
  return (
    <div className="p2p-buy-payment-confirmation1">
      <Header/>
      <div className="wallet-body-frame28">
       <Divider/>
        <SendAndRecieveFrame4
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="You are paying "
          propWidth="93px"
        />
        <div className="coin-overview-and-transactions20">
          <div className="timing-for-creation9">
            <div className="instruction-frame28">
              <div className="noteif-seller-does-container">
                Seller to confirm alert within
              </div>
            </div>
            <div className="instruction-frame28">
              <div className="noteif-seller-does-container">15:00</div>
            </div>
          </div>
          <div className="instruction-frame30">
            <div className="noteif-seller-does-container">
              <span>
                <span>
                  Note:If Seller does not Confirm within stipulated time
                  consider Appeal or Report.
                </span>
                <span className="span5">{` `}</span>
              </span>
              <span className="span5">
                <span>
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <div className="coin-overvie-frame11">
            <div className="all-orders-frame11">
              <div className="order-frame20">
                <div className="price23">
                  <div className="enter-amount6">
                    <b className="make-payment">Make Payment</b>
                  </div>
                </div>
                <div className="amounts-of-order22">
                  <div className="bank3">Bank</div>
                  <div className="bank3">Opay</div>
                </div>
                <div className="payment-method52" />
                <div className="payment-method53">
                  <div className="account-number2">Account Number</div>
                  <div className="div118">7038788133</div>
                  <img
                    className="solarcopy-outline-icon4"
                    alt=""
                    src="/solarcopyoutline1.svg"
                  />
                </div>
                <div className="orders-date-and-ref32" />
                <div className="orders-date-and-ref33">
                  <div className="amount4">Amount</div>
                  <div className="div119">5000</div>
                  <div className="bank3">NGN</div>
                </div>
              </div>
            </div>
            <BuyerSellerChat
              propHeight="375px"
              propTop="59.5px"
              propLeft="0px"
              propTop1="calc(50% - 188px)"
              propTop2="0px"
              profile="/profile2.svg"
              profile1="/profile4.svg"
              propTop3="calc(50% + 156.5px)"
            />
            <div className="button-frame6">
              <div className="paid-button3">
                <b className="paid1">Paid</b>
              </div>
            </div>
          </div>
          <div className="cancel-and-report2">
            <div className="cancel-order10">
              <b className="paid1">Cancel Buy Order</b>
            </div>
            <div className="cancel-order11">
              <b className="paid1">Raise Dispute</b>
            </div>
          </div>
        </div>
        <SocialMediaHandle group182="/group-182.svg" />
    <FooterSection/>
      </div>
    </div>
  );
};

export default P2PBuyPaymentConfirmation;
