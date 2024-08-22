import PropTypes from "prop-types";
import "./FooterStartFrame10.css";

const FooterStartFrame10 = ({
  className = "",
  profile,
  herbetPere,
  fluentEmojicoin,
  prop,
  lvlGold,
}) => {
  return (
    <div className={`footer-start-frame37 ${className}`}>
      <div className="profile-parent">
        <img className="profile-icon50" alt="" src={profile} />
        <div className="wallet-parent9">
          <div className="wallet65">
            <b className="herbet-pere">{herbetPere}</b>
          </div>
          <div className="wallet-parent10">
            <div className="wallet66">
              <img
                className="fluent-emojicoin-icon6"
                alt=""
                src={fluentEmojicoin}
              />
              <div className="herbet-pere">{prop}</div>
            </div>
            <div className="wallet67">
              <img
                className="fluent-emojicoin-icon6"
                alt=""
                src="/fluentemojicoin.svg"
              />
              <div className="herbet-pere">5000</div>
            </div>
            <div className="wallet68">
              <div className="herbet-pere">Claim</div>
            </div>
          </div>
        </div>
        <div className="wallet69">
          <div className="lvl-gold">{lvlGold}</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame10.propTypes = {
  className: PropTypes.string,
  profile: PropTypes.string,
  herbetPere: PropTypes.string,
  fluentEmojicoin: PropTypes.string,
  prop: PropTypes.string,
  lvlGold: PropTypes.string,
};

export default FooterStartFrame10;
