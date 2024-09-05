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
  const bottomTabs1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`bottom-tabs2 ${className}`} style={bottomTabs1Style}>
      <div className="wallet93">
        <img className="fluenthome-48-filled-icon" alt="" src={walletIcon} />
        <div className="wallet94">{wallet}</div>
      </div>
      <div className="home2">
        <img
          className="fluenthome-48-filled-icon"
          alt=""
          src={fluenthome48Filled}
        />
        <div className="wallet94">{home}</div>
      </div>
      <div className="home2">
        <img className="fluenthome-48-filled-icon" alt="" src={tradeIcon} />
        <div className="wallet94">{trade}</div>
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
