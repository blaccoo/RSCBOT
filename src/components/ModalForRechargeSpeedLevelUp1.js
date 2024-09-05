import PropTypes from "prop-types";
import "./ModalForRechargeSpeedLevelUp1.css";

const ModalForRechargeSpeedLevelUp1 = ({ className = "" }) => {
  return (
    <div className={`modal-for-recharge-speed-level ${className}`}>
      <div className="confirmation-frame8">
        <div className="stake-complete8">
          <img className="frame-icon8" alt="" src="/frame2.svg" />
          <b className="recharge-speed">Recharge Speed</b>
          <div className="increase-the-speed">
            Increase the speed at which coin enters your energy bar per second.
          </div>
          <b className="recharge-per-second">
            +1 Recharge per second for each new Levels
          </b>
          <div className="frame-parent44">
            <div className="fluent-emojicoin-wrapper4">
              <img
                className="fluent-emojicoin-icon13"
                alt=""
                src="/fluentemojicoin1.svg"
              />
            </div>
            <div className="wrapper19">
              <b className="b47">10,000</b>
            </div>
            <div className="fluent-emojicoin-wrapper4">
              <img
                className="fluent-emojicoin-icon13"
                alt=""
                src="/tablerletteri.svg"
              />
            </div>
            <div className="level-2-frame">
              <b className="level-22">Level 2</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame29">
        <div className="confirm-button31">
          <div className="close25">
            <b className="continue10">Continue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForRechargeSpeedLevelUp1.propTypes = {
  className: PropTypes.string,
};

export default ModalForRechargeSpeedLevelUp1;
