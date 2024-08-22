import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SendAndRecieveFrame.css";

const SendAndRecieveFrame = ({
  className = "",
  mingcuteuser4Fill,
  youArePaying,
  propWidth,
  herbetpere,
  propWidth1,
  youArePayingHeight,
  youArePayingAlignSelf,
}) => {
  const youArePayingStyle = useMemo(() => {
    return {
      width: propWidth,
      height: youArePayingHeight,
      alignSelf: youArePayingAlignSelf,
    };
  }, [propWidth, youArePayingHeight, youArePayingAlignSelf]);

  const herbetpereStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={`send-and-recieve-frame8 ${className}`}>
      <div className="withdraw2">
        <img
          className="mingcuteuser-4-fill-icon"
          alt=""
          src={mingcuteuser4Fill}
        />
        <div className="you-are-paying" style={youArePayingStyle}>
          {youArePaying}
        </div>
        <div className="herbetpere7" style={herbetpereStyle}>
          {herbetpere}
        </div>
      </div>
    </div>
  );
};

SendAndRecieveFrame.propTypes = {
  className: PropTypes.string,
  mingcuteuser4Fill: PropTypes.string,
  youArePaying: PropTypes.string,
  herbetpere: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  youArePayingHeight: PropTypes.any,
  youArePayingAlignSelf: PropTypes.any,
};

export default SendAndRecieveFrame;
