import PropTypes from "prop-types";
import "./ModalForBOTClaim.css";

const ModalForBOTClaim = ({ className = "" }) => {
  return (
    <div className={`modal-for-bot-claim ${className}`}>
      <div className="confirmation-frame4">
        <div className="stake-complete4">
          <img className="frame-icon4" alt="" src="/frame2.svg" />
          <b className="rsc-bot1">RSC BOT</b>
          <div className="i-didnt-let">
            I didn’t let you down. while you were away I mined for you. Now you
            can claim your coin.
          </div>
          <div className="frame-parent34">
            <div className="your-bot-worked-for-wrapper">
              <b className="your-bot-worked">{`Your BOT worked for `}</b>
            </div>
            <div className="hours-wrapper">
              <b className="hours">3 hours</b>
            </div>
          </div>
          <div className="you-can-increased-your-bot-min-wrapper">
            <b className="you-can-increased">
              You can Increased Your BOT Mining Time
            </b>
          </div>
          <div className="frame-parent35">
            <div className="fluent-emojicoin-wrapper2">
              <img
                className="fluent-emojicoin-icon11"
                alt=""
                src="/fluentemojicoin.svg"
              />
            </div>
            <div className="wrapper15">
              <b className="b40">267,890</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame25">
        <div className="confirm-button27">
          <div className="close21">
            <b className="claim">Claim</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForBOTClaim.propTypes = {
  className: PropTypes.string,
};

export default ModalForBOTClaim;
