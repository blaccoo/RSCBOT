import PropTypes from "prop-types";
import "./ModalForStartPurchase1.css";

const ModalForStartPurchase1 = ({ className = "" }) => {
  return (
    <div className={`modal-for-start-purchase ${className}`}>
      <div className="confirmation-frame6">
        <div className="stake-complete6">
          <div className="balance-wrapper">
            <b className="balance">Balance</b>
          </div>
          <div className="frame-parent41">
            <div className="notostar-wrapper">
              <img className="notostar-icon" alt="" src="/notostar.svg" />
            </div>
            <b className="b44">76</b>
          </div>
          <img className="frame-icon6" alt="" src="/frame5.svg" />
          <b className="multi-tap1">Multi-tap</b>
          <div className="confirm-your-purchase">Confirm Your Purchase</div>
          <b className="do-you-want-container">
            <p className="do-you-want">{`Do you want to buy “Multi-tap” `}</p>
            <p className="do-you-want">in Rising Coin for 150 stars?</p>
          </b>
          <div className="frame-parent42">
            <div className="notostar-container">
              <img className="notostar-icon" alt="" src="/notostar1.svg" />
            </div>
            <div className="wrapper17">
              <b className="b45">150</b>
            </div>
            <div className="tablerletter-i-wrapper3">
              <img className="notostar-icon" alt="" src="/tablerletteri.svg" />
            </div>
            <div className="standard-wrapper">
              <b className="standard">Standard</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame27">
        <div className="confirm-button29">
          <div className="close23">
            <b className="continue8">Continue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForStartPurchase1.propTypes = {
  className: PropTypes.string,
};

export default ModalForStartPurchase1;
