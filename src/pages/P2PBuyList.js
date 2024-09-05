import SendAndRecieveFrame1 from "../components/SendAndRecieveFrame1";
import PaymentMethod from "../components/PaymentMethod";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PBuyList.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PBuyList = () => {
  return (
    <div className="p2p-buy-list">
      <Header/>
      <div className="wallet-body-frame3">
      <Divider/>
        <SendAndRecieveFrame1
          sendAndRecieveFrameHeight="66px"
          mingcuteuser4Fill="/tablerarrowdown.svg"
          trade="Buy"
        />
        <div className="current-balance-frame1">
          <div className="title1">
            <div className="title-instruction-frame1">
              <div className="select-from-the">
                Select from the list of Ads to buy. You can also filter by
                Payment options, Verified Users, Currency, Crypto and Amount.
              </div>
            </div>
          </div>
          <div className="filter-frame">
            <PaymentMethod paymeny="Payment Method" paymeny1="All" />
            <PaymentMethod paymeny="Choose Currency" paymeny1="NGN" />
            <PaymentMethod paymeny="Cryptocurrency" paymeny1="USDT" />
            <div className="payment-method3">
              <div className="method">
                <div className="paymeny">Verified Users</div>
              </div>
              <div className="paymeny-parent">
                <div className="select-from-the">All</div>
                <img
                  className="riarrow-drop-down-line-icon"
                  alt=""
                  src="/riarrowdropdownline.svg"
                />
              </div>
            </div>
            <PaymentMethod paymeny="Amount to buy" paymeny1="Enter" />
          </div>
        </div>
        <div className="coin-overview-and-transactions2">
          <div className="coin-overvie-frame1">
            <div className="all-orders-frame1">
              <div className="order-frame1">
                <div className="price1">
                  <b className="b2">1,380</b>
                  <b className="ngn3">NGN</b>
                  <div className="buy-wrapper">
                    <b className="buy">Buy</b>
                  </div>
                </div>
                <div className="amounts-of-order1">
                  <div className="price-for">Price for</div>
                  <div className="price-for">1</div>
                  <div className="price-for">USDT</div>
                </div>
                <div className="payment-method4" />
                <div className="payment-method5">
                  <div className="herbetpere">
                    <span>@</span>
                    <span className="herbetpere1">herbetpere</span>
                  </div>
                  <div className="select-from-the">23 Trade</div>
                  <div className="paymeny">97%</div>
                </div>
                <div className="payment-method6">
                  <div className="limits-to-buy">Payment Method</div>
                  <div className="wallet">Wallet</div>
                </div>
                <div className="orders-date-and-ref2">
                  <div className="available-coin">Available Coin</div>
                  <div className="div15">109.89</div>
                  <div className="limits-to-buy">USDT</div>
                </div>
                <div className="orders-date-and-ref3">
                  <div className="limits-to-buy">Limits to Buy</div>
                  <div className="limit-unit">
                    <div className="limits-to-buy">13,566</div>
                    <div className="limits-to-buy">-</div>
                    <div className="limits-to-buy">897.988</div>
                    <div className="limits-to-buy">NGN</div>
                  </div>
                </div>
                <div className="orders-date-and-ref2">
                  <div className="available-coin">Payment Time</div>
                  <div className="div15">15</div>
                  <div className="limits-to-buy">Min</div>
                </div>
              </div>
            </div>
            <div className="all-orders-frame1">
              <div className="order-frame1">
                <div className="price1">
                  <b className="b2">1,380</b>
                  <b className="ngn3">NGN</b>
                  <div className="buy-wrapper">
                    <b className="buy">Buy</b>
                  </div>
                </div>
                <div className="amounts-of-order1">
                  <div className="price-for">Price for</div>
                  <div className="price-for">1</div>
                  <div className="price-for">USDT</div>
                </div>
                <div className="payment-method4" />
                <div className="payment-method5">
                  <div className="herbetpere">
                    <span>@</span>
                    <span className="herbetpere1">herbetpere</span>
                  </div>
                  <div className="select-from-the">23 Trade</div>
                  <div className="paymeny">97%</div>
                </div>
                <div className="payment-method6">
                  <div className="limits-to-buy">Payment Method</div>
                  <div className="wallet">Wallet</div>
                </div>
                <div className="orders-date-and-ref2">
                  <div className="available-coin">Available Coin</div>
                  <div className="div15">109.89</div>
                  <div className="limits-to-buy">USDT</div>
                </div>
                <div className="orders-date-and-ref3">
                  <div className="limits-to-buy">Limits to Buy</div>
                  <div className="limit-unit">
                    <div className="limits-to-buy">13,566</div>
                    <div className="limits-to-buy">-</div>
                    <div className="limits-to-buy">897.988</div>
                    <div className="limits-to-buy">NGN</div>
                  </div>
                </div>
                <div className="orders-date-and-ref2">
                  <div className="available-coin">Payment Time</div>
                  <div className="div15">15</div>
                  <div className="limits-to-buy">Min</div>
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

export default P2PBuyList;
