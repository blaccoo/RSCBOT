import PropTypes from "prop-types";
import "./CoinOvervieFrame.css";

const CoinOvervieFrame = ({ className = "", oleaseEnsureYouPayFastIAppro }) => {
  return (
    <div className={`coin-overvie-frame12 ${className}`}>
      <div className="all-orders-frame13">
        <div className="order-frame22">
          <div className="price25">
            <div className="enter-amount8">
              <b className="make-payment2">Make Payment</b>
            </div>
          </div>
          <div className="amounts-of-order25">
            <div className="bank5">Bank</div>
            <div className="bank5">Opay</div>
          </div>
          <div className="amounts-of-order25">
            <div className="bank5">Name</div>
            <div className="bank5">Nsisong Eyo</div>
          </div>
          <div className="payment-method57" />
          <div className="payment-method58">
            <div className="account-number4">Account Number</div>
            <div className="div152">7038788133</div>
            <img
              className="solarcopy-outline-icon7"
              alt=""
              src="/solarcopyoutline1.svg"
            />
          </div>
          <div className="orders-date-and-ref36" />
          <div className="orders-date-and-ref37">
            <div className="amount6">Amount</div>
            <div className="div153">5000</div>
            <div className="bank5">NGN</div>
          </div>
        </div>
      </div>
      <div className="sellers-comment-group">
        <b className="sellers-comment1">Seller’s Comment</b>
        <div className="olease-ensure-you">{oleaseEnsureYouPayFastIAppro}</div>
      </div>
      <div className="creat-button-wrapper">
        <div className="creat-button3">
          <b className="confirm-payment">Confirm Payment</b>
        </div>
      </div>
    </div>
  );
};

CoinOvervieFrame.propTypes = {
  className: PropTypes.string,
  oleaseEnsureYouPayFastIAppro: PropTypes.string,
};

export default CoinOvervieFrame;
