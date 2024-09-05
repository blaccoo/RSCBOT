import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PSellerConfirmRecipient.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PSellerConfirmRecipient = () => {
  return (
    <div className="p2p-seller-confirm-recipient">
      <Header/>
      <div className="wallet-body-frame9">
     <Divider/>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="@herbetpere"
          propWidth="81px"
          herbetpere="Is paying you"
          propWidth1="93px"
          youArePayingHeight="24px"
          youArePayingAlignSelf="unset"
        />
        <div className="coin-overview-and-transactions8">
          <div className="timing-for-creation3">
            <div className="instruction-frame9">
              <div className="making-payment-within">Making Payment within</div>
            </div>
            <div className="instruction-frame9">
              <div className="making-payment-within">15:00</div>
            </div>
          </div>
          <div className="instruction-frame11">
            <div className="making-payment-within">
              <span>
                <span className="note-buyer-has">
                  Note Buyer has accepted your Sell order if you do not received
                  payment within stipulated time, Please Report.
                </span>
                <span className="span1">{` `}</span>
              </span>
              <span className="span1">
                <span>
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <div className="coin-overvie-frame5">
            <div className="all-orders-frame5">
              <div className="order-frame11">
                <div className="price18">
                  <div className="enter-amount3">
                    <b className="buyer-is-making">
                      Buyer is Making Payment to
                    </b>
                  </div>
                </div>
                <div className="amounts-of-order11">
                  <div className="palmpay">Bank</div>
                  <div className="palmpay">Palmpay</div>
                </div>
                <div className="amounts-of-order11">
                  <div className="palmpay">Name</div>
                  <div className="palmpay">Nsisong Eyo</div>
                </div>
                <div className="payment-method28" />
                <div className="payment-method29">
                  <div className="palmpay">Account Number</div>
                  <div className="div63">7038788133</div>
                </div>
                <div className="orders-date-and-ref16" />
                <div className="orders-date-and-ref17">
                  <div className="amount2">Amount</div>
                  <div className="div64">5000</div>
                  <div className="palmpay">NGN</div>
                </div>
              </div>
            </div>
            <div className="space2" />
            <div className="confirm-button-frame">
              <div className="creat-button1">
                <b className="buyer-is-making">Confirm Recipient</b>
              </div>
            </div>
            <b className="chat-buyer">Chat Buyer</b>
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

export default P2PSellerConfirmRecipient;
