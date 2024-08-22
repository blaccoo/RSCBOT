import PropTypes from "prop-types";
import "./CurrentBalanceFrame.css";

const CurrentBalanceFrame = ({ className = "", prop }) => {
  return (
    <div className={`current-balance-frame7 ${className}`}>
      <div className="current-balance-bg1">
        <div className="current-balance-title1">
          <div className="current-balance1">Current Balance</div>
        </div>
        <div className="balace-frame1">
          <div className="description1">
            <div className="wrapper11">
              <div className="div128">{prop}</div>
            </div>
            <div className="lvl-bronze-wrapper">
              <div className="lvl-bronze">Lvl - Bronze</div>
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
};

export default CurrentBalanceFrame;
