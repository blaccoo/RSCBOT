import PropTypes from "prop-types";
import "./FooterStartFrame8.css";

const FooterStartFrame8 = ({ className = "" }) => {
  return (
    <div className={`footer-start-frame39 ${className}`}>
      <div className="hugeiconsadvertisiment-parent">
        <img
          className="hugeiconsadvertisiment"
          alt=""
          src="/hugeiconsadvertisiment.svg"
        />
        <div className="wallet-parent21">
          <div className="wallet122">
            <div className="watch-ads-for">Watch Ads for Coins</div>
          </div>
          <div className="wallet123">
            <img
              className="fluent-emojicoin-icon19"
              alt=""
              src="/fluentemojicoin1.svg"
            />
            <div className="watch-ads-for">20,000</div>
          </div>
        </div>
        <div className="wallet124">
          <img
            className="fluent-emojicoin-icon19"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
          <div className="watch-ads-for">0/20</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame8.propTypes = {
  className: PropTypes.string,
};

export default FooterStartFrame8;
