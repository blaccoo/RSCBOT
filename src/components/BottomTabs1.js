import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BottomTabs1.css";

const BottomTabs1 = ({
  className = "",
  materialSymbolsLighttaskAlt,
  propOverflowY,
  propBorder,
  homeBorderRadius,
  homeBorder,
  homeHeight,
  iconParkdotTop,
  onWalletContainerClick,
  onHomeContainerClick,
}) => {
  const bottomTabs1Style = useMemo(() => {
    return {
      overflowY: propOverflowY,
    };
  }, [propOverflowY]);

  const wallet1Style = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const homeStyle = useMemo(() => {
    return {
      borderRadius: homeBorderRadius,
      border: homeBorder,
      height: homeHeight,
    };
  }, [homeBorderRadius, homeBorder, homeHeight]);

  const iconParkdotStyle = useMemo(() => {
    return {
      top: iconParkdotTop,
    };
  }, [iconParkdotTop]);

  const navigate = useNavigate();

  const onWalletContainerClick1 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeContainerClick1 = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
    <div className="bottom-tabs11" style={{position:"fixed", bottom:"0", zIndex:"1000"}}>
  <div className={`bottom-tabs1 ${className}`} style={bottomTabs1Style}>
      <div className="trade18">
        <img className="carbonfriendship-icon" alt="" src="/trade-icon1.svg" />
        <div className="mine">Trade</div>
      </div>
      <div className="wallet52" onClick={onWalletContainerClick}>
        <img className="carbonfriendship-icon" alt="" src="/wallet-icon1.svg" />
        <div className="mine">Wallet</div>
      </div>
      <div
        className="wallet54"
        onClick={onWalletContainerClick}
        style={wallet1Style}
      >
        <img
          className="carbonfriendship-icon"
          alt=""
          src="/hugeiconstap02.svg"
        />
        <div className="mine">Mine</div>
      </div>
      <div className="home3" onClick={onHomeContainerClick} style={homeStyle}>
        <img
          className="material-symbols-lighttask-al-icon"
          alt=""
          src={materialSymbolsLighttaskAlt}
        />
        <div className="task1">Task</div>
        <img
          className="icon-parkdot"
          alt=""
          src="/iconparkdot.svg"
          style={iconParkdotStyle}
        />
      </div>
      <div className="wallet52">
        <img
          className="carbonfriendship-icon"
          alt=""
          src="/carbonfriendship.svg"
        />
        <div className="mine">Friends</div>
      </div>
    </div>
    </div>
  
  );
};

BottomTabs1.propTypes = {
  className: PropTypes.string,
  materialSymbolsLighttaskAlt: PropTypes.string,

  /** Style props */
  propOverflowY: PropTypes.any,
  propBorder: PropTypes.any,
  homeBorderRadius: PropTypes.any,
  homeBorder: PropTypes.any,
  homeHeight: PropTypes.any,
  iconParkdotTop: PropTypes.any,

  /** Action props */
  onWalletContainerClick: PropTypes.func,
  onHomeContainerClick: PropTypes.func,
};

export default BottomTabs1;
