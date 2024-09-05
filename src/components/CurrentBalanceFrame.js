import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CurrentBalanceFrame.css";

const CurrentBalanceFrame = ({
  className = "",
  prop,
  divColor,
  lvlBronzeColor,
}) => {
  const divStyle = useMemo(() => {
    return {
      color: divColor,
    };
  }, [divColor]);

  const lvlBronzeStyle = useMemo(() => {
    return {
      color: lvlBronzeColor,
    };
  }, [lvlBronzeColor]);

  return (
    <div className={`current-balance-frame7 ${className}`}>
      <div className="current-balance-bg1">
        <div className="current-balance-title1">
          <div className="current-balance1">Current Balance</div>
        </div>
        <div className="balace-frame1">
          <div className="description1">
            <div className="wrapper24">
              <div className="div154" style={divStyle}>
                {prop}
              </div>
            </div>
            <div className="lvl-bronze-wrapper">
              <div className="lvl-bronze5" style={lvlBronzeStyle}>
                Lvl - Bronze
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrentBalanceFrame.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  divColor: PropTypes.any,
  lvlBronzeColor: PropTypes.any,
};

export default CurrentBalanceFrame;
