import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "", hugeiconstap02, prop }) => {
  return (
    <div className={`frame-parent20 ${className}`}>
      <div className="frame-wrapper4">
        <div className="wallet-wrapper6">
          <div className="wallet70">
            <img className="hugeiconstap-021" alt="" src={hugeiconstap02} />
            <div className="div165">{prop}</div>
          </div>
        </div>
      </div>
      <div className="wallet71" />
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  hugeiconstap02: PropTypes.string,
  prop: PropTypes.string,
};

export default FrameComponent1;
