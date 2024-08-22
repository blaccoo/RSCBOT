import AdsFrame from "./AdsFrame";
import PropTypes from "prop-types";
import "./CurrentBalanceFrame2.css";

const CurrentBalanceFrame2 = ({ className = "" }) => {
  return (
    <div className={`current-balance-frame6 ${className}`}>
      <div className="title10">
        <div className="title-instruction-frame8">
          <div className="numbers-of-orders">Add your payment information</div>
        </div>
      </div>
      <div className="ads-frame5">
        <div className="parent3">
          <div className="numbers-of-orders">23</div>
          <div className="order-completion-rate">100</div>
          <div className="div123">%</div>
        </div>
        <div className="numbers-of-orders-parent">
          <div className="numbers-of-orders">Numbers of orders</div>
          <div className="order-completion-rate">Order completion rate</div>
        </div>
      </div>
      <div className="trades-active">
        <div className="game-iconsswap-bag-wrapper">
          <img
            className="game-iconsswap-bag"
            alt=""
            src="/gameiconsswapbag.svg"
          />
        </div>
        <div className="trades-parent">
          <div className="trades">Trades</div>
          <div className="on">On</div>
          <div className="bitoggle2-on">
            <img className="group-icon2" alt="" src="/group1.svg" />
          </div>
        </div>
      </div>
      <AdsFrame updatePaymentInformation="Update Payment Information" />
    </div>
  );
};

CurrentBalanceFrame2.propTypes = {
  className: PropTypes.string,
};

export default CurrentBalanceFrame2;
