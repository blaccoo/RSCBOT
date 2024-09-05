import CurrentBalanceFrame4 from "../components/CurrentBalanceFrame4";
import TransactionAndOverviewFram from "../components/TransactionAndOverviewFram";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2P.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2P = () => {
  return (
    <div className="p2p2">
      <Header/>
      <div className="wallet-body-frame14">
      <Divider/>
        <div className="send-and-recieve-frame2">
          <div className="withdraw">
            <img
              className="tablerarrow-down-icon"
              alt=""
              src="/tablerarrowdown.svg"
            />
            <div className="buy6">Buy</div>
          </div>
          <div className="withdraw">
            <img
              className="tablerarrow-down-icon"
              alt=""
              src="/tablerarrowup.svg"
            />
            <div className="buy6">Sell</div>
          </div>
        </div>
        <CurrentBalanceFrame4 />
        <div className="coin-overview-and-transactions13">
          <div className="coin-overvie-frame8">
            <div className="coin-frame2">
              <TransactionAndOverviewFram
                myBuyOrder="My Orders"
                mySellOrder="Active"
              />
              <div className="line-frame2" />
              <div className="coin-frame-inner" />
            </div>
            <div className="all-orders-frame9">
              <div className="order-frame15">
                <div className="order-status8">
                  <div className="buy6">ONGOING</div>
                </div>
                <div className="amounts-of-order17">
                  <div className="buy7">Buy:</div>
                  <div className="div82">1009.89</div>
                  <div className="div82">USDT</div>
                  <div className="div82">For</div>
                  <div className="div82">1597.76</div>
                  <div className="div82">NGN</div>
                </div>
                <div className="payment-method41">
                  <div className="buy6">Payment Method:</div>
                  <div className="wallet11">Wallet</div>
                </div>
                <div className="orders-date-and-ref26">
                  <div className="th-march8">{`27th : March : 2024 `}</div>
                  <div className="buy6">{`1:32 PM `}</div>
                  <div className="ref8">Ref:</div>
                  <div className="buy6">#167-UY93475J73</div>
                </div>
              </div>
              <div className="order-frame16">
                <div className="order-status8">
                  <div className="buy6">CANCEL</div>
                </div>
                <div className="amounts-of-order17">
                  <div className="buy7">Sell:</div>
                  <div className="div82">1009.89</div>
                  <div className="div82">USDT</div>
                  <div className="div82">For</div>
                  <div className="div82">1597.76</div>
                  <div className="div82">NGN</div>
                </div>
                <div className="payment-method41">
                  <div className="buy6">Payment Method:</div>
                  <div className="wallet11">Wallet</div>
                </div>
                <div className="orders-date-and-ref26">
                  <div className="th-march8">{`27th : March : 2024 `}</div>
                  <div className="buy6">{`1:32 PM `}</div>
                  <div className="ref8">Ref:</div>
                  <div className="buy6">#167-UY93475J73</div>
                </div>
              </div>
              <div className="order-frame15">
                <div className="order-status8">
                  <div className="buy6">PENDING</div>
                </div>
                <div className="amounts-of-order17">
                  <div className="buy7">Sell:</div>
                  <div className="div82">1009.89</div>
                  <div className="div82">USDT</div>
                  <div className="div82">For</div>
                  <div className="div82">1597.76</div>
                  <div className="div82">NGN</div>
                </div>
                <div className="payment-method41">
                  <div className="buy6">Payment Method:</div>
                  <div className="wallet11">Wallet</div>
                </div>
                <div className="orders-date-and-ref26">
                  <div className="th-march8">{`27th : March : 2024 `}</div>
                  <div className="buy6">{`1:32 PM `}</div>
                  <div className="ref8">Ref:</div>
                  <div className="buy6">#167-UY93475J73</div>
                </div>
              </div>
              <div className="order-frame15">
                <div className="order-status8">
                  <div className="buy6">COMPLETED</div>
                </div>
                <div className="amounts-of-order17">
                  <div className="buy7">Buy:</div>
                  <div className="div82">1009.89</div>
                  <div className="div82">USDT</div>
                  <div className="div82">For</div>
                  <div className="div82">1597.76</div>
                  <div className="div82">NGN</div>
                </div>
                <div className="payment-method41">
                  <div className="buy6">Payment Method:</div>
                  <div className="wallet11">Wallet</div>
                </div>
                <div className="orders-date-and-ref26">
                  <div className="th-march8">{`27th : March : 2024 `}</div>
                  <div className="buy6">{`1:32 PM `}</div>
                  <div className="ref8">Ref:</div>
                  <div className="buy6">#167-UY93475J73</div>
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

export default P2P;
