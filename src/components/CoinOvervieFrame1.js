import PropTypes from "prop-types";
import "./CoinOvervieFrame1.css";

const CoinOvervieFrame1 = ({ className = "", buyMax, buy, cancelBuyOrder }) => {
  return (
    <div className={`coin-overvie-frame14 ${className}`}>
      <div className="all-orders-frame14">
        <div className="order-frame23">
          <div className="price42">
            <div className="enter-amount9">
              <b className="enter-amount10">Enter Amount</b>
            </div>
            <b className="ngn39">NGN</b>
            <div className="lucidearrow-down-up-wrapper">
              <img
                className="lucidearrow-down-up-icon"
                alt=""
                src="/lucidearrowdownup.svg"
              />
            </div>
          </div>
          <div className="amounts-of-order27">
            <div className="div148">0.00</div>
            <div className="div148">USDT</div>
          </div>
          <div className="payment-method59" />
          <div className="payment-method60">
            <div className="buy-max">{buyMax}</div>
            <div className="trade20">23 Trade</div>
            <div className="div149">97%</div>
          </div>
          <div className="payment-method61">
            <div className="payment-method62">Payment Method</div>
            <div className="wallet56">Wallet</div>
          </div>
          <div className="orders-date-and-ref38">
            <div className="available-coin4">Available Coin</div>
            <div className="div150">109.89</div>
            <div className="payment-method62">USDT</div>
          </div>
          <div className="orders-date-and-ref39">
            <div className="payment-method62">Limits to Buy</div>
            <div className="limit-unit4">
              <div className="payment-method62">13,566</div>
              <div className="payment-method62">-</div>
              <div className="payment-method62">897.988</div>
              <div className="payment-method62">NGN</div>
            </div>
          </div>
          <div className="orders-date-and-ref38">
            <div className="available-coin4">Payment Time</div>
            <div className="div150">15</div>
            <div className="payment-method62">Min</div>
          </div>
        </div>
      </div>
      <div className="coin-overvie-frame-inner">
        <div className="buy-frame">
          <b className="payment-method62">{buy}</b>
        </div>
      </div>
      <div className="cancel-order12">
        <b className="payment-method62">{cancelBuyOrder}</b>
      </div>
    </div>
  );
};

CoinOvervieFrame1.propTypes = {
  className: PropTypes.string,
  buyMax: PropTypes.string,
  buy: PropTypes.string,
  cancelBuyOrder: PropTypes.string,
};

export default CoinOvervieFrame1;
