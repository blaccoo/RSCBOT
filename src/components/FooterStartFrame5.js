import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame5.css";

const FooterStartFrame5 = ({
  className = "",
  footerStartFramePosition,
  footerStartFrameBorderRadius,
  footerFrameHeight,
  homeReferralAlignSelf,
  homeReferralWidth,
  referalTextAlignSelf,
  referalTextPadding,
  referFriendsToWidth,
  referFriendsToAlignSelf,
  frameDivWidth,
  frameDivBorderRadius,
}) => {
  const footerStartFrame1Style = useMemo(() => {
    return {
      position: footerStartFramePosition,
      borderRadius: footerStartFrameBorderRadius,
    };
  }, [footerStartFramePosition, footerStartFrameBorderRadius]);

  const footerFrameStyle = useMemo(() => {
    return {
      height: footerFrameHeight,
    };
  }, [footerFrameHeight]);

  const homeReferralStyle = useMemo(() => {
    return {
      alignSelf: homeReferralAlignSelf,
      width: homeReferralWidth,
    };
  }, [homeReferralAlignSelf, homeReferralWidth]);

  const referalTextStyle = useMemo(() => {
    return {
      alignSelf: referalTextAlignSelf,
      padding: referalTextPadding,
    };
  }, [referalTextAlignSelf, referalTextPadding]);

  const referFriendsToStyle = useMemo(() => {
    return {
      width: referFriendsToWidth,
      alignSelf: referFriendsToAlignSelf,
    };
  }, [referFriendsToWidth, referFriendsToAlignSelf]);

  const frameDiv2Style = useMemo(() => {
    return {
      width: frameDivWidth,
      borderRadius: frameDivBorderRadius,
    };
  }, [frameDivWidth, frameDivBorderRadius]);

  return (
    <div
      className={`footer-start-frame30 ${className}`}
      style={footerStartFrame1Style}
    >
      <div className="footer-frame9" style={footerFrameStyle}>
        <div className="home-referral9" style={homeReferralStyle}>
          <div className="referal-frame9">
            <div className="referal-text9" style={referalTextStyle}>
              <div className="refer-friends-to7" style={referFriendsToStyle}>
                Refer friends to get referral bonus now
              </div>
            </div>
            <div className="frame-parent51" style={frameDiv2Style}>
              <div className="httpsrisingcoinxyzrefant-wrapper5">
                <div className="httpsrisingcoinxyzrefant7">
                  https://risingcoin.xyz?ref=anthonyeyo
                </div>
              </div>
              <div className="rectangle-parent10">
                <div className="frame-child16" />
                <div className="frame-child17" />
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
  footerStartFramePosition: PropTypes.any,
  footerStartFrameBorderRadius: PropTypes.any,
  footerFrameHeight: PropTypes.any,
  homeReferralAlignSelf: PropTypes.any,
  homeReferralWidth: PropTypes.any,
  referalTextAlignSelf: PropTypes.any,
  referalTextPadding: PropTypes.any,
  referFriendsToWidth: PropTypes.any,
  referFriendsToAlignSelf: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivBorderRadius: PropTypes.any,
};

export default FooterStartFrame5;
