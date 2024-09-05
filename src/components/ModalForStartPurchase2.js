import PropTypes from "prop-types";
import "./ModalForStartPurchase2.css";

const ModalForStartPurchase2 = ({ className = "" }) => {
  return (
    <div className={`modal-for-start-purchase2 ${className}`}>
      <div className="confirmation-frame12">
        <div className="stake-complete12">
          <div className="balance-frame">
            <b className="balance2">Balance</b>
          </div>
          <div className="frame-parent49">
            <div className="notostar-wrapper5">
              <img className="notostar-icon7" alt="" src="/notostar.svg" />
            </div>
            <b className="b52">76</b>
          </div>
          <img className="frame-icon12" alt="" src="/frame6.svg" />
          <b className="energy-limit2">Energy Limit</b>
          <div className="confirm-your-purchase2">Confirm Your Purchase</div>
          <b className="do-you-want-container2">
            <p className="do-you-want2">{`Do you want to buy “Energy limit” `}</p>
            <p className="do-you-want2">in Rising Coin for 150 stars?</p>
          </b>
          <div className="frame-parent50">
            <div className="notostar-wrapper6">
              <img className="notostar-icon7" alt="" src="/notostar1.svg" />
            </div>
            <div className="wrapper23">
              <b className="b53">150</b>
            </div>
            <div className="tablerletter-i-wrapper9">
              <img className="notostar-icon7" alt="" src="/tablerletteri.svg" />
            </div>
            <div className="standard-wrapper1">
              <b className="standard3">Standard</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame33">
        <div className="confirm-button35">
          <div className="close29">
            <b className="continue14">Continue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForStartPurchase2.propTypes = {
  className: PropTypes.string,
};

export default ModalForStartPurchase2;
