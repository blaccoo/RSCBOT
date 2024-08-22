import PropTypes from "prop-types";
import "./FooterStartFrame8.css";

const FooterStartFrame8 = ({ className = "" }) => {
  return (
    <div className={`footer-start-frame34 ${className}`}>
      <div className="hugeiconsadvertisiment-parent">
        <img
          className="hugeiconsadvertisiment"
          alt=""
          src="/hugeiconsadvertisiment.svg"
        />
        <div className="wallet-wrapper5">
          <div className="wallet57">
            <img
              className="fluent-emojicoin-icon4"
              alt=""
              src="/fluentemojicoin.svg"
            />
            <div className="div158">200,000</div>
          </div>
        </div>
        <div className="wallet58">
          <img
            className="fluent-emojicoin-icon4"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
          <div className="div158">0/20</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame8.propTypes = {
  className: PropTypes.string,
};

export default FooterStartFrame8;
