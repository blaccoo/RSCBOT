import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ConfirmationFrame.css";

const ConfirmationFrame = ({
  className = "",
  propWidth,
  frame,
  propWidth1,
  propOverflow,
  propWidth2,
  paymentConfirmed,
  youHaveConfirmedRecipient,
  yourWithdrawalWasSuccessful,
}) => {
  const stakeCompleteStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      overflow: propOverflow,
    };
  }, [propWidth1, propOverflow]);

  const paymentConfirmedYouContainerStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={`confirmation-frame13 ${className}`}>
      <div className="stake-complete13" style={stakeCompleteStyle}>
        <img
          className="frame-icon13"
          alt=""
          src={frame}
          style={frameIconStyle}
        />
        <b
          className="payment-confirmed-you-container"
          style={paymentConfirmedYouContainerStyle}
        >
          <p className="payment-confirmed">{paymentConfirmed}</p>
          <p className="you-have-confirmed">{youHaveConfirmedRecipient}</p>
          <p className="payment-confirmed">{yourWithdrawalWasSuccessful}</p>
        </b>
      </div>
    </div>
  );
};

ConfirmationFrame.propTypes = {
  className: PropTypes.string,
  frame: PropTypes.string,
  paymentConfirmed: PropTypes.string,
  youHaveConfirmedRecipient: PropTypes.string,
  yourWithdrawalWasSuccessful: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propOverflow: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default ConfirmationFrame;
