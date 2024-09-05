import PropTypes from "prop-types";
import "./ModalForRechargeSpeedLevelUp.css";

const ModalForRechargeSpeedLevelUp = ({ className = "" }) => {
  return (
    <div className={`modal-for-bot-level-up ${className}`}>
      <div className="confirmation-frame1">
        <div className="stake-complete1">
          <img className="frame-icon1" alt="" src="/frame2.svg" />
          <b className="rsc-bot">RSC BOT</b>
          <div className="allow-bot-mines">
            Allow BOT mines and collect coin for you when you are not around
          </div>
          <b className="this-bot-mines-container">
            <span>This BOT Mines for you for</span>
            <span className="span6"> 3</span>
            <span> hours</span>
          </b>
          <div className="frame-parent31">
            <div className="fluent-emojicoin-container">
              <img
                className="fluent-emojicoin-icon8"
                alt=""
                src="/fluentemojicoin.svg"
              />
            </div>
            <div className="wrapper12">
              <b className="b36">200,000</b>
            </div>
            <div className="tablerletter-i-container">
              <img
                className="fluent-emojicoin-icon8"
                alt=""
                src="/tablerletteri.svg"
              />
            </div>
            <div className="basic-wrapper">
              <b className="basic">Basic</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame21">
        <div className="confirm-button23">
          <div className="close17">
            <b className="continue5">Continue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForRechargeSpeedLevelUp.propTypes = {
  className: PropTypes.string,
};

export default ModalForRechargeSpeedLevelUp;
