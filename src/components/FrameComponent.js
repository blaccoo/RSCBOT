import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "", withdraw, prop, propColor }) => {
  const usernameStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={`frame-parent56 ${className}`}>
      <div className="withdraw-parent">
        <div className="withdraw7">{withdraw}</div>
        <div className="withdraw7">NGN</div>
        <div className="withdraw7">9500</div>
        <div className="paid-by">{prop}</div>
        <div className="paid-by">N</div>
        <div className="paid-by">100</div>
        <div className="paid-by">Fee</div>
      </div>
      <div className="paid-by-parent">
        <div className="paid-by">Paid by:</div>
        <div className="username2" style={usernameStyle}>
          @username
        </div>
        <div className="bitcoin-iconsverify-filled2">
          <img className="vector-icon29" alt="" src="/vector2.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  withdraw: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
};

export default FrameComponent;
