import PropTypes from "prop-types";
import "./AdsFrame1.css";

const AdsFrame1 = ({ className = "" }) => {
  return (
    <div className={`ads-frame8 ${className}`}>
      <div className="set-ads-percentage">
        <div className="set-percentage-of">Set percentage of market price</div>
        <div className="frame-parent17">
          <div className="enter-between-80-200-wrapper">
            <div className="enter-between-80">Enter Between 80 ~ 200</div>
          </div>
          <div className="div146">%</div>
        </div>
      </div>
    </div>
  );
};

AdsFrame1.propTypes = {
  className: PropTypes.string,
};

export default AdsFrame1;
