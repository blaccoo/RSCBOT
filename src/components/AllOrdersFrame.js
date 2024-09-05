import { useMemo } from "react";
import PropTypes from "prop-types";
import "./AllOrdersFrame.css";

const AllOrdersFrame = ({
  className = "",
  propHeight,
  propHeight1,
  makePayment,
  propWidth,
  propDisplay,
  propHeight2,
  prop,
}) => {
  const allOrdersFrameStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const priceStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const makePaymentStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);

  const paymentMethodStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div
      className={`all-orders-frame12 ${className}`}
      style={allOrdersFrameStyle}
    >
      <div className="order-frame21">
        <div className="price24" style={priceStyle}>
          <div className="enter-amount7">
            <b className="make-payment1" style={makePaymentStyle}>
              {makePayment}
            </b>
          </div>
        </div>
        <div className="amounts-of-order23">
          <div className="bank4">Bank</div>
          <div className="bank4">Opay</div>
        </div>
        <div className="amounts-of-order23">
          <div className="bank4">Name</div>
          <div className="bank4">Nsisong Eyo</div>
        </div>
        <div className="payment-method55" style={paymentMethodStyle} />
        <div className="payment-method56">
          <div className="account-number3">Account Number</div>
          <div className="div150">7038788133</div>
          <img
            className="solarcopy-outline-icon6"
            alt=""
            src="/solarcopyoutline1.svg"
          />
        </div>
        <div className="orders-date-and-ref34" />
        <div className="orders-date-and-ref35">
          <div className="amount5">Amount</div>
          <div className="div151">{prop}</div>
          <div className="bank4">NGN</div>
        </div>
      </div>
    </div>
  );
};

AllOrdersFrame.propTypes = {
  className: PropTypes.string,
  makePayment: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propHeight2: PropTypes.any,
};

export default AllOrdersFrame;
