import PropTypes from "prop-types";
import "./FooterStartFrame10.css";

const FooterStartFrame10 = ({ className = "", fluentEmojicoin }) => {
  return (
    <div className={`footer-start-frame43 ${className}`}>
      <div className="footer-start-frame-inner1">
        <div className="wallet-parent25">
          <div className="wallet138">
            <b className="reward">Reward</b>
          </div>
          <div className="wallet-parent26">
            <div className="wallet139">
              <img
                className="fluent-emojicoin-icon23"
                alt=""
                src={fluentEmojicoin}
              />
              <div className="div192">400,000</div>
            </div>
            <div className="wallet140">
              <img className="notokey-icon8" alt="" src="/notokey.svg" />
              <div className="reward">1</div>
            </div>
            <div className="wallet141">
              <div className="reward">Start task</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame10.propTypes = {
  className: PropTypes.string,
  fluentEmojicoin: PropTypes.string,
};

export default FooterStartFrame10;
