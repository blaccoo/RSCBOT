import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Title.css";

const Title = ({
  className = "",
  frameDivHeight,
  frameDivOverflowY,
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  vector5,
  vector6,
  vector7,
  vector8,
  referralCountColor,
  fRIENDSColor,
  taskKeyColor,
  kEYSColor,
}) => {
  const titleStyle = useMemo(() => {
    return {
      height: frameDivHeight,
      overflowY: frameDivOverflowY,
    };
  }, [frameDivHeight, frameDivOverflowY]);

  const referralCountStyle = useMemo(() => {
    return {
      color: referralCountColor,
    };
  }, [referralCountColor]);

  const fRIENDSStyle = useMemo(() => {
    return {
      color: fRIENDSColor,
    };
  }, [fRIENDSColor]);

  const taskKeyStyle = useMemo(() => {
    return {
      color: taskKeyColor,
    };
  }, [taskKeyColor]);

  const kEYSStyle = useMemo(() => {
    return {
      color: kEYSColor,
    };
  }, [kEYSColor]);

  return (
    <div className={`title11 ${className}`} style={titleStyle}>
      <div className="mined-balance">
        <div className="mined-balance-inner">
          <div className="frame-parent52">
            <div className="frame-wrapper5">
              <div className="layer-3-wrapper">
                <div className="layer-3">
                  <div className="frame34">
                    <img className="vector-icon13" alt="" src={vector} />
                    <img className="vector-icon14" alt="" src={vector1} />
                    <img className="vector-icon15" alt="" src={vector2} />
                    <img className="vector-icon16" alt="" src="/vector6.svg" />
                    <img className="vector-icon17" alt="" src="/vector7.svg" />
                    <img className="vector-icon18" alt="" src={vector3} />
                    <img className="vector-icon19" alt="" src={vector4} />
                  </div>
                </div>
              </div>
            </div>
            <div className="referral-count-parent">
              <div className="referral-count" style={referralCountStyle}>
                Referral Count
              </div>
              <b className="keys" style={fRIENDSStyle}>
                91 FRIENDS
              </b>
            </div>
          </div>
        </div>
        <div className="mined-balance-inner">
          <div className="frame-parent52">
            <div className="frame-wrapper5">
              <div className="layer-3-wrapper">
                <div className="layer-3">
                  <div className="frame34">
                    <img className="vector-icon13" alt="" src={vector5} />
                    <img className="vector-icon14" alt="" src={vector6} />
                    <img className="vector-icon15" alt="" src={vector7} />
                    <img className="vector-icon16" alt="" src="/vector6.svg" />
                    <img className="vector-icon17" alt="" src="/vector7.svg" />
                    <img className="vector-icon18" alt="" src="/vector8.svg" />
                    <img className="vector-icon19" alt="" src={vector8} />
                  </div>
                </div>
              </div>
            </div>
            <div className="referral-count-parent">
              <div className="task-key" style={taskKeyStyle}>
                Task Key
              </div>
              <b className="keys" style={kEYSStyle}>
                455 KEYS
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Title.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  vector4: PropTypes.string,
  vector5: PropTypes.string,
  vector6: PropTypes.string,
  vector7: PropTypes.string,
  vector8: PropTypes.string,

  /** Style props */
  frameDivHeight: PropTypes.any,
  frameDivOverflowY: PropTypes.any,
  referralCountColor: PropTypes.any,
  fRIENDSColor: PropTypes.any,
  taskKeyColor: PropTypes.any,
  kEYSColor: PropTypes.any,
};

export default Title;
