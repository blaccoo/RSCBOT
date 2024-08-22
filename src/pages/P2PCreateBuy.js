import SendAndRecieveFrame from "../components/SendAndRecieveFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PCreateBuy.css";

const P2PCreateBuy = () => {
  return (
    <div className="p2p-create-buy">
      <div className="wallet-body-frame">
        <div className="header">
          <img className="menu-icon" alt="" src="/menu-icon.svg" />
          <img className="notification-icon" alt="" src="/notification.svg" />
          <div className="connect-wallet">
            <b className="connect">Connect</b>
          </div>
          <img className="profile-icon" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          youArePaying="You are paying "
          herbetpere="@herbetpere"
        />
        <div className="coin-overview-and-transactions">
          <div className="timing-for-creation">
            <div className="instruction-frame">
              <div className="create-order-within">{`Create Order within `}</div>
            </div>
            <div className="instruction-frame">
              <div className="create-order-within">3:00</div>
            </div>
          </div>
          <div className="instruction-frame2">
            <div className="create-order-within">
              <span>
                <span>{`Note: `}</span>
              </span>
              <span className="seller-must-confirm-the-order">
                <span>{`Seller must confirm the order within 10 minutes after you create it, for you to be able to process for payment. `}</span>
                <span className="do-not-answer">
                  Do not answer or perform trade outside the platform its likely
                  to be a scam
                </span>
              </span>
            </div>
          </div>
          <div className="coin-overvie-frame">
            <div className="all-orders-frame">
              <div className="order-frame">
                <div className="price">
                  <div className="enter-amount">
                    <b className="b">5000</b>
                  </div>
                  <b className="ngn">NGN</b>
                  <b className="for">For</b>
                </div>
                <div className="amounts-of-order">
                  <div className="usdt">3.706</div>
                  <div className="usdt">USDT</div>
                </div>
                <div className="payment-method" />
                <div className="payment-method1">
                  <div className="usdt">Payment Method</div>
                  <div className="bank">Bank</div>
                </div>
                <div className="orders-date-and-ref" />
                <div className="orders-date-and-ref1">
                  <div className="payment-time">Payment Time</div>
                  <div className="div2">15</div>
                  <div className="usdt">Min</div>
                </div>
              </div>
            </div>
            <div className="sellers-comment-parent">
              <b className="sellers-comment">Seller’s Comment</b>
              <div className="please-ensure-you">
                Please ensure you pay fast. I approve instantly when i get alert
                dont waste time here.Dont withold my coin or i rport youn and
                you are get kicked out
              </div>
            </div>
            <div className="creat-button-parent">
              <div className="creat-button">
                <b className="create">Create</b>
              </div>
              <div className="cancel-order">
                <b className="create">Cancel Buy Order</b>
              </div>
            </div>
          </div>
          <div className="footer-start-frame">
            <div className="footer-frame">
              <div className="home-referral">
                <div className="referal-frame">
                  <div className="referal-link-frame">
                    <div className="httpsrisingcoinxyzrefant">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <div className="frame-item" />
                    </div>
                  </div>
                  <div className="referal-text">
                    <div className="refer-friends-to">
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

export default P2PCreateBuy;
