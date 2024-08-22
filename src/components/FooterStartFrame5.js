import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame5.css";

const FooterStartFrame5 = ({ className = "", propAlignSelf, propWidth }) => {
  const footerStartFrame2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={`footer-start-frame33 ${className}`}
      style={footerStartFrame2Style}
    >
      <div className="footer-frame20">
        <div className="home-referral20">
          <div className="referal-frame20">
            <div className="referal-text20">
              <div className="refer-friends-to20">
                Refer friends to get referral bonus now
              </div>
            </div>
            <div className="frame-parent16">
              <div className="httpsrisingcoinxyzrefant-wrapper">
                <div className="httpsrisingcoinxyzrefant20">
                  https://risingcoin.xyz?ref=anthonyeyo
                </div>
              </div>
              <div className="rectangle-parent23">
                <div className="frame-child42" />
                <div className="frame-child43" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FooterStartFrame5;
