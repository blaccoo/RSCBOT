import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FooterStartFrame6.css";

const FooterStartFrame6 = ({
  className = "",
  tablerxboxBFilled,
  joinBlumBOT,
  fluentEmojicoin,
  prop,
  teenyiconstickCircleSolid,
  footerStartFramePosition,
  footerStartFrameAlignSelf,
  frameDivHeight,
  frameDivPadding,
  frameDivWidth,
  frameDivHeight1,
  frameDivPadding1,
  fluentEmojicoinIconWidth,
  fluentEmojicoinIconHeight,
  teenyiconstickCircleSolidWidth,
  teenyiconstickCircleSolidHeight,
}) => {
  const footerStartFrameStyle = useMemo(() => {
    return {
      position: footerStartFramePosition,
      alignSelf: footerStartFrameAlignSelf,
    };
  }, [footerStartFramePosition, footerStartFrameAlignSelf]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frameDivHeight,
      padding: frameDivPadding,
    };
  }, [frameDivHeight, frameDivPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight1,
      padding: frameDivPadding1,
    };
  }, [frameDivWidth, frameDivHeight1, frameDivPadding1]);

  const fluentEmojicoinIconStyle = useMemo(() => {
    return {
      width: fluentEmojicoinIconWidth,
      height: fluentEmojicoinIconHeight,
    };
  }, [fluentEmojicoinIconWidth, fluentEmojicoinIconHeight]);

  const teenyiconstickCircleSolidStyle = useMemo(() => {
    return {
      width: teenyiconstickCircleSolidWidth,
      height: teenyiconstickCircleSolidHeight,
    };
  }, [teenyiconstickCircleSolidWidth, teenyiconstickCircleSolidHeight]);

  return (
    <div
      className={`footer-start-frame29 ${className}`}
      style={footerStartFrameStyle}
    >
      <div className="wallet-parent11" style={frameDivStyle}>
        <div className="wallet89">
          <img
            className="tablerxbox-b-filled-icon"
            alt=""
            src={tablerxboxBFilled}
          />
          <img
            className="tablerxbox-b-filled-icon"
            alt=""
            src="/iconoiryoutube1.svg"
          />
        </div>
        <div className="wallet-parent12" style={frameDiv1Style}>
          <div className="wallet90">
            <div className="join-blum-bot">{joinBlumBOT}</div>
          </div>
          <div className="wallet91">
            <img
              className="fluent-emojicoin-icon14"
              alt=""
              src={fluentEmojicoin}
              style={fluentEmojicoinIconStyle}
            />
            <div className="join-blum-bot">{prop}</div>
          </div>
        </div>
        <div className="wallet92">
          <img
            className="fluent-emojicoin-icon14"
            alt=""
            src={teenyiconstickCircleSolid}
            style={teenyiconstickCircleSolidStyle}
          />
          <div className="join-blum-bot">Pending</div>
        </div>
      </div>
    </div>
  );
};

FooterStartFrame6.propTypes = {
  className: PropTypes.string,
  tablerxboxBFilled: PropTypes.string,
  joinBlumBOT: PropTypes.string,
  fluentEmojicoin: PropTypes.string,
  prop: PropTypes.string,
  teenyiconstickCircleSolid: PropTypes.string,

  /** Style props */
  footerStartFramePosition: PropTypes.any,
  footerStartFrameAlignSelf: PropTypes.any,
  frameDivHeight: PropTypes.any,
  frameDivPadding: PropTypes.any,
  frameDivWidth: PropTypes.any,
  frameDivHeight1: PropTypes.any,
  frameDivPadding1: PropTypes.any,
  fluentEmojicoinIconWidth: PropTypes.any,
  fluentEmojicoinIconHeight: PropTypes.any,
  teenyiconstickCircleSolidWidth: PropTypes.any,
  teenyiconstickCircleSolidHeight: PropTypes.any,
};

export default FooterStartFrame6;
