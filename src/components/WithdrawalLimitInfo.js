import PropTypes from "prop-types";
import "./WithdrawalLimitInfo.css";

const WithdrawalLimitInfo = ({ className = "" }) => {
  return (
    <div className={`withdrawal-limit-info ${className}`}>
      <div className="wallet-address-update-frame">
        <div className="enter-address-frame">
          <b className="enter-wallet-address">Enter Wallet Address</b>
        </div>
      </div>
      <div className="withdrawal-limit-frame">
        <div className="withdrawal-limit-info1">
          <b className="enter-wallet-address">Min Withdrawal Limit</b>
        </div>
        <div className="withdrawl-limit">
          <div className="max-withdrawal-limit-container">0.1 USDT</div>
        </div>
      </div>
      <div className="wallet-update">
        <div className="wallet-address">
          <div className="max-withdrawal-limit-container">
            <p className="max-withdrawal-limit-">
              <b>Max Withdrawal Limit-</b>
            </p>
            <p className="usdt34">20,000 USDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

WithdrawalLimitInfo.propTypes = {
  className: PropTypes.string,
};

export default WithdrawalLimitInfo;
