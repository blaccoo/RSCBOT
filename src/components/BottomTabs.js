import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BottomTabs.css";

const BottomTabs = ({
  className = "",
  propHeight,
  walletIcon,
  wallet,
  fluenthome48Filled,
  home,
  tradeIcon,
  trade,
}) => {
  const bottomTabsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`bottom-tabs ${className}`} style={bottomTabsStyle}>
      <div className="wallet33">
        <img className="wallet-icon" alt="" src={walletIcon} />
        <div className="wallet34">{wallet}</div>
      </div>
      <div className="home1">
        <img className="wallet-icon" alt="" src={fluenthome48Filled} />
        <div className="wallet34">{home}</div>
      </div>
      <div className="home1">
        <img className="wallet-icon" alt="" src={tradeIcon} />
        <div className="wallet34">{trade}</div>
      </div>
    </div>
  );
};

BottomTabs.propTypes = {
  className: PropTypes.string,
  walletIcon: PropTypes.string,
  wallet: PropTypes.string,
  fluenthome48Filled: PropTypes.string,
  home: PropTypes.string,
  tradeIcon: PropTypes.string,
  trade: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default BottomTabs;
