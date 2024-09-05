import PropTypes from "prop-types";
import "./ModalForMultitapLevelUp.css";

const ModalForMultitapLevelUp = ({ className = "" }) => {
  return (
    <div className={`modal-for-multitap-level-up ${className}`}>
      <div className="confirmation-frame5">
        <div className="stake-complete5">
          <img className="frame-icon5" alt="" src="/frame2.svg" />
          <b className="multi-tap">Multi-tap</b>
          <div className="increase-the-amount">
            Increase the amount of coin you can earn per tap
          </div>
          <b className="per-tap-for">+1 per tap for each new Levels</b>
          <div className="frame-parent36">
            <div className="fluent-emojicoin-wrapper3">
              <img
                className="fluent-emojicoin-icon12"
                alt=""
                src="/fluentemojicoin1.svg"
              />
            </div>
            <div className="wrapper16">
              <b className="per-tap-for">2000</b>
            </div>
            <div className="fluent-emojicoin-wrapper3">
              <img
                className="fluent-emojicoin-icon12"
                alt=""
                src="/tablerletteri.svg"
              />
            </div>
            <div className="level-2-container">
              <b className="level-21">Level 2</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame26">
        <div className="confirm-button28">
          <div className="close22">
            <b className="continue7">Continue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForMultitapLevelUp.propTypes = {
  className: PropTypes.string,
};

export default ModalForMultitapLevelUp;
