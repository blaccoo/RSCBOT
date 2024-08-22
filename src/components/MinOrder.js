import PropTypes from "prop-types";
import "./MinOrder.css";

const MinOrder = ({ className = "", prop, uSDT }) => {
  return (
    <div className={`min-order ${className}`}>
      <div className="min-amount-of-order-parent">
        <div className="min-amount-of">Min Amount of order</div>
        <div className="frame-wrapper3">
          <div className="min-parent">
            <div className="min6">Min</div>
            <div className="div147">{prop}</div>
            <div className="usdt36">{uSDT}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

MinOrder.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  uSDT: PropTypes.string,
};

export default MinOrder;
