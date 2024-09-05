import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SendAndRecieveFrame1.css";

const SendAndRecieveFrame1 = ({
  className = "",
  sendAndRecieveFrameHeight,
  mingcuteuser4Fill,
  trade,
}) => {
  const sendAndRecieveFrameStyle = useMemo(() => {
    return {
      height: sendAndRecieveFrameHeight,
    };
  }, [sendAndRecieveFrameHeight]);

  return (
    <div
      className={`send-and-recieve-frame9 ${className}`}
      style={sendAndRecieveFrameStyle}
    >
      <div className="p2p8">
        <img
          className="mingcuteuser-4-fill-icon1"
          alt=""
          src={mingcuteuser4Fill}
        />
        <div className="trade20">{trade}</div>
      </div>
    </div>
  );
};

SendAndRecieveFrame1.propTypes = {
  className: PropTypes.string,
  mingcuteuser4Fill: PropTypes.string,
  trade: PropTypes.string,

  /** Style props */
  sendAndRecieveFrameHeight: PropTypes.any,
};

export default SendAndRecieveFrame1;
