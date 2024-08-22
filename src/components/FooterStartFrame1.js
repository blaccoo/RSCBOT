import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame1.css";

const FooterStartFrame1 = ({
  className = "",
  hugeiconsmarketing,
  special,
  solarmoneyBagBroken,
  profitPerDay,
  streamlineinvestmentSelection,
  investment,
  propHeight,
  frameDivLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  return (
    <div className={`footer-start-frame28 ${className}`}>
      <div className="wallet-parent" style={frameDivStyle}>
        <div className="wallet35">
          <img className="hugeiconsmarketing" alt="" src={hugeiconsmarketing} />
          <div className="special">{special}</div>
        </div>
        <div className="wallet35">
          <img
            className="hugeiconsmarketing"
            alt=""
            src={solarmoneyBagBroken}
          />
          <div className="special">{profitPerDay}</div>
        </div>
        <div className="wallet35">
          <img
            className="hugeiconsmarketing"
            alt=""
            src={streamlineinvestmentSelection}
          />
          <div className="special">{investment}</div>
        </div>
      </div>
      <div className="footer-start-frame-child" style={frameDiv1Style} />
    </div>
  );
};

FooterStartFrame1.propTypes = {
  className: PropTypes.string,
  hugeiconsmarketing: PropTypes.string,
  special: PropTypes.string,
  solarmoneyBagBroken: PropTypes.string,
  profitPerDay: PropTypes.string,
  streamlineinvestmentSelection: PropTypes.string,
  investment: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  frameDivLeft: PropTypes.any,
};

export default FooterStartFrame1;
