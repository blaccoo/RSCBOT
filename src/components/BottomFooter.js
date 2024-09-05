import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BottomFooter.css";

const BottomFooter = ({ className = "" }) => {
  const navigate = useNavigate();

  const onWalletContainerClick = useCallback(() => {
    navigate("/trade");
  }, [navigate]);

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onWalletContainerClick2 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeContainerClick = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  const onFriensContainerClick = useCallback(() => {
    navigate("/friends-profile");
  }, [navigate]);

  return (
    <div className={`bottom-tabs3 ${className}`}>
      <div className="wallet112" onClick={onWalletContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon1"
          alt=""
          src="/fluentdatahistogram20regular.svg"
        />
        <div className="trade21">Trade</div>
      </div>
      <div className="wallet112" onClick={onWalletContainerClick1}>
        <img
          className="fluentdata-histogram-20-regul-icon1"
          alt=""
          src="/wallet-icon1.svg"
        />
        <div className="trade21">Wallet</div>
      </div>
      <div className="wallet115" onClick={onWalletContainerClick2}>
        <img
          className="fluentdata-histogram-20-regul-icon1"
          alt=""
          src="/hugeiconstap02.svg"
        />
        <div className="trade21">Mine</div>
      </div>
      <div className="home4" onClick={onHomeContainerClick}>
        <div className="material-symbols-lighttask-al-group">
          <img
            className="fluentdata-histogram-20-regul-icon1"
            alt=""
            src="/materialsymbolslighttaskaltrounded1.svg"
          />
          <img className="icon-parkdot2" alt="" src="/iconparkdot.svg" />
          <div className="task3">Task</div>
        </div>
      </div>
      <div className="friens1" onClick={onFriensContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon1"
          alt=""
          src="/carbonfriendship.svg"
        />
        <div className="trade21">Friends</div>
      </div>
    </div>
  );
};

BottomFooter.propTypes = {
  className: PropTypes.string,
};

export default BottomFooter;
