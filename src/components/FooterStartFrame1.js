import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FooterStartFrame1.css";

const FooterStartFrame1 = ({
  className = "",
  propHeight,
  solarmoneyBagBroken,
  profitPerDay,
  streamlineinvestmentSelection,
  investment,
  hugeiconsmarketing,
  special,
  frameDivLeft,
  hugeiconsfire,
  boast,
  walletWidth,
  onWalletContainerClick,
  onWalletContainerClick1,
}) => {
  const frameDiv3Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv4Style = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  const wallet2Style = useMemo(() => {
    return {
      width: walletWidth,
    };
  }, [walletWidth]);

  const navigate = useNavigate();

  const onWalletContainerClick2 = useCallback(() => {
    navigate("/boast");
  }, [navigate]);

  const onWalletContainerClick3 = useCallback(() => {
    navigate("/coming-market-place");
  }, [navigate]);

  return (
    <div className={`footer-start-frame33 ${className}`}>
      <div className="wallet-parent13" style={frameDiv3Style}>
        <div className="wallet95" onClick={onWalletContainerClick}>
          <img className="hugeiconsmarketing" alt="" src={hugeiconsmarketing} />
          <div className="special">{special}</div>
        </div>
        <div className="wallet96" onClick={onWalletContainerClick}>
          <img className="hugeiconsmarketing" alt="" src={hugeiconsfire} />
          <div className="special">{boast}</div>
        </div>
        <div
          className="wallet97"
          onClick={onWalletContainerClick1}
          style={wallet2Style}
        >
          <img
            className="hugeiconsmarketing"
            alt=""
            src={streamlineinvestmentSelection}
          />
          <div className="special">{investment}</div>
        </div>
      </div>
      <div className="footer-start-frame-child" style={frameDiv4Style} />
    </div>
  );
};

FooterStartFrame1.propTypes = {
  className: PropTypes.string,
  solarmoneyBagBroken: PropTypes.string,
  profitPerDay: PropTypes.string,
  streamlineinvestmentSelection: PropTypes.string,
  investment: PropTypes.string,
  hugeiconsmarketing: PropTypes.string,
  special: PropTypes.string,
  hugeiconsfire: PropTypes.string,
  boast: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  frameDivLeft: PropTypes.any,
  walletWidth: PropTypes.any,

  /** Action props */
  onWalletContainerClick: PropTypes.func,
  onWalletContainerClick1: PropTypes.func,
};

export default FooterStartFrame1;
