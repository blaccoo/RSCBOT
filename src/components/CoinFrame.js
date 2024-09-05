import PropTypes from "prop-types";
import "./CoinFrame.css";

const CoinFrame = ({
  className = "",
  ellipse22,
  risingCoin,
  coinTotalConversion,
  balance,
  rSC,
}) => {
  return (
    <div className={`coin-frame4 ${className}`}>
      <div className="coin-info-and-logo">
        <div className="coin-logo">
          <img className="coin-logo-child" alt="" src={ellipse22} />
        </div>
        <div className="coin-info">
          <div className="coin-name-and-total">
            <div className="coin-name21">
              <b className="coin-total-conversion">{risingCoin}</b>
            </div>
            <div className="coin-toal-frame">
              <b className="coin-total-conversion">{coinTotalConversion}</b>
            </div>
          </div>
          <div className="balance-and-unit1">
            <div className="balance-wrapper1">
              <div className="balance4">{balance}</div>
            </div>
            <div className="rsc-wrapper">
              <div className="balance4">{rSC}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CoinFrame.propTypes = {
  className: PropTypes.string,
  ellipse22: PropTypes.string,
  risingCoin: PropTypes.string,
  coinTotalConversion: PropTypes.string,
  balance: PropTypes.string,
  rSC: PropTypes.string,
};

export default CoinFrame;
