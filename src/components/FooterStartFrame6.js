import PropTypes from "prop-types";
import "./FooterStartFrame6.css";

const FooterStartFrame6 = ({
  className = "",
  tablerxboxBFilled,
  joinBlumBOT,
}) => {
  return (
    <div className={`footer-start-frame35 ${className}`}>
      <div className="wallet-parent6">
        <div className="wallet59">
          <img
            className="tablerxbox-b-filled-icon"
            alt=""
            src={tablerxboxBFilled}
          />
          <img
            className="tablerxbox-b-filled-icon"
            alt=""
            src="/iconoiryoutube1.svg"
          />
        </div>
        <div className="wallet-parent7">
          <div className="wallet60">
            <div className="join-blum-bot">{joinBlumBOT}</div>
          </div>
          <div className="wallet61">
            <img
              className="fluent-emojicoin-icon5"
              alt=""
              src="/fluentemojicoin.svg"
            />
            <div className="join-blum-bot">200,000</div>
          </div>
        </div>
        <div className="wallet62">
          <img
            className="fluent-emojicoin-icon5"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
          <div className="join-blum-bot">Pending</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame6.propTypes = {
  className: PropTypes.string,
  tablerxboxBFilled: PropTypes.string,
  joinBlumBOT: PropTypes.string,
};

export default FooterStartFrame6;
