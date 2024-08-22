import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({ className = "", frameDivHeight, frameDivOverflowY }) => {
  const titleStyle = useMemo(() => {
    return {
      height: frameDivHeight,
      overflowY: frameDivOverflowY,
    };
  }, [frameDivHeight, frameDivOverflowY]);

  return (
    <div className={`title11 ${className}`} style={titleStyle}>
      <div className="mined-balance1">
        <div className="mined-balance-inner">
          <div className="frame-parent14">
            <div className="frame-wrapper1">
              <div className="layer-3-wrapper">
                <div className="layer-3">
                  <div className="frame20">
                    <img className="vector-icon14" alt="" src="/vector3.svg" />
                    <img className="vector-icon15" alt="" src="/vector4.svg" />
                    <img className="vector-icon16" alt="" src="/vector5.svg" />
                    <img className="vector-icon17" alt="" src="/vector6.svg" />
                    <img className="vector-icon18" alt="" src="/vector7.svg" />
                    <img className="vector-icon19" alt="" src="/vector8.svg" />
                    <img className="vector-icon20" alt="" src="/vector9.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="referral-count-parent">
              <div className="referral-count">Referral Count</div>
              <b className="friends">91 FRIENDS</b>
            </div>
          </div>
        </div>
        <div className="mined-balance-inner">
          <div className="frame-parent14">
            <div className="frame-wrapper1">
              <div className="layer-3-wrapper">
                <div className="layer-3">
                  <div className="frame20">
                    <img className="vector-icon14" alt="" src="/vector3.svg" />
                    <img className="vector-icon15" alt="" src="/vector4.svg" />
                    <img className="vector-icon16" alt="" src="/vector5.svg" />
                    <img className="vector-icon17" alt="" src="/vector6.svg" />
                    <img className="vector-icon18" alt="" src="/vector7.svg" />
                    <img className="vector-icon19" alt="" src="/vector8.svg" />
                    <img className="vector-icon20" alt="" src="/vector9.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="referral-count-parent">
              <div className="task-key">Task Key</div>
              <b className="friends">455 KEYS</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivHeight: PropTypes.any,
  frameDivOverflowY: PropTypes.any,
};

export default Title;
