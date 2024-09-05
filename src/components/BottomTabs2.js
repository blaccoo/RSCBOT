import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BottomTabs2.css";

const BottomTabs2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onTradeContainerClick = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onWalletContainerClick = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onMineContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  const onFriensContainerClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className={`bottom-tabs4 ${className}`}>
      <div className="trade23" onClick={onTradeContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon2"
          alt=""
          src="/fluentdatahistogram20regular.svg"
        />
        <div className="trade24">Trade</div>
      </div>
      <div className="active1">
        <div className="trade23" onClick={onWalletContainerClick}>
          <img
            className="fluentdata-histogram-20-regul-icon2"
            alt=""
            src="/wallet-icon1.svg"
          />
          <div className="trade24">Wallet</div>
        </div>
      </div>
      <div className="mine4" onClick={onMineContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon2"
          alt=""
          src="/hugeiconstap02.svg"
        />
        <div className="trade24">Mine</div>
      </div>
      <div
        className="material-symbols-lighttask-al-container"
        onClick={onFrameContainerClick}
      >
        <img
          className="fluentdata-histogram-20-regul-icon2"
          alt=""
          src="/materialsymbolslighttaskaltrounded1.svg"
        />
        <img className="icon-parkdot3" alt="" src="/iconparkdot.svg" />
        <div className="task4">Task</div>
      </div>
      <div className="friens2" onClick={onFriensContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon2"
          alt=""
          src="/carbonfriendship.svg"
        />
        <div className="trade24">Friends</div>
      </div>
    </div>
  );
};

BottomTabs2.propTypes = {
  className: PropTypes.string,
};

export default BottomTabs2;
