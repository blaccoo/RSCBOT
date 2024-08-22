import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CurrentBalanceBG.css";

const CurrentBalanceBG = ({ className = "", prop, nGN, propLeft, balance }) => {
  const balanceAndUnitStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={`current-balance-bg ${className}`}>
      <div className="current-balance-title">
        <div className="current-balance">Current Balance</div>
      </div>
      <div className="balace-frame">
        <div className="description">
          <div className="div120">{prop}</div>
          <div className="ngn36">{nGN}</div>
        </div>
      </div>
      <div className="balance-and-unit" style={balanceAndUnitStyle}>
        <div className="balance-convertion">
          <div className="balance">{balance}</div>
        </div>
      </div>
    </div>
  );
};

CurrentBalanceBG.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  nGN: PropTypes.string,
  balance: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default CurrentBalanceBG;
