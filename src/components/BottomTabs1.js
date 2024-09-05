import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./BottomTabs1.css";

const BottomTabs1 = ({
  className = "",
  tradeIcon,
  walletIcon,
  hugeiconstap02,
  materialSymbolsLighttaskAlt,
  carbonfriendship,
  propOverflowY,
  propBorder,
  homeBorderRadius,
  homeBorder,
  homeHeight,
  iconParkdotTop,
  bottomTabsPosition,
  tradeHeight,
  tradeColor,
  walletColor,
  mineColor,
  taskColor,
  friendsColor,
  onWalletContainerClick,
  onHomeContainerClick,
  onWalletContainerClick1,
  onWalletContainerClick4,
}) => {
  const bottomTabsStyle = useMemo(() => {
    return {
      overflowY: propOverflowY,
      position: bottomTabsPosition,
    };
  }, [propOverflowY, bottomTabsPosition]);

  const walletStyle = useMemo(() => {
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

  const tradeStyle = useMemo(() => {
    return {
      height: tradeHeight,
    };
  }, [tradeHeight]);

  const trade1Style = useMemo(() => {
    return {
      color: tradeColor,
    };
  }, [tradeColor]);

  const wallet1Style = useMemo(() => {
    return {
      color: walletColor,
    };
  }, [walletColor]);

  const mineStyle = useMemo(() => {
    return {
      color: mineColor,
    };
  }, [mineColor]);

  const taskStyle = useMemo(() => {
    return {
      color: taskColor,
    };
  }, [taskColor]);

  const friendsStyle = useMemo(() => {
    return {
      color: friendsColor,
    };
  }, [friendsColor]);

  const navigate = useNavigate();

  const onWalletContainerClick2 = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onHomeContainerClick1 = useCallback(() => {
    navigate("/task");
  }, [navigate]);

  return (
   
    <div className="bottom-tabs11" style={{position:"fixed", bottom:"0", zIndex:"1000"}}>
    <div className={`bottom-tabs1 ${className}`} style={bottomTabsStyle}>
      <div
        className="trade16"
        style={tradeStyle}
        onClick={onWalletContainerClick1}
      >
        <img className="trade-icon" alt="" src={tradeIcon} />
        <div className="trade17" style={trade1Style}>
          Trade
        </div>
      </div>
      <div className="wallet85" onClick={onWalletContainerClick}>
        <img className="trade-icon" alt="" src={walletIcon} />
        <div className="trade17" style={wallet1Style}>
          Wallet
        </div>
      </div>
      <div
        className="wallet87"
        onClick={onWalletContainerClick}
        style={walletStyle}
      >
        <img className="trade-icon" alt="" src={hugeiconstap02} />
        <div className="trade17" style={mineStyle}>
          Mine
        </div>
      </div>
      <div className="home1" onClick={onHomeContainerClick} style={homeStyle}>
        <img
          className="material-symbols-lighttask-al-icon1"
          alt=""
          src={materialSymbolsLighttaskAlt}
        />
        <div className="task2" style={taskStyle}>
          Task
        </div>
        <img
          className="icon-parkdot1"
          alt=""
          src="/iconparkdot.svg"
          style={iconParkdotStyle}
        />
      </div>
      <div className="wallet85" onClick={onWalletContainerClick4}>
        <img className="trade-icon" alt="" src={carbonfriendship} />
        <div className="trade17" style={friendsStyle}>
          Friends
        </div>
      </div>
    </div>
    </div>
  );
};

BottomTabs1.propTypes = {
  className: PropTypes.string,
  tradeIcon: PropTypes.string,
  walletIcon: PropTypes.string,
  hugeiconstap02: PropTypes.string,
  materialSymbolsLighttaskAlt: PropTypes.string,
  carbonfriendship: PropTypes.string,

  /** Style props */
  propOverflowY: PropTypes.any,
  propBorder: PropTypes.any,
  homeBorderRadius: PropTypes.any,
  homeBorder: PropTypes.any,
  homeHeight: PropTypes.any,
  iconParkdotTop: PropTypes.any,
  bottomTabsPosition: PropTypes.any,
  tradeHeight: PropTypes.any,
  tradeColor: PropTypes.any,
  walletColor: PropTypes.any,
  mineColor: PropTypes.any,
  taskColor: PropTypes.any,
  friendsColor: PropTypes.any,

  /** Action props */
  onWalletContainerClick: PropTypes.func,
  onHomeContainerClick: PropTypes.func,
  onWalletContainerClick1: PropTypes.func,
  onWalletContainerClick4: PropTypes.func,
};

export default BottomTabs1;
