import SendAndRecieveFrame3 from "../components/SendAndRecieveFrame3";
import BuyerSellerChat from "../components/BuyerSellerChat";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PSellerPaymentConfirmation.css";

const P2PSellerPaymentConfirmation = () => {
  return (
    <div className="p2p-seller-payment-confirmatio">
      <div className="wallet-body-frame13">
        <div className="header16">
          <div className="menu-icon16">
            <img className="vector-icon4" alt="" src="/vector.svg" />
          </div>
          <div className="notification1">
            <div className="notification-frame1" />
            <img className="vector-icon5" alt="" src="/vector1.svg" />
          </div>
          <div className="connect-wallet16">
            <b className="connect16">Connect</b>
          </div>
          <img className="profile-icon16" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame3 />
        <div className="coin-overview-and-transactions12">
          <div className="timing-for-creation4">
            <div className="instruction-frame12">
              <div className="seller-to-confirm">
                Seller to confirm alert within
              </div>
            </div>
            <div className="instruction-frame12">
              <div className="seller-to-confirm">15:00</div>
            </div>
          </div>
          <div className="instruction-frame14">
            <div className="seller-to-confirm">
              <span>
                <span>
                  Note:If Buyer does not make payment within stipulated time
                  consider Raise Dispute.
                </span>
                <span className="span2">{` `}</span>
              </span>
              <span className="span2">
                <span>
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <div className="coin-overvie-frame7">
            <div className="all-orders-frame8">
              <div className="order-frame14">
                <div className="price21">
                  <div className="enter-amount4">
                    <b className="buyer-is-making1">
                      Buyer is Making Payment to
                    </b>
                  </div>
                </div>
                <div className="amounts-of-order15">
                  <div className="bank2">Bank</div>
                  <div className="bank2">Palmpay</div>
                </div>
                <div className="amounts-of-order15">
                  <div className="bank2">Name</div>
                  <div className="bank2">Nsisong Eyo</div>
                </div>
                <div className="payment-method39" />
                <div className="payment-method40">
                  <div className="bank2">Account Number</div>
                  <div className="div80">7038788133</div>
                </div>
                <div className="orders-date-and-ref24" />
                <div className="orders-date-and-ref25">
                  <div className="amount3">Amount</div>
                  <div className="div81">5000</div>
                  <div className="bank2">NGN</div>
                </div>
              </div>
            </div>
            <BuyerSellerChat
              propHeight="370px"
              propTop="calc(50% - 125.5px)"
              propLeft="calc(50% - 180px)"
              propTop1="calc(50% - 188.5px)"
              propTop2="4px"
              profile="/profile2.svg"
              profile1="/profile4.svg"
              propTop3="calc(50% + 156px)"
            />
            <div className="button-frame3">
              <div className="paid-button1">
                <b className="buyer-is-making1">Confirm Recipient</b>
              </div>
            </div>
          </div>
          <b className="raised-dispute">Raised Dispute</b>
        </div>
        <SocialMediaHandle group182="/group-182.svg" />
        <BottomTabs
          propHeight="unset"
          walletIcon="/wallet-icon.svg"
          wallet="Wallet"
          fluenthome48Filled="/fluenthome48filled.svg"
          home="Home"
          tradeIcon="/trade-icon.svg"
          trade="Trade"
        />
      </div>
    </div>
  );
};

export default P2PSellerPaymentConfirmation;
