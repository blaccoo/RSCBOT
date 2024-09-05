import PropTypes from "prop-types";
import "./ModalForStartPurchase.css";

const ModalForStartPurchase = ({ className = "" }) => {
  return (
    <div className={`modal-for-start-purchase1 ${className}`}>
      <div className="confirmation-frame10">
        <div className="stake-complete10">
          <div className="balance-container">
            <b className="balance1">Balance</b>
          </div>
          <div className="frame-parent46">
            <div className="notostar-wrapper2">
              <img className="notostar-icon4" alt="" src="/notostar.svg" />
            </div>
            <b className="b49">76</b>
          </div>
          <img className="frame-icon10" alt="" src="/frame5.svg" />
          <b className="rsc-bot3">RSC BOT</b>
          <div className="confirm-your-purchase1">Confirm Your Purchase</div>
          <b className="do-you-want-container1">
            <p className="do-you-want1">{`Do you want to buy “RSC BOT” `}</p>
            <p className="do-you-want1">in Rising Coin for 150 stars?</p>
          </b>
          <div className="frame-parent47">
            <div className="notostar-wrapper3">
              <img className="notostar-icon4" alt="" src="/notostar1.svg" />
            </div>
            <div className="wrapper21">
              <b className="b50">150</b>
            </div>
            <div className="tablerletter-i-wrapper7">
              <img className="notostar-icon4" alt="" src="/tablerletteri.svg" />
            </div>
            <div className="standard-frame">
              <b className="standard2">Standard</b>
            </div>
          </div>
        </div>
      </div>
      <div className="frame31">
        <div className="confirm-button33">
          <div className="close27">
            <b className="continue12">Continue</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalForStartPurchase.propTypes = {
  className: PropTypes.string,
};

export default ModalForStartPurchase;
