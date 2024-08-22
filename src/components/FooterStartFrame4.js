import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame4.css";

const FooterStartFrame4 = ({
  className = "",
  propHeight,
  hugeiconschatBot,
  bOTMinesFor1Hour,
  fluentEmojicoin,
  prop,
  teenyiconstickCircleSolid,
  pending,
}) => {
  const footerStartFrame1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`footer-start-frame30 ${className}`}
      style={footerStartFrame1Style}
    >
      <div className="wallet-parent1">
        <div className="wallet41">
          <img className="hugeiconschat-bot" alt="" src={hugeiconschatBot} />
        </div>
        <div className="wallet-parent2">
          <div className="wallet42">
            <div className="bot-mines-for">{bOTMinesFor1Hour}</div>
          </div>
          <div className="wallet43">
            <img
              className="teenyiconstick-circle-solid"
              alt=""
              src={fluentEmojicoin}
            />
            <div className="bot-mines-for">{prop}</div>
          </div>
        </div>
        <div className="wallet44">
          <img
            className="teenyiconstick-circle-solid"
            alt=""
            src={teenyiconstickCircleSolid}
          />
          <div className="bot-mines-for">{pending}</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame4.propTypes = {
  className: PropTypes.string,
  hugeiconschatBot: PropTypes.string,
  bOTMinesFor1Hour: PropTypes.string,
  fluentEmojicoin: PropTypes.string,
  prop: PropTypes.string,
  teenyiconstickCircleSolid: PropTypes.string,
  pending: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FooterStartFrame4;
