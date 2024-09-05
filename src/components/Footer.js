import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
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
    <div className={`bottom-tabs6 ${className}`}>
      <div className="wallet129" onClick={onWalletContainerClick}>
        <img
          className="fluentdata-histogram-20-regul-icon4"
          alt=""
          src="/fluentdatahistogram20regular.svg"
        />
        <div className="trade28">Trade</div>
      </div>
      <div className="wallet129" onClick={onWalletContainerClick1}>
        <img
          className="fluentdata-histogram-20-regul-icon4"
          alt=""
          src="/wallet-icon1.svg"
        />
        <div className="trade28">Wallet</div>
      </div>
      <div className="wallet132" onClick={onWalletContainerClick2}>
        <img
          className="fluentdata-histogram-20-regul-icon4"
          alt=""
          src="/hugeiconstap02.svg"
        />
        <div className="trade28">Mine</div>
      </div>
      <div className="material-symbols-lighttask-al-parent2">
        <img
          className="fluentdata-histogram-20-regul-icon4"
          alt=""
          src="/materialsymbolslighttaskaltrounded1.svg"
        />
        <img className="icon-parkdot5" alt="" src="/iconparkdot.svg" />
        <div className="task6">Task</div>
      </div>
      <div className="home5" onClick={onHomeContainerClick}>
        <div className="wallet129" onClick={onFriensContainerClick}>
          <img
            className="fluentdata-histogram-20-regul-icon4"
            alt=""
            src="/carbonfriendship1.svg"
          />
          <div className="trade28">Friends</div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
