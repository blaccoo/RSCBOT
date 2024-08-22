import CurrentBalanceBG from "./CurrentBalanceBG";
import SendAndRecieveFrame2 from "./SendAndRecieveFrame2";
import PropTypes from "prop-types";
import "./CurrentBalanceFrame3.css";

const CurrentBalanceFrame3 = ({ className = "" }) => {
  return (
    <div className={`current-balance-frame8 ${className}`}>
      <CurrentBalanceBG
        prop="230.6"
        nGN="USDT"
        propLeft="calc(50% - 35px)"
        balance="$ 230.6"
      />
      <SendAndRecieveFrame2 withdraw="Withdraw" />
    </div>
  );
};

CurrentBalanceFrame3.propTypes = {
  className: PropTypes.string,
};

export default CurrentBalanceFrame3;
