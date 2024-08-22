import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame3.css";

const FooterStartFrame3 = ({
  className = "",
  gameIconsrobotGolem,
  bOTMinesFor24Hours,
  magestarFill,
  prop,
  teenyiconstickCircleSolid,
  purchased,
  propWidth,
  propDisplay,
}) =>  {
  const purchasedStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
    };
  }, [propWidth, propDisplay]);


  return (
    <div className={`footer-start-frame31 ${className}`}>
      <div className="game-iconsrobot-golem-parent">
        <img
          className="game-iconsrobot-golem"
          alt=""
          src={gameIconsrobotGolem}
        />
        <div className="wallet-parent3">
          <div className="wallet45">
            <div className="bot-mines-for1">{bOTMinesFor24Hours}</div>
          </div>
          <div className="wallet46">
            <img className="magestar-fill-icon" alt="" src={magestarFill} />
            <div className="bot-mines-for1">{prop}</div>
          </div>
        </div>
        <div className="wallet47">
          <img
            className="teenyiconstick-circle-solid1"
            alt=""
            src={teenyiconstickCircleSolid}
          />
          <div className="purchased" style={purchasedStyle}>
            {purchased}
          </div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame3.propTypes = {
  className: PropTypes.string,
  gameIconsrobotGolem: PropTypes.string,
  bOTMinesFor24Hours: PropTypes.string,
  magestarFill: PropTypes.string,
  prop: PropTypes.string,
  teenyiconstickCircleSolid: PropTypes.string,
  purchased: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default FooterStartFrame3;
