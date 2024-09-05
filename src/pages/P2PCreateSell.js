import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PCreateSell.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PCreateSell = () => {
  return (
    <div className="p2p-create-sell">
      <Header/>
      <div className="wallet-body-frame26">
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
        <div className="coin-overview-and-transactions19">
          <div className="timing-for-creation8">
            <div className="instruction-frame25">
              <div className="note-buyer-must-container">{`Create Order within `}</div>
            </div>
            <div className="instruction-frame25">
              <div className="note-buyer-must-container">3:00</div>
            </div>
          </div>
          <div className="instruction-frame27">
            <div className="note-buyer-must-container">
              <span className="note-buyer">
                <span>Note: Buyer</span>
              </span>
              <span className="must-confirm-the-order-within">
                <span className="note-buyer">{` must confirm the order within 10 minutes after you create it, for you to be able to proceed.  `}</span>
                <span className="do-not-answer2">
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <div className="coin-overvie-frame10">
            <div className="all-orders-frame10">
              <div className="order-frame19">
                <div className="price22">
                  <div className="enter-amount5">
                    <b className="b25">5000</b>
                  </div>
                  <b className="ngn33">NGN</b>
                  <b className="ngn33">For</b>
                </div>
                <div className="amounts-of-order21">
                  <div className="div115">3.706</div>
                  <div className="div115">USDT</div>
                </div>
                <div className="payment-method49" />
                <div className="payment-method50">
                  <div className="div115">Payment Method</div>
                  <div className="wallet22">Wallet</div>
                </div>
                <div className="orders-date-and-ref30" />
                <div className="orders-date-and-ref31">
                  <div className="payment-time7">Payment Time</div>
                  <div className="div116">15</div>
                  <div className="div115">Min</div>
                </div>
              </div>
            </div>
            <div className="coin-overvie-frame-child" />
            <div className="creat-button-group">
              <div className="creat-button2">
                <b className="cancel-sell-order">Create</b>
              </div>
              <div className="cancel-order8">
                <b className="cancel-sell-order">Cancel Sell Order</b>
              </div>
              <div className="cancel-order9" />
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
     <FooterSection/>
      </div>
    </div>
  );
};

export default P2PCreateSell;
