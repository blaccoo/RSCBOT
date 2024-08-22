import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PSellerConfirmRecipient.css";

const P2PSellerConfirmRecipient = () => {
  return (
    <div className="p2p-seller-confirm-recipient">
      <div className="wallet-body-frame9">
        <div className="header11">
          <img className="menu-icon11" alt="" src="/menu-icon.svg" />
          <img className="notification-icon10" alt="" src="/notification.svg" />
          <div className="connect-wallet11">
            <b className="connect11">Connect</b>
          </div>
          <img className="profile-icon11" alt="" src="/profile.svg" />
        </div>
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
          <div className="footer-start-frame7">
            <div className="footer-frame7">
              <div className="home-referral7">
                <div className="referal-frame7">
                  <div className="referal-link-frame7">
                    <div className="httpsrisingcoinxyzrefant7">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent8">
                      <div className="frame-child14" />
                      <div className="frame-child15" />
                    </div>
                  </div>
                  <div className="referal-text7">
                    <div className="refer-friends-to7">
                      Refer friends to get 3 RSC or 5% every time they mine
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default P2PSellerConfirmRecipient;
