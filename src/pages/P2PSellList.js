import SendAndRecieveFrame1 from "../components/SendAndRecieveFrame1";
import PaymentMethod from "../components/PaymentMethod";
import FooterStartFrame from "../components/FooterStartFrame";
import SocialMediaHandle from "../components/SocialMediaHandle";
import BottomTabs from "../components/BottomTabs";
import "./P2PSellList.css";
import Divider from "../components/Divider";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";

const P2PSellList = () => {
  return (
    <div className="p2p-sell-list">
      <Header/>
      <div className="wallet-body-frame12">
    <Divider/>
        <SendAndRecieveFrame1
          sendAndRecieveFrameHeight="66px"
          mingcuteuser4Fill="/tablerarrowdown.svg"
          trade="Sell"
        />
        <div className="current-balance-frame2">
          <div className="title4">
            <div className="title-instruction-frame4">
              <div className="select-from-the1">
                Select from the list of Ads to sell. You can also filter by
                Payment options, Verified Users, Currency, Crypto and Amount.
              </div>
            </div>
          </div>
          <div className="filter-frame1">
            <PaymentMethod paymeny="Payment Method" paymeny1="All" />
            <PaymentMethod paymeny="Choose Currency" paymeny1="NGN" />
            <PaymentMethod paymeny="Cryptocurrency" paymeny1="USDT" />
            <div className="payment-method30">
              <div className="method1">
                <div className="paymeny2">Verified Users</div>
              </div>
              <div className="paymeny-group">
                <div className="select-from-the1">All</div>
                <img
                  className="menu-icon13"
                  alt=""
                  src="/riarrowdropdownline.svg"
                />
              </div>
            </div>
            <PaymentMethod paymeny="Amount to buy" paymeny1="Enter" />
          </div>
        </div>
        <div className="coin-overview-and-transactions11">
          <div className="coin-overvie-frame6">
            <div className="all-orders-frame6">
              <div className="order-frame12">
                <div className="price19">
                  <b className="b17">1,380</b>
                  <b className="ngn21">NGN</b>
                  <div className="sell-wrapper">
                    <b className="sell4">Sell</b>
                  </div>
                </div>
                <div className="amounts-of-order13">
                  <div className="price-for2">Price for</div>
                  <div className="price-for2">1</div>
                  <div className="price-for2">USDT</div>
                </div>
                <div className="payment-method31" />
                <div className="payment-method32">
                  <div className="sabitan">
                    <span>@</span>
                    <span className="herbetpere5">herbetpere</span>
                  </div>
                  <div className="select-from-the1">23 Trade</div>
                  <div className="paymeny2">97%</div>
                </div>
                <div className="payment-method33">
                  <div className="payment-method34">Payment Method</div>
                  <div className="opay">Opay</div>
                </div>
                <div className="orders-date-and-ref18">
                  <div className="available-coin2">Available Coin</div>
                  <div className="div67">109.89</div>
                  <div className="payment-method34">USDT</div>
                </div>
                <div className="orders-date-and-ref19">
                  <div className="payment-method34">Limits to Buy</div>
                  <div className="limit-unit2">
                    <div className="payment-method34">13,566</div>
                    <div className="payment-method34">-</div>
                    <div className="payment-method34">897.988</div>
                    <div className="payment-method34">NGN</div>
                  </div>
                </div>
                <div className="orders-date-and-ref18">
                  <div className="available-coin2">Payment Time</div>
                  <div className="div67">15</div>
                  <div className="payment-method34">Min</div>
                </div>
              </div>
            </div>
            <div className="all-orders-frame6">
              <div className="order-frame12">
                <div className="price19">
                  <b className="b17">1,380</b>
                  <b className="ngn21">NGN</b>
                  <div className="sell-container">
                    <b className="sell5">Sell</b>
                  </div>
                </div>
                <div className="amounts-of-order13">
                  <div className="price-for2">Price for</div>
                  <div className="price-for2">1</div>
                  <div className="price-for2">USDT</div>
                </div>
                <div className="payment-method31" />
                <div className="payment-method32">
                  <div className="sabitan">
                    <span>@</span>
                    <span className="herbetpere5">sabitan</span>
                  </div>
                  <div className="select-from-the1">23 Trade</div>
                  <div className="paymeny2">97%</div>
                </div>
                <div className="payment-method33">
                  <div className="payment-method34">Payment Method</div>
                  <div className="opay">Kuda</div>
                </div>
                <div className="orders-date-and-ref18">
                  <div className="available-coin2">Available Coin</div>
                  <div className="div67">109.89</div>
                  <div className="payment-method34">USDT</div>
                </div>
                <div className="orders-date-and-ref19">
                  <div className="payment-method34">Limits to Buy</div>
                  <div className="limit-unit2">
                    <div className="payment-method34">13,566</div>
                    <div className="payment-method34">-</div>
                    <div className="payment-method34">897.988</div>
                    <div className="payment-method34">NGN</div>
                  </div>
                </div>
                <div className="orders-date-and-ref18">
                  <div className="available-coin2">Payment Time</div>
                  <div className="div67">15</div>
                  <div className="payment-method34">Min</div>
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

export default P2PSellList;
