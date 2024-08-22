import PropTypes from "prop-types";
import "./AdsFrame.css";

const AdsFrame = ({ className = "", updatePaymentInformation }) => {
  return (
    <div className={`ads-frame4 ${className}`}>
      <div className="guidancebank-wrapper">
        <img className="guidancebank-icon" alt="" src="/guidancebank.svg" />
      </div>
      <div className="notification-frame10">
        <div className="update-payment-information">
          {updatePaymentInformation}
        </div>
      </div>
    </div>
  );
};

AdsFrame.propTypes = {
  className: PropTypes.string,
  updatePaymentInformation: PropTypes.string,
};

export default AdsFrame;
