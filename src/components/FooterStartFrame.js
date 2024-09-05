import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame.css";

const FooterStartFrame = ({
  className = "",
  propHeight,
  propTop,
  propHeight1,
  propLeft,
  propPadding,
}) => {
  const footerStartFrame2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const referalText1Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight1,
      left: propLeft,
      padding: propPadding,
    };
  }, [propTop, propHeight1, propLeft, propPadding]);

  return (
    <div
      className={`footer-start-frame31 ${className}`}
      style={footerStartFrame2Style}
    >
      <div className="footer-frame10">
        <div className="home-referral10">
          <div className="referal-frame10">
            <div className="referal-link-frame">
              <div className="httpsrisingcoinxyzrefant8">
                https://risingcoin.xyz?ref=anthonyeyo
              </div>
              <div className="rectangle-parent11">
                <div className="frame-child18" />
                <div className="frame-child19" />
              </div>
            </div>
            <div className="referal-text10" style={referalText1Style}>
              <div className="refer-friends-to8">
                Refer friends to get 3 RSC or 5% every time they mine
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propTop: PropTypes.any,
  propHeight1: PropTypes.any,
  propLeft: PropTypes.any,
  propPadding: PropTypes.any,
};

export default FooterStartFrame;
