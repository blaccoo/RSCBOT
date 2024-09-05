import PropTypes from "prop-types";
import "./ModalClaimingTask.css";

const ModalClaimingTask = ({ className = "" }) => {
  return (
    <div className={`modal-claiming-task ${className}`}>
      <div className="confirmation-frame3">
        <div className="stake-complete3">
          <img className="frame-icon3" alt="" src="/frame4.svg" />
          <b className="congratulations">Congratulations</b>
          <b className="the-correct-answer">
            The Correct answer is B) Short position
          </b>
          <div className="a-short-position">{`A short position involves selling an asset you don’t own, with the expectation of buying it back later at a price lower, to realized profit. This is a key concept in trading, `}</div>
          <b className="claim-your-bonus">Claim your bonus below</b>
          <div className="frame-parent33">
            <div className="fluent-emojicoin-wrapper1">
              <img
                className="fluent-emojicoin-icon10"
                alt=""
                src="/fluentemojicoin.svg"
              />
            </div>
            <div className="wrapper14">
              <b className="b38">400,000</b>
            </div>
            <div className="tablerletter-i-wrapper1">
              <img
                className="fluent-emojicoin-icon10"
                alt=""
                src="/tablerletteri.svg"
              />
            </div>
            <div className="notokey-group">
              <img
                className="fluent-emojicoin-icon10"
                alt=""
                src="/notokey1.svg"
              />
              <b className="b39">1</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame24">
        <div className="confirm-button26">
          <div className="close20">
            <b className="claim-reward">Claim Reward</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalClaimingTask.propTypes = {
  className: PropTypes.string,
};

export default ModalClaimingTask;
