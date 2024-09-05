import PropTypes from "prop-types";
import "./SendAndRecieveFrame2.css";

const SendAndRecieveFrame2 = ({
  className = "",
  withdraw,
  onWithdrawContainerClick,
  onP2PContainerClick,
}) => {
  return (
    <div className={`send-and-recieve-frame11 ${className}`}>
      <div className="send3">
        <img className="send-icon-frame" alt="" src="/send-icon-frame.svg" />
        <div className="send4">Send</div>
      </div>
      <div className="send3">
        <img className="send-icon-frame" alt="" src="/receive-frame.svg" />
        <div className="send4">Receive</div>
      </div>
      <div className="withdraw4" onClick={onWithdrawContainerClick}>
        <img className="send-icon-frame" alt="" src="/withdraw-frame.svg" />
        <div className="send4">{withdraw}</div>
      </div>
      <div className="withdraw4" onClick={onP2PContainerClick}>
        <img className="send-icon-frame" alt="" src="/p2p-frame.svg" />
        <div className="send4">P2P</div>
      </div>
    </div>
  );
};

SendAndRecieveFrame2.propTypes = {
  className: PropTypes.string,
  withdraw: PropTypes.string,

  /** Action props */
  onWithdrawContainerClick: PropTypes.func,
  onP2PContainerClick: PropTypes.func,
};

export default SendAndRecieveFrame2;
