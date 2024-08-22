import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame2.css";

const FooterStartFrame2 = ({
  className = "",
  hugeiconstap06,
  multitap,
  prop,
  propHeight,
  level1,
}) => {
  const walletStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`footer-start-frame29 ${className}`}>
      <div className="hugeiconstap-06-parent">
        <img className="hugeiconstap-06" alt="" src={hugeiconstap06} />
        <div className="wallet-group">
          <div className="wallet38">
            <div className="multitap">{multitap}</div>
          </div>
          <div className="wallet39">
            <img
              className="fluent-emojicoin-icon1"
              alt=""
              src="/fluentemojicoin.svg"
            />
            <div className="multitap">{prop}</div>
          </div>
        </div>
        <div className="wallet40" style={walletStyle}>
          <div className="multitap">{level1}</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame2.propTypes = {
  className: PropTypes.string,
  hugeiconstap06: PropTypes.string,
  multitap: PropTypes.string,
  prop: PropTypes.string,
  level1: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FooterStartFrame2;
