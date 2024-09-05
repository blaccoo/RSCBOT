import SendAndRecieveFrame1 from "../components/SendAndRecieveFrame1";
import CurrentBalanceFrame2 from "../components/CurrentBalanceFrame2";
import TransactionAndOverviewFram from "../components/TransactionAndOverviewFram";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PPayInfoAndTrade.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PPayInfoAndTrade = () => {
  return (
    <div className="p2p-pay-info-and-trade">
      <Header/>
      <div className="wallet-body-frame6">
      <Divider/>
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

export default P2PPayInfoAndTrade;
