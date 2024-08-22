import PropTypes from "prop-types";
import "./FooterStartFrame7.css";

const FooterStartFrame7 = ({ className = "" }) => {
  return (
    <div className={`footer-start-frame32 ${className}`}>
      <div className="wallet-parent4">
        <div className="wallet48">
          <img
            className="mingcutead-rectangle-line-icon"
            alt=""
            src="/mingcuteadrectangleline.svg"
          />
          <img
            className="uittelegram-alt-icon"
            alt=""
            src="/uittelegramalt.svg"
          />
        </div>
        <div className="wallet-parent5">
          <div className="wallet49">
            <div className="watch-ads">Watch Ads</div>
          </div>
          <div className="wallet50">
            <img
              className="fluent-emojicoin-icon3"
              alt=""
              src="/fluentemojicoin.svg"
            />
            <div className="watch-ads">10,000</div>
            <div className="watch-ads">(Each Ads watch)</div>
          </div>
        </div>
        <div className="wallet51">
          <img
            className="fluent-emojicoin-icon3"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
          <div className="watch-ads">0/20</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame7.propTypes = {
  className: PropTypes.string,
};

export default FooterStartFrame7;
