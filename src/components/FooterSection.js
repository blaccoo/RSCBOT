import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FooterSection.css";

const FooterSection = ({ className = "" }) => {
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
    <div className="bottom-tabs11" style={{position:"fixed", bottom:"0", zIndex:"1000"}}>
    <div className={`bottom-tabs5 ${className}`}>
      <div className="trade26" onClick={onTradeContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon3"
          alt=""
          src="/fluentdatahistogram20regular.svg"
        />
        <div className="trade27">Trade</div>
      </div>
      <div className="trade26" onClick={onWalletContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon3"
          alt=""
          src="/wallet-icon1.svg"
        />
        <div className="trade27">Wallet</div>
      </div>
      <div className="active2">
        <div className="mine6" onClick={onMineContainerClick}>
          <img
            className="fluentdata-histogram-20-regul-icon3"
            alt=""
            src="/hugeiconstap02.svg"
          />
          <div className="trade27">Mine</div>
        </div>
      </div>
      <div
        className="material-symbols-lighttask-al-parent1"
        onClick={onFrameContainerClick}
      >
        <img
          className="fluentdata-histogram-20-regul-icon3"
          alt=""
          src="/materialsymbolslighttaskaltrounded1.svg"
        />
        <img className="icon-parkdot4" alt="" src="/iconparkdot.svg" />
        <div className="task5">Task</div>
      </div>
      <div className="friens3" onClick={onFriensContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon3"
          alt=""
          src="/carbonfriendship.svg"
        />
        <div className="trade27">Friends</div>
      </div>
    </div>
    </div>
  );
};

FooterSection.propTypes = {
  className: PropTypes.string,
};

export default FooterSection;
