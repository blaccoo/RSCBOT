import AllOrdersFrame from "./AllOrdersFrame";
import PropTypes from "prop-types";
import "./CoinOvervieFrame3.css";

const CoinOvervieFrame3 = ({ className = "" }) => {
  return (
    <div className={`coin-overvie-frame15 ${className}`}>
      <AllOrdersFrame
        propHeight="190px"
        propHeight1="unset"
        makePayment="Receive Payment"
        propWidth="unset"
        propDisplay="unset"
        propHeight2="13px"
        prop="9400"
      />
      <div className="coin-overvie-frame-item" />
      <div className="creat-button-container">
        <div className="creat-button4">
          <b className="confirm-recipient3">Confirm Recipient</b>
        </div>
      </div>
    </div>
  );
};

CoinOvervieFrame3.propTypes = {
  className: PropTypes.string,
};

export default CoinOvervieFrame3;
