import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SendAndRecieveFrame2 from "./SendAndRecieveFrame2";
import PropTypes from "prop-types";
import "./CurrentBalanceFrame5.css";

const CurrentBalanceFrame5 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onWithdrawContainerClick = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onP2PContainerClick = useCallback(() => {
    navigate("/p2p");
  }, [navigate]);

  return (
    <div className={`current-balance-frame10 ${className}`}>
      <div className="current-balance-bg2">
        <div className="current-balance-title2">
          <div className="current-balance2">Current Balance</div>
        </div>
        <div className="balace-frame2">
          <div className="description2">
            <div className="div188">2836.348</div>
            <div className="usd1">USD</div>
          </div>
        </div>
      </div>
      <SendAndRecieveFrame2
        withdraw="Trade"
        onWithdrawContainerClick={onWithdrawContainerClick}
        onP2PContainerClick={onP2PContainerClick}
      />
    </div>
  );
};

CurrentBalanceFrame5.propTypes = {
  className: PropTypes.string,
};

export default CurrentBalanceFrame5;
