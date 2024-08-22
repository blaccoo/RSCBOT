import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SendAndRecieveFrame4.css";

const SendAndRecieveFrame4 = ({
  className = "",
  mingcuteuser4Fill,
  youArePaying,
  propWidth,
}) => {
  const youArePaying1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`send-and-recieve-frame10 ${className}`}>
      <div className="withdraw3">
        <img
          className="mingcuteuser-4-fill-icon2"
          alt=""
          src={mingcuteuser4Fill}
        />
        <div className="you-are-paying1" style={youArePaying1Style}>
          {youArePaying}
        </div>
        <div className="herbetpere8">@herbetpere</div>
      </div>
      <div className="hgt65yt64">#908hgt65Yt6</div>
      <img
        className="solarcopy-outline-icon5"
        alt=""
        src="/solarcopyoutline.svg"
      />
    </div>
  );
};

SendAndRecieveFrame4.propTypes = {
  className: PropTypes.string,
  mingcuteuser4Fill: PropTypes.string,
  youArePaying: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default SendAndRecieveFrame4;
