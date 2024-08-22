import PropTypes from "prop-types";
import "./TransactionAndOverviewFram.css";

const TransactionAndOverviewFram = ({
  className = "",
  myBuyOrder,
  mySellOrder,
}) => {
  return (
    <div className={`transaction-and-overview-fram1 ${className}`}>
      <div className="my-buy-order">{myBuyOrder}</div>
      <div className="my-sell-order">{mySellOrder}</div>
      <img
        className="riarrow-drop-down-line-icon7"
        alt=""
        src="/riarrowdropdownline.svg"
      />
    </div>
  );
};

TransactionAndOverviewFram.propTypes = {
  className: PropTypes.string,
  myBuyOrder: PropTypes.string,
  mySellOrder: PropTypes.string,
};

export default TransactionAndOverviewFram;
