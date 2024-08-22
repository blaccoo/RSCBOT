import PropTypes from "prop-types";
import "./AdsVolumeFrame.css";

const AdsVolumeFrame = ({ className = "", volumeToBuy }) => {
  return (
    <div className={`ads-volume-frame ${className}`}>
      <div className="volume-to-buy-parent">
        <div className="volume-to-buy">{volumeToBuy}</div>
        <div className="frame-parent18">
          <div className="enter-between-2-20000-wrapper">
            <div className="enter-between-2">Enter Between 2 ~ 20000</div>
          </div>
          <div className="usdt-container">
            <div className="usdt35">USDT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdsVolumeFrame.propTypes = {
  className: PropTypes.string,
  volumeToBuy: PropTypes.string,
};

export default AdsVolumeFrame;
