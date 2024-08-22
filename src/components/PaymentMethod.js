import PropTypes from "prop-types";
import "./PaymentMethod.css";

const PaymentMethod = ({ className = "", paymeny, paymeny1 }) => {
  return (
    <div className={`payment-method54 ${className}`}>
      <div className="method2">
        <div className="paymeny4">{paymeny}</div>
      </div>
      <div className="paymeny-container">
        <div className="paymeny5">{paymeny1}</div>
        <img
          className="riarrow-drop-down-line-icon6"
          alt=""
          src="/riarrowdropdownline.svg"
        />
      </div>
    </div>
  );
};

PaymentMethod.propTypes = {
  className: PropTypes.string,
  paymeny: PropTypes.string,
  paymeny1: PropTypes.string,
};

export default PaymentMethod;
