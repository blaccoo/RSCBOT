import SendAndRecieveFrame1 from "../components/SendAndRecieveFrame1";
import CurrentBalanceFrame2 from "../components/CurrentBalanceFrame2";
import TransactionAndOverviewFram from "../components/TransactionAndOverviewFram";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PPayInfoAndTrade.css";

const P2PPayInfoAndTrade = () => {
  return (
    <div className="p2p-pay-info-and-trade">
      <div className="wallet-body-frame6">
        <div className="header8">
          <img className="menu-icon8" alt="" src="/menu-icon.svg" />
          <img className="notification-icon8" alt="" src="/notification.svg" />
          <div className="connect-wallet8">
            <b className="connect8">Connect</b>
          </div>
          <img className="profile-icon8" alt="" src="/profile.svg" />
        </div>
        <SendAndRecieveFrame1
          mingcuteuser4Fill="/mingcuteuser4fill.svg"
          trade="@username"
        />
        <CurrentBalanceFrame2 />
        <div className="coin-overview-and-transactions5">
          <div className="coin-overvie-frame3">
            <div className="coin-frame1">
              <TransactionAndOverviewFram
                myBuyOrder="My Buy Order"
                mySellOrder="My Sell Order"
              />
              <div className="line-frame1" />
              <div className="coin-frame-item" />
            </div>
            <div className="all-orders-frame4">
              <div className="order-frame7">
                <div className="order-status4">
                  <div className="listed">LISTED</div>
                  <div className="remove-wrapper">
                    <div className="listed">REMOVE</div>
                  </div>
                </div>
                <div className="amounts-of-order7">
                  <div className="buy4">Buy:</div>
                  <div className="div52">1009.89</div>
                  <div className="div52">USDT</div>
                  <div className="div52">For</div>
                  <div className="div52">1597.76</div>
                  <div className="div52">NGN</div>
                </div>
                <div className="payment-method20">
                  <div className="listed">Payment Method:</div>
                  <div className="wallet6">Wallet</div>
                </div>
                <div className="orders-date-and-ref12">
                  <div className="th-march4">{`27th : March : 2024 `}</div>
                  <div className="listed">{`1:32 PM `}</div>
                  <div className="ref4">Ref:</div>
                  <div className="listed">#167-UY93475J73</div>
                </div>
              </div>
              <div className="order-frame8">
                <div className="order-status5">
                  <div className="listed">REMOVED</div>
                </div>
                <div className="amounts-of-order7">
                  <div className="buy4">Sell:</div>
                  <div className="div52">1009.89</div>
                  <div className="div52">USDT</div>
                  <div className="div52">For</div>
                  <div className="div52">1597.76</div>
                  <div className="div52">NGN</div>
                </div>
                <div className="payment-method20">
                  <div className="listed">Payment Method:</div>
                  <div className="wallet6">Wallet</div>
                </div>
                <div className="orders-date-and-ref12">
                  <div className="th-march4">{`27th : March : 2024 `}</div>
                  <div className="listed">{`1:32 PM `}</div>
                  <div className="ref4">Ref:</div>
                  <div className="listed">#167-UY93475J73</div>
                </div>
              </div>
              <div className="order-frame7">
                <div className="order-status5">
                  <div className="listed">PENDING</div>
                </div>
                <div className="amounts-of-order7">
                  <div className="buy4">Sell:</div>
                  <div className="div52">1009.89</div>
                  <div className="div52">USDT</div>
                  <div className="div52">For</div>
                  <div className="div52">1597.76</div>
                  <div className="div52">NGN</div>
                </div>
                <div className="payment-method20">
                  <div className="listed">Payment Method:</div>
                  <div className="wallet6">Wallet</div>
                </div>
                <div className="orders-date-and-ref12">
                  <div className="th-march4">{`27th : March : 2024 `}</div>
                  <div className="listed">{`1:32 PM `}</div>
                  <div className="ref4">Ref:</div>
                  <div className="listed">#167-UY93475J73</div>
                </div>
              </div>
              <div className="order-frame7">
                <div className="order-status5">
                  <div className="listed">COMPLETED</div>
                </div>
                <div className="amounts-of-order7">
                  <div className="buy4">Buy:</div>
                  <div className="div52">1009.89</div>
                  <div className="div52">USDT</div>
                  <div className="div52">For</div>
                  <div className="div52">1597.76</div>
                  <div className="div52">NGN</div>
                </div>
                <div className="payment-method20">
                  <div className="listed">Payment Method:</div>
                  <div className="wallet6">Wallet</div>
                </div>
                <div className="orders-date-and-ref12">
                  <div className="th-march4">{`27th : March : 2024 `}</div>
                  <div className="listed">{`1:32 PM `}</div>
                  <div className="ref4">Ref:</div>
                  <div className="listed">#167-UY93475J73</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-start-frame5">
            <div className="footer-frame5">
              <div className="home-referral5">
                <div className="referal-frame5">
                  <div className="referal-link-frame5">
                    <div className="httpsrisingcoinxyzrefant5">
                      https://risingcoin.xyz?ref=anthonyeyo
                    </div>
                    <div className="rectangle-parent6">
                      <div className="frame-child10" />
                      <div className="frame-child11" />
                    </div>
                  </div>
                  <div className="referal-text5">
                    <div className="refer-friends-to5">
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

export default P2PPayInfoAndTrade;
