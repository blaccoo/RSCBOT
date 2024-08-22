import CurrentBalanceBG from "./CurrentBalanceBG";
import BottomTabs from "./BottomTabs";
import PropTypes from "prop-types";
import "./CurrentBalanceFrame1.css";

const CurrentBalanceFrame1 = ({ className = "" }) => {
  return (
    <div className={`current-balance-frame5 ${className}`}>
      <CurrentBalanceBG prop="23965.45" nGN="NGN" balance="$ 19.60" />
      <BottomTabs
        propHeight="93px"
        walletIcon="/receive-frame.svg"
        wallet="Add Cash"
        fluenthome48Filled="/withdraw-frame.svg"
        home="Withdraw"
        tradeIcon="/p2p-frame.svg"
        trade="P2P"
      />
    </div>
  );
};

CurrentBalanceFrame1.propTypes = {
  className: PropTypes.string,
};

export default CurrentBalanceFrame1;
