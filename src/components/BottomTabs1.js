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
    <div className="bottom-tabs11" >

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
