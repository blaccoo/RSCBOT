import PropTypes from "prop-types";
import "./ModalForEnergyLimitLevelUp.css";

const ModalForEnergyLimitLevelUp = ({ className = "" }) => {
  return (
    <div className={`modal-for-energy-limit-level-u ${className}`}>
      <div className="confirmation-frame2">
        <div className="stake-complete2">
          <img className="frame-icon2" alt="" src="/frame2.svg" />
          <b className="energy-limit">Energy Limit</b>
          <div className="increase-the-the">
            Increase the the storage capacity
          </div>
          <b className="limit-increase-for">
            +500 Limit increase for each new Levels
          </b>
          <div className="frame-parent32">
            <div className="fluent-emojicoin-frame">
              <img
                className="fluent-emojicoin-icon9"
                alt=""
                src="/fluentemojicoin1.svg"
              />
            </div>
            <div className="wrapper13">
              <b className="b37">3000</b>
            </div>
            <div className="fluent-emojicoin-frame">
              <img
                className="fluent-emojicoin-icon9"
                alt=""
                src="/tablerletteri.svg"
              />
            </div>
            <div className="level-2-wrapper">
              <b className="level-2">Level 2</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame23">
        <div className="confirm-button25">
          <div className="close19">
            <b className="continue6">Continue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForEnergyLimitLevelUp.propTypes = {
  className: PropTypes.string,
};

export default ModalForEnergyLimitLevelUp;
