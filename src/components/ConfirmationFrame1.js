import PropTypes from "prop-types";
import "./ConfirmationFrame1.css";

const ConfirmationFrame1 = ({ className = "" }) => {
  return (
    <div className={`confirmation-frame14 ${className}`}>
      <div className="stake-complete14">
        <img className="frame-icon14" alt="" src="/frame2.svg" />
        <b className="congratulations1">Congratulations</b>
        <div className="you-didnt-leave">
          You didn't leave your friends behind, you successfully invited your
          friend(s) to join you. Invite more friends for more rewards.
        </div>
        <b className="claim-your-bonus1">Claim your bonus below</b>
        <div className="frame-parent58">
          <div className="fluent-emojicoin-wrapper5">
            <img
              className="fluent-emojicoin-icon20"
              alt=""
              src="/fluentemojicoin1.svg"
            />
          </div>
          <div className="wrapper25">
            <b className="b56">5,000</b>
          </div>
          <div className="fluent-emojicoin-wrapper5">
            <img
              className="fluent-emojicoin-icon20"
              alt=""
              src="/tablerletteri.svg"
            />
          </div>
          <div className="carbonfriendship-parent">
            <img
              className="fluent-emojicoin-icon20"
              alt=""
              src="/carbonfriendship1.svg"
            />
            <b className="b57">3</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmationFrame1.propTypes = {
  className: PropTypes.string,
};

export default ConfirmationFrame1;
